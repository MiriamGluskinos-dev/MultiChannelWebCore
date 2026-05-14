var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { provide } from '@lit/context';
import Quill from 'quill';
import { IGDS_TAGS, IGDS_EVENTS } from '../constants';
import { IGDS_TOOLBAR_COMMAND } from './constant';
import { AngularFormElement } from '../abstractions';
import { generateId } from '../utils';
import { helpOutlined, ltr, rtl, orderedList, unorderedList, indentIncrease, indentDecrease, stroke, underline, italic, bold, } from '@igds/icons';
import { IgdsRichTextEditorContext, igdsRichTextEditorContext, } from './rich-text-editor-context';
import styles from './igds-rich-text-editor.scss?inline';
import '../icon';
import '../tooltip';
import '../error-box/default-error-box';
import './editor-toolbar';
import './toolbar-item';
let RichTextEditor = class RichTextEditor extends AngularFormElement {
    get validity() {
        return this._internals.validity;
    }
    checkValidity() {
        return this._internals.checkValidity();
    }
    reportValidity() {
        return this._internals.reportValidity();
    }
    transformText(transformation) {
        const range = this.quill.getSelection() ?? { index: 0, length: 0 };
        if (range) {
            const format = this.quill.getFormat(range.index, range.length);
            const isTransformed = format[transformation] === true;
            this.quill.format(transformation, !isTransformed);
        }
    }
    makeList(listType) {
        const range = this.quill.getSelection() ?? { index: 0, length: 0 };
        if (!range) {
            return;
        }
        const format = this.quill.getFormat(range.index, range.length);
        if (format['list'] === 'bullet' && listType !== 'bullet') {
            this.quill.format('list', 'ordered');
            return;
        }
        if (format['list'] === 'ordered' && listType !== 'ordered') {
            this.quill.format('list', 'bullet');
            return;
        }
        this.quill.format('list', format['list'] === undefined ? listType : undefined);
    }
    makeIndent(direction) {
        const range = this.quill.getSelection() ?? { index: 0, length: 0 };
        if (range) {
            const format = this.quill.getFormat(range.index, range.length);
            const currentIndent = typeof format.indent === 'number' ? format.indent : 0;
            const newIndent = direction === 'increase'
                ? currentIndent + 1
                : Math.max(currentIndent - 1, 0);
            this.quill.format('indent', newIndent || (newIndent === 0 ? false : undefined));
        }
    }
    changeTextDirection(command) {
        if (this.quillEditor) {
            this.quillEditor.focus();
        }
        if (this.customEditorTextDirection === command) {
            this.customEditorTextDirection = undefined;
            return;
        }
        this.customEditorTextDirection = command;
    }
    onInput() {
        const value = this.quill.getSemanticHTML();
        this.value = value;
        this.input.value = value;
        this.defaultValue = '';
        this._internals.setFormValue(value ?? null);
        this.emit(IGDS_EVENTS.input, value);
        this.applyInternalInputValidityOnComponent();
    }
    applyInternalInputValidityOnComponent() {
        if (!this.input) {
            return;
        }
        this._internals.setValidity(this.input.validity, this.error || `${this.name} value is invalid`, this.input);
    }
    isEmptyValue() {
        if (!this.quill) {
            return true;
        }
        if (/<(ul|ol)[\s>]/.test(this.quill.getSemanticHTML())) {
            return false;
        }
        return this.quill.getText().trim() === '';
    }
    onFocus() {
        const value = this.quill.getSemanticHTML();
        this.value = value;
        this.isFocused = true;
        this.emit(IGDS_EVENTS.focus, value);
    }
    onBlur() {
        const value = this.quill.getSemanticHTML();
        this.value = value;
        this.isFocused = false;
        this.emit(IGDS_EVENTS.change, value);
        this.emit(IGDS_EVENTS.blur, value);
        this.emulateChangeEvent();
    }
    emulateChangeEvent() {
        const event = new Event('change');
        this.input.dispatchEvent(event);
    }
    onChangeHandler(event) {
        this.onChange?.(event);
    }
    handleToolbarClick(e) {
        const command = e.detail.value.command;
        const commandHandlers = {
            [IGDS_TOOLBAR_COMMAND.bold]: () => this.transformText('bold'),
            [IGDS_TOOLBAR_COMMAND.italic]: () => this.transformText('italic'),
            [IGDS_TOOLBAR_COMMAND.underline]: () => this.transformText('underline'),
            [IGDS_TOOLBAR_COMMAND.strike]: () => this.transformText('strike'),
            [IGDS_TOOLBAR_COMMAND.unorderedList]: () => this.makeList('bullet'),
            [IGDS_TOOLBAR_COMMAND.orderedList]: () => this.makeList('ordered'),
            [IGDS_TOOLBAR_COMMAND.indentIncrease]: () => this.makeIndent('increase'),
            [IGDS_TOOLBAR_COMMAND.indentDecrease]: () => this.makeIndent('decrease'),
            [IGDS_TOOLBAR_COMMAND.rtl]: () => this.changeTextDirection('rtl'),
            [IGDS_TOOLBAR_COMMAND.ltr]: () => this.changeTextDirection('ltr'),
        };
        commandHandlers[command]();
    }
    initToolbarSlot() {
        setTimeout(() => {
            const slottedChildren = this.querySelectorAll("[slot='toolbar']");
            if (slottedChildren.length > 0) {
                this.toolbarContainer.replaceChildren();
                slottedChildren.forEach((tools) => {
                    this.toolbarContainer.appendChild(tools);
                });
            }
        });
    }
    constructor() {
        super();
        this.quillEditor = null;
        this.uniqueId = generateId();
        this.labelId = `label-${this.uniqueId}`;
        this.quillId = `quill-${this.uniqueId}`;
        this.inputHelpMessageId = `input-help-message-${this.uniqueId}`;
        this.errorId = `error-${this.uniqueId}`;
        this.disabled = false;
        this.required = false;
        this.readonly = false;
        this.invalid = false;
        this.autoFocus = false;
        this.onChange = null;
        this.isFocused = false;
        this.context = new IgdsRichTextEditorContext();
        this._internals = this.attachInternals();
        this.onInput = this.onInput.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.handleToolbarClick = this.handleToolbarClick.bind(this);
    }
    createRenderRoot() {
        return this;
    }
    connectedCallback() {
        super.connectedCallback();
        const componentStyles = document.querySelector('style[data-igds="rich-text-editor-global"]');
        if (!componentStyles) {
            const s = document.createElement('style');
            s.setAttribute('data-igds', 'rich-text-editor-global');
            s.innerHTML = styles;
            document.head.append(s);
        }
    }
    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        this.quill = new Quill(this.quillElement, {
            modules: {
                keyboard: { bindings: { tab: false } },
            },
        });
        this.quill.on('text-change', this.onInput);
        if (this.defaultValue) {
            this.quill.clipboard.dangerouslyPasteHTML(0, this.defaultValue);
        }
        this.quillEditor = this.quillElement.querySelector('[contenteditable]');
        if (this.quillEditor) {
            this.quillEditor.addEventListener('focus', this.onFocus);
            this.quillEditor.addEventListener('blur', this.onBlur);
        }
        this.toolbarContainer.addEventListener(IGDS_EVENTS.click, this.handleToolbarClick);
        this.initToolbarSlot();
    }
    updated(_changedProperties) {
        super.updated(_changedProperties);
        if (_changedProperties.has('disabled') && this.disabled) {
            this.quill.disable();
            this.context = { ...this.context, toolbarDisabled: true };
            return;
        }
        if (_changedProperties.has('disabled') &&
            _changedProperties.get('disabled') === true &&
            !this.disabled) {
            this.quill.enable();
            this.context = { ...this.context, toolbarDisabled: false };
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.quill.off('text-change', this.onInput);
        if (this.quillEditor) {
            this.quillEditor.removeEventListener('focus', this.onFocus);
            this.quillEditor.removeEventListener('blur', this.onBlur);
        }
        this.toolbarContainer.removeEventListener(IGDS_EVENTS.click, this.handleToolbarClick);
    }
    get editorMaxHeight() {
        if (!this.maxHeight) {
            return undefined;
        }
        const maxHeight = /^\d+$/.test(this.maxHeight)
            ? `${this.maxHeight}px`
            : this.maxHeight;
        return maxHeight;
    }
    renderHeader() {
        return html `
      <header class="igds-rich-text-editor__label-box">
        ${when(this.label, () => html ` <label
            for=${this.quillId}
            id=${this.labelId}
            class=${classMap({
            'igds-rich-text-editor__label': true,
            'igds-rich-text-editor__label--required': this.required,
        })}
          >
            ${this.label}
          </label>`)}
        ${when(this.tooltipIcon, () => html `
            <igds-tooltip
              content=${this.tooltipIcon ?? ''}
              placement="inset-inline-end"
              class="igds-rich-text-editor__tooltip"
            >
              <igds-icon
                node=${helpOutlined}
                class="igds-rich-text-editor__tooltip-icon"
                tabindex="0"
              >
              </igds-icon>
            </igds-tooltip>
          `)}
        ${when(this.tooltipQuestion && this.tooltipAnswer, () => html `
            <igds-tooltip
              content=${this.tooltipAnswer ?? ''}
              placement="inset-inline-end"
              class="igds-rich-text-editor__question"
            >
              <span
                class="igds-rich-text-editor__tooltip-question"
                tabindex="0"
              >
                ${this.tooltipQuestion}
              </span>
            </igds-tooltip>
          `)}
      </header>
    `;
    }
    renderToolbar() {
        return html `
      <div class="igds-rich-text-editor__toolbars">
        <slot name="toolbar">
          <igds-editor-toolbar>
            <igds-toolbar-item
              icon=${rtl}
              command=${IGDS_TOOLBAR_COMMAND.rtl}
              label="מעבר ל-RTL"
            ></igds-toolbar-item>
            <igds-toolbar-item
              icon=${ltr}
              command=${IGDS_TOOLBAR_COMMAND.ltr}
              label="מעבר ל-LTR"
            ></igds-toolbar-item>
          </igds-editor-toolbar>
          <igds-editor-toolbar>
            <igds-toolbar-item
              icon=${indentDecrease}
              command=${IGDS_TOOLBAR_COMMAND.indentDecrease}
              label="הקטנת כניסה"
            ></igds-toolbar-item>
            <igds-toolbar-item
              icon=${indentIncrease}
              command=${IGDS_TOOLBAR_COMMAND.indentIncrease}
              label="הגדלת כניסה"
            ></igds-toolbar-item>
            <igds-toolbar-item
              icon=${orderedList}
              command=${IGDS_TOOLBAR_COMMAND.orderedList}
              label="רשימה מסודרת"
            ></igds-toolbar-item>
            <igds-toolbar-item
              icon=${unorderedList}
              command=${IGDS_TOOLBAR_COMMAND.unorderedList}
              label="רשימה לא מסודרת"
            ></igds-toolbar-item>
          </igds-editor-toolbar>
          <igds-editor-toolbar>
            <igds-toolbar-item
              icon=${stroke}
              command=${IGDS_TOOLBAR_COMMAND.strike}
              label="טקסט מחיקה"
            ></igds-toolbar-item>
            <igds-toolbar-item
              icon=${underline}
              command=${IGDS_TOOLBAR_COMMAND.underline}
              label="טֶקְסְט מְקֻוָּק בְּקַו תַּחְתִּי"
            ></igds-toolbar-item>
            <igds-toolbar-item
              icon=${italic}
              command=${IGDS_TOOLBAR_COMMAND.italic}
              label="טֶקְסְט נָטוּי"
            ></igds-toolbar-item>
            <igds-toolbar-item
              icon=${bold}
              command=${IGDS_TOOLBAR_COMMAND.bold}
              label="טֶקְסְט בְּכָתָב מֻדְגָּשׁ"
            ></igds-toolbar-item>
          </igds-editor-toolbar>
        </slot>
      </div>
    `;
    }
    renderEditor() {
        return html `
      <div class="igds-rich-text-editor__box">
        <textarea
          name=${ifDefined(this.name)}
          form=${ifDefined(this.form)}
          placeholder=${ifDefined(this.placeholder)}
          class="igds-rich-text-editor__textarea"
          tabindex="-1"
          @change=${this.onChangeHandler}
        ></textarea>
        <div
          id=${this.quillId}
          role="textbox"
          aria-describedby=${ifDefined(this.helpText ? this.inputHelpMessageId : undefined)}
          aria-invalid=${this.invalid}
          aria-errormessage=${this.errorId}
          aria-labelledby=${this.labelId}
          class="igds-rich-text-editor__element"
          dir=${ifDefined(this.customEditorTextDirection
            ? this.customEditorTextDirection
            : undefined)}
          data-quill
          style=${styleMap({
            'max-height': this.editorMaxHeight,
        })}
        ></div>
        ${when(this.placeholder && !this.isFocused && this.isEmptyValue(), () => html `
            <span aria-hidden="true" class="igds-rich-text-editor__placeholder"
              >${this.placeholder}</span
            >
          `)}
      </div>
    `;
    }
    renderHelpText() {
        return when(this.helpText || this.error, () => html `
        <footer class="igds-rich-text-editor__footer">
          <div
            class="igds-rich-text-editor__help-box"
            id=${this.inputHelpMessageId}
          >
            ${when(this.helpIcon, () => html `<igds-icon
                  node=${this.helpIcon}
                  class="igds-rich-text-editor__icon"
                ></igds-icon>`)}
            <span class="igds-rich-text-editor__message">${this.helpText}</span>
          </div>
        </footer>
      `);
    }
    renderError() {
        return when(this.invalid && this.error, () => html `
        <igds-default-error-box
          id=${this.errorId}
          class="rich-text-editor__error-box"
          errormessage=${ifDefined(this.error)}
        >
        </igds-default-error-box>
      `);
    }
    render() {
        return html `
      <div
        class=${classMap({
            'igds-rich-text-editor': true,
            'igds-rich-text-editor--disabled': this.disabled,
            'igds-rich-text-editor--invalid': this.invalid,
        })}
      >
        ${this.renderHeader()}
        <section class="igds-rich-text-editor__body">
          ${this.renderToolbar()} ${this.renderEditor()}
        </section>
        ${this.renderHelpText()} ${this.renderError()}
      </div>
    `;
    }
};
RichTextEditor.formAssociated = true;
__decorate([
    property({ type: String })
], RichTextEditor.prototype, "label", void 0);
__decorate([
    property({ type: String })
], RichTextEditor.prototype, "name", void 0);
__decorate([
    property({ type: String })
], RichTextEditor.prototype, "form", void 0);
__decorate([
    property({ type: String, attribute: 'default-value' })
], RichTextEditor.prototype, "defaultValue", void 0);
__decorate([
    property({ type: String })
], RichTextEditor.prototype, "placeholder", void 0);
__decorate([
    property({ type: Boolean })
], RichTextEditor.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean })
], RichTextEditor.prototype, "required", void 0);
__decorate([
    property({ type: Boolean })
], RichTextEditor.prototype, "readonly", void 0);
__decorate([
    property({ type: String, attribute: 'help-text' })
], RichTextEditor.prototype, "helpText", void 0);
__decorate([
    property({ type: String, attribute: 'help-icon' })
], RichTextEditor.prototype, "helpIcon", void 0);
__decorate([
    property({ type: String, attribute: 'tooltip-icon' })
], RichTextEditor.prototype, "tooltipIcon", void 0);
__decorate([
    property({ type: String, attribute: 'tooltip-question' })
], RichTextEditor.prototype, "tooltipQuestion", void 0);
__decorate([
    property({ type: String, attribute: 'tooltip-answer' })
], RichTextEditor.prototype, "tooltipAnswer", void 0);
__decorate([
    property({ type: Boolean })
], RichTextEditor.prototype, "invalid", void 0);
__decorate([
    property({ type: String })
], RichTextEditor.prototype, "error", void 0);
__decorate([
    property({ type: Boolean, attribute: 'auto-focus' })
], RichTextEditor.prototype, "autoFocus", void 0);
__decorate([
    property({ attribute: false })
], RichTextEditor.prototype, "onChange", void 0);
__decorate([
    property({ type: String, attribute: 'max-height' })
], RichTextEditor.prototype, "maxHeight", void 0);
__decorate([
    state()
], RichTextEditor.prototype, "isFocused", void 0);
__decorate([
    state()
], RichTextEditor.prototype, "customEditorTextDirection", void 0);
__decorate([
    query('[data-quill]')
], RichTextEditor.prototype, "quillElement", void 0);
__decorate([
    query('.igds-rich-text-editor__toolbars')
], RichTextEditor.prototype, "toolbarContainer", void 0);
__decorate([
    query('.igds-rich-text-editor__textarea')
], RichTextEditor.prototype, "input", void 0);
__decorate([
    provide({ context: igdsRichTextEditorContext })
], RichTextEditor.prototype, "context", void 0);
RichTextEditor = __decorate([
    customElement(IGDS_TAGS.richTextEditor)
], RichTextEditor);
export { RichTextEditor };

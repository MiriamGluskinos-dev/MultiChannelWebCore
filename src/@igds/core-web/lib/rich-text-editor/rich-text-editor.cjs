"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.cjs");const n=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/lit-html.cjs");require("../node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.cjs");const y=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.cjs"),o=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.cjs"),x=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/state.cjs"),g=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query.cjs"),a=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/when.cjs"),b=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/class-map.cjs"),_=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/style-map.cjs"),c=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/if-defined.cjs"),f=require("../node_modules/.pnpm/@lit_context@1.1.6/node_modules/@lit/context/lib/decorators/provide.cjs"),q=require("quill"),u=require("../constants/events.cjs"),E=require("../constants/tags.cjs"),r=require("./constant.cjs"),D=require("../abstractions/angular-form-element.cjs"),I=require("../utils/common.cjs"),d=require("@igds/icons"),T=require("./rich-text-editor-context.cjs"),O=require("./igds-rich-text-editor.scss.cjs");require("../icon/icon.cjs");require("../tooltip/tooltip.cjs");require("../error-box/default-error-box.cjs");require("./editor-toolbar.cjs");require("./toolbar-item.cjs");var $=Object.defineProperty,v=Object.getOwnPropertyDescriptor,e=(p,t,i,s)=>{for(var l=s>1?void 0:s?v(t,i):t,h=p.length-1,m;h>=0;h--)(m=p[h])&&(l=(s?m(t,i,l):m(l))||l);return s&&l&&$(t,i,l),l};exports.RichTextEditor=class extends D.AngularFormElement{constructor(){super(),this.quillEditor=null,this.uniqueId=I.generateId(),this.labelId=`label-${this.uniqueId}`,this.quillId=`quill-${this.uniqueId}`,this.inputHelpMessageId=`input-help-message-${this.uniqueId}`,this.errorId=`error-${this.uniqueId}`,this.disabled=!1,this.required=!1,this.readonly=!1,this.invalid=!1,this.autoFocus=!1,this.onChange=null,this.isFocused=!1,this.context=new T.IgdsRichTextEditorContext,this._internals=this.attachInternals(),this.onInput=this.onInput.bind(this),this.onFocus=this.onFocus.bind(this),this.onBlur=this.onBlur.bind(this),this.handleToolbarClick=this.handleToolbarClick.bind(this)}get validity(){return this._internals.validity}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}transformText(t){const i=this.quill.getSelection()??{index:0,length:0};if(i){const l=this.quill.getFormat(i.index,i.length)[t]===!0;this.quill.format(t,!l)}}makeList(t){const i=this.quill.getSelection()??{index:0,length:0};if(!i)return;const s=this.quill.getFormat(i.index,i.length);if(s.list==="bullet"&&t!=="bullet"){this.quill.format("list","ordered");return}if(s.list==="ordered"&&t!=="ordered"){this.quill.format("list","bullet");return}this.quill.format("list",s.list===void 0?t:void 0)}makeIndent(t){const i=this.quill.getSelection()??{index:0,length:0};if(i){const s=this.quill.getFormat(i.index,i.length),l=typeof s.indent=="number"?s.indent:0,h=t==="increase"?l+1:Math.max(l-1,0);this.quill.format("indent",h||(h===0?!1:void 0))}}changeTextDirection(t){if(this.quillEditor&&this.quillEditor.focus(),this.customEditorTextDirection===t){this.customEditorTextDirection=void 0;return}this.customEditorTextDirection=t}onInput(){const t=this.quill.getSemanticHTML();this.value=t,this.input.value=t,this.defaultValue="",this._internals.setFormValue(t??null),this.emit(u.IGDS_EVENTS.input,t),this.applyInternalInputValidityOnComponent()}applyInternalInputValidityOnComponent(){this.input&&this._internals.setValidity(this.input.validity,this.error||`${this.name} value is invalid`,this.input)}isEmptyValue(){return this.quill?/<(ul|ol)[\s>]/.test(this.quill.getSemanticHTML())?!1:this.quill.getText().trim()==="":!0}onFocus(){const t=this.quill.getSemanticHTML();this.value=t,this.isFocused=!0,this.emit(u.IGDS_EVENTS.focus,t)}onBlur(){const t=this.quill.getSemanticHTML();this.value=t,this.isFocused=!1,this.emit(u.IGDS_EVENTS.change,t),this.emit(u.IGDS_EVENTS.blur,t),this.emulateChangeEvent()}emulateChangeEvent(){const t=new Event("change");this.input.dispatchEvent(t)}onChangeHandler(t){this.onChange?.(t)}handleToolbarClick(t){const i=t.detail.value.command;({[r.IGDS_TOOLBAR_COMMAND.bold]:()=>this.transformText("bold"),[r.IGDS_TOOLBAR_COMMAND.italic]:()=>this.transformText("italic"),[r.IGDS_TOOLBAR_COMMAND.underline]:()=>this.transformText("underline"),[r.IGDS_TOOLBAR_COMMAND.strike]:()=>this.transformText("strike"),[r.IGDS_TOOLBAR_COMMAND.unorderedList]:()=>this.makeList("bullet"),[r.IGDS_TOOLBAR_COMMAND.orderedList]:()=>this.makeList("ordered"),[r.IGDS_TOOLBAR_COMMAND.indentIncrease]:()=>this.makeIndent("increase"),[r.IGDS_TOOLBAR_COMMAND.indentDecrease]:()=>this.makeIndent("decrease"),[r.IGDS_TOOLBAR_COMMAND.rtl]:()=>this.changeTextDirection("rtl"),[r.IGDS_TOOLBAR_COMMAND.ltr]:()=>this.changeTextDirection("ltr")})[i]()}initToolbarSlot(){setTimeout(()=>{const t=this.querySelectorAll("[slot='toolbar']");t.length>0&&(this.toolbarContainer.replaceChildren(),t.forEach(i=>{this.toolbarContainer.appendChild(i)}))})}createRenderRoot(){return this}connectedCallback(){if(super.connectedCallback(),!document.querySelector('style[data-igds="rich-text-editor-global"]')){const i=document.createElement("style");i.setAttribute("data-igds","rich-text-editor-global"),i.innerHTML=O,document.head.append(i)}}firstUpdated(t){super.firstUpdated(t),this.quill=new q(this.quillElement,{modules:{keyboard:{bindings:{tab:!1}}}}),this.quill.on("text-change",this.onInput),this.defaultValue&&this.quill.clipboard.dangerouslyPasteHTML(0,this.defaultValue),this.quillEditor=this.quillElement.querySelector("[contenteditable]"),this.quillEditor&&(this.quillEditor.addEventListener("focus",this.onFocus),this.quillEditor.addEventListener("blur",this.onBlur)),this.toolbarContainer.addEventListener(u.IGDS_EVENTS.click,this.handleToolbarClick),this.initToolbarSlot()}updated(t){if(super.updated(t),t.has("disabled")&&this.disabled){this.quill.disable(),this.context={...this.context,toolbarDisabled:!0};return}t.has("disabled")&&t.get("disabled")===!0&&!this.disabled&&(this.quill.enable(),this.context={...this.context,toolbarDisabled:!1})}disconnectedCallback(){super.disconnectedCallback(),this.quill.off("text-change",this.onInput),this.quillEditor&&(this.quillEditor.removeEventListener("focus",this.onFocus),this.quillEditor.removeEventListener("blur",this.onBlur)),this.toolbarContainer.removeEventListener(u.IGDS_EVENTS.click,this.handleToolbarClick)}get editorMaxHeight(){return this.maxHeight?/^\d+$/.test(this.maxHeight)?`${this.maxHeight}px`:this.maxHeight:void 0}renderHeader(){return n.html`
      <header class="igds-rich-text-editor__label-box">
        ${a.when(this.label,()=>n.html` <label
            for=${this.quillId}
            id=${this.labelId}
            class=${b.classMap({"igds-rich-text-editor__label":!0,"igds-rich-text-editor__label--required":this.required})}
          >
            ${this.label}
          </label>`)}
        ${a.when(this.tooltipIcon,()=>n.html`
            <igds-tooltip
              content=${this.tooltipIcon??""}
              placement="inset-inline-end"
              class="igds-rich-text-editor__tooltip"
            >
              <igds-icon
                node=${d.helpOutlined}
                class="igds-rich-text-editor__tooltip-icon"
                tabindex="0"
              >
              </igds-icon>
            </igds-tooltip>
          `)}
        ${a.when(this.tooltipQuestion&&this.tooltipAnswer,()=>n.html`
            <igds-tooltip
              content=${this.tooltipAnswer??""}
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
    `}renderToolbar(){return n.html`
      <div class="igds-rich-text-editor__toolbars">
        <slot name="toolbar">
          <igds-editor-toolbar>
            <igds-toolbar-item
              icon=${d.rtl}
              command=${r.IGDS_TOOLBAR_COMMAND.rtl}
              label="מעבר ל-RTL"
            ></igds-toolbar-item>
            <igds-toolbar-item
              icon=${d.ltr}
              command=${r.IGDS_TOOLBAR_COMMAND.ltr}
              label="מעבר ל-LTR"
            ></igds-toolbar-item>
          </igds-editor-toolbar>
          <igds-editor-toolbar>
            <igds-toolbar-item
              icon=${d.indentDecrease}
              command=${r.IGDS_TOOLBAR_COMMAND.indentDecrease}
              label="הקטנת כניסה"
            ></igds-toolbar-item>
            <igds-toolbar-item
              icon=${d.indentIncrease}
              command=${r.IGDS_TOOLBAR_COMMAND.indentIncrease}
              label="הגדלת כניסה"
            ></igds-toolbar-item>
            <igds-toolbar-item
              icon=${d.orderedList}
              command=${r.IGDS_TOOLBAR_COMMAND.orderedList}
              label="רשימה מסודרת"
            ></igds-toolbar-item>
            <igds-toolbar-item
              icon=${d.unorderedList}
              command=${r.IGDS_TOOLBAR_COMMAND.unorderedList}
              label="רשימה לא מסודרת"
            ></igds-toolbar-item>
          </igds-editor-toolbar>
          <igds-editor-toolbar>
            <igds-toolbar-item
              icon=${d.stroke}
              command=${r.IGDS_TOOLBAR_COMMAND.strike}
              label="טקסט מחיקה"
            ></igds-toolbar-item>
            <igds-toolbar-item
              icon=${d.underline}
              command=${r.IGDS_TOOLBAR_COMMAND.underline}
              label="טֶקְסְט מְקֻוָּק בְּקַו תַּחְתִּי"
            ></igds-toolbar-item>
            <igds-toolbar-item
              icon=${d.italic}
              command=${r.IGDS_TOOLBAR_COMMAND.italic}
              label="טֶקְסְט נָטוּי"
            ></igds-toolbar-item>
            <igds-toolbar-item
              icon=${d.bold}
              command=${r.IGDS_TOOLBAR_COMMAND.bold}
              label="טֶקְסְט בְּכָתָב מֻדְגָּשׁ"
            ></igds-toolbar-item>
          </igds-editor-toolbar>
        </slot>
      </div>
    `}renderEditor(){return n.html`
      <div class="igds-rich-text-editor__box">
        <textarea
          name=${c.ifDefined(this.name)}
          form=${c.ifDefined(this.form)}
          placeholder=${c.ifDefined(this.placeholder)}
          class="igds-rich-text-editor__textarea"
          tabindex="-1"
          @change=${this.onChangeHandler}
        ></textarea>
        <div
          id=${this.quillId}
          role="textbox"
          aria-describedby=${c.ifDefined(this.helpText?this.inputHelpMessageId:void 0)}
          aria-invalid=${this.invalid}
          aria-errormessage=${this.errorId}
          aria-labelledby=${this.labelId}
          class="igds-rich-text-editor__element"
          dir=${c.ifDefined(this.customEditorTextDirection?this.customEditorTextDirection:void 0)}
          data-quill
          style=${_.styleMap({"max-height":this.editorMaxHeight})}
        ></div>
        ${a.when(this.placeholder&&!this.isFocused&&this.isEmptyValue(),()=>n.html`
            <span aria-hidden="true" class="igds-rich-text-editor__placeholder"
              >${this.placeholder}</span
            >
          `)}
      </div>
    `}renderHelpText(){return a.when(this.helpText||this.error,()=>n.html`
        <footer class="igds-rich-text-editor__footer">
          <div
            class="igds-rich-text-editor__help-box"
            id=${this.inputHelpMessageId}
          >
            ${a.when(this.helpIcon,()=>n.html`<igds-icon
                  node=${this.helpIcon}
                  class="igds-rich-text-editor__icon"
                ></igds-icon>`)}
            <span class="igds-rich-text-editor__message">${this.helpText}</span>
          </div>
        </footer>
      `)}renderError(){return a.when(this.invalid&&this.error,()=>n.html`
        <igds-default-error-box
          id=${this.errorId}
          class="rich-text-editor__error-box"
          errormessage=${c.ifDefined(this.error)}
        >
        </igds-default-error-box>
      `)}render(){return n.html`
      <div
        class=${b.classMap({"igds-rich-text-editor":!0,"igds-rich-text-editor--disabled":this.disabled,"igds-rich-text-editor--invalid":this.invalid})}
      >
        ${this.renderHeader()}
        <section class="igds-rich-text-editor__body">
          ${this.renderToolbar()} ${this.renderEditor()}
        </section>
        ${this.renderHelpText()} ${this.renderError()}
      </div>
    `}};exports.RichTextEditor.formAssociated=!0;e([o.property({type:String})],exports.RichTextEditor.prototype,"label",2);e([o.property({type:String})],exports.RichTextEditor.prototype,"name",2);e([o.property({type:String})],exports.RichTextEditor.prototype,"form",2);e([o.property({type:String,attribute:"default-value"})],exports.RichTextEditor.prototype,"defaultValue",2);e([o.property({type:String})],exports.RichTextEditor.prototype,"placeholder",2);e([o.property({type:Boolean})],exports.RichTextEditor.prototype,"disabled",2);e([o.property({type:Boolean})],exports.RichTextEditor.prototype,"required",2);e([o.property({type:Boolean})],exports.RichTextEditor.prototype,"readonly",2);e([o.property({type:String,attribute:"help-text"})],exports.RichTextEditor.prototype,"helpText",2);e([o.property({type:String,attribute:"help-icon"})],exports.RichTextEditor.prototype,"helpIcon",2);e([o.property({type:String,attribute:"tooltip-icon"})],exports.RichTextEditor.prototype,"tooltipIcon",2);e([o.property({type:String,attribute:"tooltip-question"})],exports.RichTextEditor.prototype,"tooltipQuestion",2);e([o.property({type:String,attribute:"tooltip-answer"})],exports.RichTextEditor.prototype,"tooltipAnswer",2);e([o.property({type:Boolean})],exports.RichTextEditor.prototype,"invalid",2);e([o.property({type:String})],exports.RichTextEditor.prototype,"error",2);e([o.property({type:Boolean,attribute:"auto-focus"})],exports.RichTextEditor.prototype,"autoFocus",2);e([o.property({attribute:!1})],exports.RichTextEditor.prototype,"onChange",2);e([o.property({type:String,attribute:"max-height"})],exports.RichTextEditor.prototype,"maxHeight",2);e([x.state()],exports.RichTextEditor.prototype,"isFocused",2);e([x.state()],exports.RichTextEditor.prototype,"customEditorTextDirection",2);e([g.query("[data-quill]")],exports.RichTextEditor.prototype,"quillElement",2);e([g.query(".igds-rich-text-editor__toolbars")],exports.RichTextEditor.prototype,"toolbarContainer",2);e([g.query(".igds-rich-text-editor__textarea")],exports.RichTextEditor.prototype,"input",2);e([f.provide({context:T.igdsRichTextEditorContext})],exports.RichTextEditor.prototype,"context",2);exports.RichTextEditor=e([y.customElement(E.IGDS_TAGS.richTextEditor)],exports.RichTextEditor);

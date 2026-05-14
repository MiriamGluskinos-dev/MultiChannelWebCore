var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { AngularFormElement } from '../abstractions';
import { IGDS_TAGS, IGDS_EVENTS } from '../constants';
import { IGDS_FILE_UPLOADER_STATUS, IGDS_FILE_UPLOADER_ICONS, } from './constants';
import styles from './file-uploader.scss?inline';
import { IGDS_BUTTON_VARIANTS, IGDS_BUTTON_SIZES } from '../button';
import { trash } from '@igds/icons';
let FileUploader = class FileUploader extends AngularFormElement {
    get files() {
        return this._files;
    }
    set files(newFiles) {
        this._files = newFiles;
        this.updateFormValue();
        this.emit(IGDS_EVENTS.change, 'files changed', { fileDetails: this._files });
    }
    constructor() {
        super();
        this.heading = '';
        this.helpText = '';
        this.description = '';
        this.acceptedFormats = '*';
        this.maxFileSize = 5;
        this.multiple = false;
        this.status = IGDS_FILE_UPLOADER_STATUS.default;
        this._files = [];
        this.isDragOver = false;
        this.fileIdCounter = 0;
        this.setAsAngularLibFormElement();
        this._internals = this.attachInternals();
    }
    renderStatusIcon(status) {
        const iconName = IGDS_FILE_UPLOADER_ICONS[status] ?? IGDS_FILE_UPLOADER_ICONS.default;
        return html `
      <igds-icon
        node=${iconName}
        class="file-uploader__container-icon"
      ></igds-icon>
    `;
    }
    triggerFileInput() {
        this.fileInput.click();
    }
    handleKeyDown(event) {
        if (event.key === " " /* IGDS_EVENT_KEYS.Space */ ||
            event.key === "Enter" /* IGDS_EVENT_KEYS.Enter */) {
            this.triggerFileInput();
        }
    }
    onDragOver(e) {
        e.preventDefault();
        this.isDragOver = true;
    }
    onDragLeave(e) {
        e.preventDefault();
        this.isDragOver = false;
    }
    onDrop(e) {
        e.preventDefault();
        this.isDragOver = false;
        if (e.dataTransfer?.files) {
            this.processFiles(e.dataTransfer.files);
        }
    }
    handleFileAdded(e) {
        const input = e.target;
        if (input.files) {
            this.processFiles(input.files);
            input.value = '';
        }
    }
    handleRemoveFile(event) {
        event.stopPropagation();
        this.removeFile();
    }
    updateFormValue() {
        if (!this.name)
            return;
        const formData = new FormData();
        this.files.forEach((file) => {
            if (file.file) {
                formData.append(this.name, file.file);
            }
        });
        this._internals.setFormValue(formData);
    }
    processFiles(fileList) {
        const BYTES_IN_MB = 1024 * 1024;
        Array.from(fileList).forEach((file) => {
            // Check file size
            if (this.maxFileSize && file.size > this.maxFileSize * BYTES_IN_MB) {
                const failedFile = {
                    id: this.fileIdCounter++,
                    name: file.name,
                    status: 'max file size exceeded',
                    error: 'גודל הקובץ חורג מהמגבלה',
                    file,
                };
                this.files = [failedFile, ...this.files];
                this.emit(IGDS_EVENTS.fileAdded, 'file added', {
                    fileDetails: failedFile,
                });
                return;
            }
            // Check valid formats
            if (this.acceptedFormats !== '*') {
                const accepted = this.acceptedFormats
                    .split(',')
                    .map((format) => format.trim());
                if (!accepted.includes(file.type)) {
                    const failedFile = {
                        id: this.fileIdCounter++,
                        name: file.name,
                        status: 'wrong file format',
                        error: 'סוג הקובץ אינו נתמך',
                        file,
                    };
                    this.files = [failedFile, ...this.files];
                    this.emit(IGDS_EVENTS.fileAdded, 'file added', {
                        fileDetails: failedFile,
                    });
                    return;
                }
            }
            const newFile = {
                id: this.fileIdCounter++,
                name: file.name,
                status: 'ready to upload',
                file: file,
            };
            this.files = [newFile, ...this.files];
            this.emit(IGDS_EVENTS.fileAdded, 'file added', { fileDetails: newFile });
        });
    }
    removeFile(file) {
        if (file) {
            this.files = this.files.filter((f) => f.id !== file.id);
            this.emit(IGDS_EVENTS.fileRemoved, 'file removed', { fileDetails: file });
        }
        else {
            const addedFile = this.files[0];
            this.emit(IGDS_EVENTS.fileRemoved, 'file removed', {
                fileDetails: addedFile,
            });
            this.files = [];
        }
    }
    getFirstErrorMessage() {
        return this.files.find((f) => !!f.error)?.error;
    }
    get isFileUploadedInSingleUploader() {
        return !this.multiple && this.files.length > 0;
    }
    getContainerCssClass() {
        return classMap({
            'file-uploader__container': true,
            'file-uploader__container--fail': this.status === IGDS_FILE_UPLOADER_STATUS.fail,
            'file-uploader__container--pending': this.status === IGDS_FILE_UPLOADER_STATUS.pending,
            'file-uploader__container--success': this.status === IGDS_FILE_UPLOADER_STATUS.success,
            'file-uploader__container--drag-over': this.isDragOver,
            'file-uploader__container--error-process-file': !!this.getFirstErrorMessage(),
            'file-uploader__container--disabled': this.status === IGDS_FILE_UPLOADER_STATUS.pending,
        });
    }
    renderHeader() {
        return html `
      <section class="file-uploader__header">
        ${when(this.heading, () => html `<h3 class="file-uploader__header-title">${this.heading}</h3>`)}
        ${when(this.helpText, () => html `<p
              id="file-uploader-help"
              class="file-uploader__header-help-text"
            >
              ${this.helpText}
            </p>`)}
      </section>
    `;
    }
    getUploaderStatus() {
        const statusMap = {
            [IGDS_FILE_UPLOADER_STATUS.default]: '',
            [IGDS_FILE_UPLOADER_STATUS.pending]: 'העלאה מתבצעת...',
            [IGDS_FILE_UPLOADER_STATUS.success]: 'העלאה הושלמה בהצלחה!',
            [IGDS_FILE_UPLOADER_STATUS.fail]: 'העלאה נכשלה, נסה שוב.',
        };
        return statusMap[this.status] || '';
    }
    renderUploaderStatus() {
        return html `
      <span
        class="file-uploader__live-status"
        aria-live="polite"
        aria-atomic="true"
      >
        ${this.getUploaderStatus()}
      </span>
    `;
    }
    renderError() {
        const firstErrorMessage = this.getFirstErrorMessage();
        return when(Boolean(firstErrorMessage), () => html `
        <span class="file-uploader__error-msg">${firstErrorMessage}</span>
      `);
    }
    renderUploadedFileList() {
        return when(this.multiple, () => html `
        <ul class="file-uploader__file-list">
          ${this.files.map((file) => html `<li
              class=${classMap({
            'file-uploader__file-item': true,
            'file-uploader__file-item--fail': file.status !== 'ready to upload' ||
                this.status === IGDS_FILE_UPLOADER_STATUS.fail,
            'file-uploader__file-item--disabled': this.status === IGDS_FILE_UPLOADER_STATUS.pending,
        })}
              tabindex="0"
              aria-disabled=${this.status === IGDS_FILE_UPLOADER_STATUS.pending
            ? 'true'
            : 'false'}
            >
              <span class="file-uploader__file-name">${file.name}</span>
              <igds-button
                variant=${IGDS_BUTTON_VARIANTS.alternative}
                size=${IGDS_BUTTON_SIZES.small}
                class="file-uploader__delete-btn"
                aria-label="Delete file"
                @igds-click="${() => this.removeFile(file)}"
              >
                <igds-icon slot="icon" node=${trash}></igds-icon>
              </igds-button>
            </li>`)}
        </ul>
      `);
    }
    render() {
        return html `
      <div class="file-uploader">
        ${this.renderHeader()}
        <div
          class=${this.getContainerCssClass()}
          tabindex="0"
          role="button"
          aria-describedby="file-uploader-help"
          aria-disabled=${this.status === IGDS_FILE_UPLOADER_STATUS.pending
            ? 'true'
            : 'false'}
          @click="${this.triggerFileInput}"
          @keydown="${this.handleKeyDown}"
          @dragover="${this.onDragOver}"
          @dragleave="${this.onDragLeave}"
          @drop="${this.onDrop}"
        >
          ${this.renderStatusIcon(this.status)}
          <section class="file-uploader__container-info">
            <h4
              class=${classMap({
            'file-uploader__container-info-title': true,
            'file-uploader__file-name': this.isFileUploadedInSingleUploader,
        })}
            >
              ${when(this.isFileUploadedInSingleUploader, () => this.files[0].name, () => 'העלאת קבצים')}
            </h4>

            ${when(this.description, () => html `
                <p class="file-uploader__container-info-description">
                  ${this.description}
                </p>
              `)}
            <input
              name=${ifDefined(this.name)}
              id="file-input"
              type="file"
              accept="${this.acceptedFormats}"
              ?multiple="${this.multiple}"
              hidden
              @change="${this.handleFileAdded}"
            />
          </section>
          ${when(this.isFileUploadedInSingleUploader, () => html `
              <igds-button
                variant=${IGDS_BUTTON_VARIANTS.alternative}
                size=${IGDS_BUTTON_SIZES.small}
                class=${classMap({
            'file-uploader__delete-btn': true,
            'file-uploader__file-item--disabled': this.status === IGDS_FILE_UPLOADER_STATUS.pending,
        })}
                aria-label="Delete file"
                @click="${this.handleRemoveFile}"
              >
                <igds-icon slot="icon" node=${trash}></igds-icon>
              </igds-button>
            `)}
        </div>

        ${this.renderUploaderStatus()} ${this.renderError()}
        ${this.renderUploadedFileList()}
      </div>
    `;
    }
};
FileUploader.formAssociated = true;
FileUploader.styles = unsafeCSS(styles);
__decorate([
    property({ type: String })
], FileUploader.prototype, "heading", void 0);
__decorate([
    property({ type: String, attribute: 'help-text' })
], FileUploader.prototype, "helpText", void 0);
__decorate([
    property({ type: String })
], FileUploader.prototype, "description", void 0);
__decorate([
    property({ type: String, attribute: 'accepted-formats' })
], FileUploader.prototype, "acceptedFormats", void 0);
__decorate([
    property({ type: Number, attribute: 'max-file-size' })
], FileUploader.prototype, "maxFileSize", void 0);
__decorate([
    property({ type: Boolean })
], FileUploader.prototype, "multiple", void 0);
__decorate([
    property({ type: String })
], FileUploader.prototype, "name", void 0);
__decorate([
    property({ type: String })
], FileUploader.prototype, "status", void 0);
__decorate([
    state()
], FileUploader.prototype, "_files", void 0);
__decorate([
    state()
], FileUploader.prototype, "isDragOver", void 0);
__decorate([
    query('#file-input')
], FileUploader.prototype, "fileInput", void 0);
FileUploader = __decorate([
    customElement(IGDS_TAGS.fileUploader)
], FileUploader);
export { FileUploader };

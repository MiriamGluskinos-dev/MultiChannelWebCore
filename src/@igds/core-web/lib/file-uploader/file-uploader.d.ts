import { AngularFormElement } from '../abstractions';
import { IGDS_FILE_UPLOADER_STATUS, AddedFile } from './constants';
export declare class FileUploader extends AngularFormElement {
    static formAssociated: boolean;
    static styles: import("lit").CSSResult;
    private _internals;
    heading: string;
    helpText: string;
    description: string;
    acceptedFormats: string;
    maxFileSize: number;
    multiple: boolean;
    name?: string;
    status: `${IGDS_FILE_UPLOADER_STATUS}`;
    private _files;
    private isDragOver;
    private fileIdCounter;
    private fileInput;
    get files(): AddedFile[];
    set files(newFiles: AddedFile[]);
    constructor();
    private renderStatusIcon;
    private triggerFileInput;
    private handleKeyDown;
    private onDragOver;
    private onDragLeave;
    private onDrop;
    private handleFileAdded;
    private handleRemoveFile;
    private updateFormValue;
    private processFiles;
    private removeFile;
    private getFirstErrorMessage;
    get isFileUploadedInSingleUploader(): boolean;
    getContainerCssClass(): import("lit/async-directive.js").DirectiveResult<typeof import("lit/directives/class-map.js").ClassMapDirective>;
    renderHeader(): import("lit").TemplateResult<1>;
    getUploaderStatus(): string;
    renderUploaderStatus(): import("lit").TemplateResult<1>;
    renderError(): import("lit").TemplateResult<1> | undefined;
    renderUploadedFileList(): import("lit").TemplateResult<1> | undefined;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'igds-file-uploader': FileUploader;
    }
}

"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.cjs");const l=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/lit-html.cjs");require("../node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.cjs");const g=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.cjs"),o=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.cjs"),m=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/state.cjs"),D=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query.cjs"),p=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/when.cjs"),h=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/class-map.cjs"),F=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/if-defined.cjs"),I=require("../abstractions/angular-form-element.cjs"),u=require("../constants/events.cjs"),_=require("../constants/event-keys.cjs"),E=require("../constants/tags.cjs"),i=require("./constants.cjs"),U=require("./file-uploader.scss.cjs");require("../button/button.cjs");const c=require("../button/constants.cjs"),S=require("@igds/icons"),T=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.cjs");var y=Object.defineProperty,A=Object.getOwnPropertyDescriptor,r=(f,e,t,s)=>{for(var a=s>1?void 0:s?A(e,t):e,d=f.length-1,n;d>=0;d--)(n=f[d])&&(a=(s?n(e,t,a):n(a))||a);return s&&a&&y(e,t,a),a};exports.FileUploader=class extends I.AngularFormElement{constructor(){super(),this.heading="",this.helpText="",this.description="",this.acceptedFormats="*",this.maxFileSize=5,this.multiple=!1,this.status=i.IGDS_FILE_UPLOADER_STATUS.default,this._files=[],this.isDragOver=!1,this.fileIdCounter=0,this.setAsAngularLibFormElement(),this._internals=this.attachInternals()}get files(){return this._files}set files(e){this._files=e,this.updateFormValue(),this.emit(u.IGDS_EVENTS.change,"files changed",{fileDetails:this._files})}renderStatusIcon(e){const t=i.IGDS_FILE_UPLOADER_ICONS[e]??i.IGDS_FILE_UPLOADER_ICONS.default;return l.html`
      <igds-icon
        node=${t}
        class="file-uploader__container-icon"
      ></igds-icon>
    `}triggerFileInput(){this.fileInput.click()}handleKeyDown(e){(e.key===_.IGDS_EVENT_KEYS.Space||e.key===_.IGDS_EVENT_KEYS.Enter)&&this.triggerFileInput()}onDragOver(e){e.preventDefault(),this.isDragOver=!0}onDragLeave(e){e.preventDefault(),this.isDragOver=!1}onDrop(e){e.preventDefault(),this.isDragOver=!1,e.dataTransfer?.files&&this.processFiles(e.dataTransfer.files)}handleFileAdded(e){const t=e.target;t.files&&(this.processFiles(t.files),t.value="")}handleRemoveFile(e){e.stopPropagation(),this.removeFile()}updateFormValue(){if(!this.name)return;const e=new FormData;this.files.forEach(t=>{t.file&&e.append(this.name,t.file)}),this._internals.setFormValue(e)}processFiles(e){Array.from(e).forEach(s=>{if(this.maxFileSize&&s.size>this.maxFileSize*1048576){const d={id:this.fileIdCounter++,name:s.name,status:"max file size exceeded",error:"גודל הקובץ חורג מהמגבלה",file:s};this.files=[d,...this.files],this.emit(u.IGDS_EVENTS.fileAdded,"file added",{fileDetails:d});return}if(this.acceptedFormats!=="*"&&!this.acceptedFormats.split(",").map(n=>n.trim()).includes(s.type)){const n={id:this.fileIdCounter++,name:s.name,status:"wrong file format",error:"סוג הקובץ אינו נתמך",file:s};this.files=[n,...this.files],this.emit(u.IGDS_EVENTS.fileAdded,"file added",{fileDetails:n});return}const a={id:this.fileIdCounter++,name:s.name,status:"ready to upload",file:s};this.files=[a,...this.files],this.emit(u.IGDS_EVENTS.fileAdded,"file added",{fileDetails:a})})}removeFile(e){if(e)this.files=this.files.filter(t=>t.id!==e.id),this.emit(u.IGDS_EVENTS.fileRemoved,"file removed",{fileDetails:e});else{const t=this.files[0];this.emit(u.IGDS_EVENTS.fileRemoved,"file removed",{fileDetails:t}),this.files=[]}}getFirstErrorMessage(){return this.files.find(e=>!!e.error)?.error}get isFileUploadedInSingleUploader(){return!this.multiple&&this.files.length>0}getContainerCssClass(){return h.classMap({"file-uploader__container":!0,"file-uploader__container--fail":this.status===i.IGDS_FILE_UPLOADER_STATUS.fail,"file-uploader__container--pending":this.status===i.IGDS_FILE_UPLOADER_STATUS.pending,"file-uploader__container--success":this.status===i.IGDS_FILE_UPLOADER_STATUS.success,"file-uploader__container--drag-over":this.isDragOver,"file-uploader__container--error-process-file":!!this.getFirstErrorMessage(),"file-uploader__container--disabled":this.status===i.IGDS_FILE_UPLOADER_STATUS.pending})}renderHeader(){return l.html`
      <section class="file-uploader__header">
        ${p.when(this.heading,()=>l.html`<h3 class="file-uploader__header-title">${this.heading}</h3>`)}
        ${p.when(this.helpText,()=>l.html`<p
              id="file-uploader-help"
              class="file-uploader__header-help-text"
            >
              ${this.helpText}
            </p>`)}
      </section>
    `}getUploaderStatus(){return{[i.IGDS_FILE_UPLOADER_STATUS.default]:"",[i.IGDS_FILE_UPLOADER_STATUS.pending]:"העלאה מתבצעת...",[i.IGDS_FILE_UPLOADER_STATUS.success]:"העלאה הושלמה בהצלחה!",[i.IGDS_FILE_UPLOADER_STATUS.fail]:"העלאה נכשלה, נסה שוב."}[this.status]||""}renderUploaderStatus(){return l.html`
      <span
        class="file-uploader__live-status"
        aria-live="polite"
        aria-atomic="true"
      >
        ${this.getUploaderStatus()}
      </span>
    `}renderError(){const e=this.getFirstErrorMessage();return p.when(!!e,()=>l.html`
        <span class="file-uploader__error-msg">${e}</span>
      `)}renderUploadedFileList(){return p.when(this.multiple,()=>l.html`
        <ul class="file-uploader__file-list">
          ${this.files.map(e=>l.html`<li
              class=${h.classMap({"file-uploader__file-item":!0,"file-uploader__file-item--fail":e.status!=="ready to upload"||this.status===i.IGDS_FILE_UPLOADER_STATUS.fail,"file-uploader__file-item--disabled":this.status===i.IGDS_FILE_UPLOADER_STATUS.pending})}
              tabindex="0"
              aria-disabled=${this.status===i.IGDS_FILE_UPLOADER_STATUS.pending?"true":"false"}
            >
              <span class="file-uploader__file-name">${e.name}</span>
              <igds-button
                variant=${c.IGDS_BUTTON_VARIANTS.alternative}
                size=${c.IGDS_BUTTON_SIZES.small}
                class="file-uploader__delete-btn"
                aria-label="Delete file"
                @igds-click="${()=>this.removeFile(e)}"
              >
                <igds-icon slot="icon" node=${S.trash}></igds-icon>
              </igds-button>
            </li>`)}
        </ul>
      `)}render(){return l.html`
      <div class="file-uploader">
        ${this.renderHeader()}
        <div
          class=${this.getContainerCssClass()}
          tabindex="0"
          role="button"
          aria-describedby="file-uploader-help"
          aria-disabled=${this.status===i.IGDS_FILE_UPLOADER_STATUS.pending?"true":"false"}
          @click="${this.triggerFileInput}"
          @keydown="${this.handleKeyDown}"
          @dragover="${this.onDragOver}"
          @dragleave="${this.onDragLeave}"
          @drop="${this.onDrop}"
        >
          ${this.renderStatusIcon(this.status)}
          <section class="file-uploader__container-info">
            <h4
              class=${h.classMap({"file-uploader__container-info-title":!0,"file-uploader__file-name":this.isFileUploadedInSingleUploader})}
            >
              ${p.when(this.isFileUploadedInSingleUploader,()=>this.files[0].name,()=>"העלאת קבצים")}
            </h4>

            ${p.when(this.description,()=>l.html`
                <p class="file-uploader__container-info-description">
                  ${this.description}
                </p>
              `)}
            <input
              name=${F.ifDefined(this.name)}
              id="file-input"
              type="file"
              accept="${this.acceptedFormats}"
              ?multiple="${this.multiple}"
              hidden
              @change="${this.handleFileAdded}"
            />
          </section>
          ${p.when(this.isFileUploadedInSingleUploader,()=>l.html`
              <igds-button
                variant=${c.IGDS_BUTTON_VARIANTS.alternative}
                size=${c.IGDS_BUTTON_SIZES.small}
                class=${h.classMap({"file-uploader__delete-btn":!0,"file-uploader__file-item--disabled":this.status===i.IGDS_FILE_UPLOADER_STATUS.pending})}
                aria-label="Delete file"
                @click="${this.handleRemoveFile}"
              >
                <igds-icon slot="icon" node=${S.trash}></igds-icon>
              </igds-button>
            `)}
        </div>

        ${this.renderUploaderStatus()} ${this.renderError()}
        ${this.renderUploadedFileList()}
      </div>
    `}};exports.FileUploader.formAssociated=!0;exports.FileUploader.styles=T.unsafeCSS(U);r([o.property({type:String})],exports.FileUploader.prototype,"heading",2);r([o.property({type:String,attribute:"help-text"})],exports.FileUploader.prototype,"helpText",2);r([o.property({type:String})],exports.FileUploader.prototype,"description",2);r([o.property({type:String,attribute:"accepted-formats"})],exports.FileUploader.prototype,"acceptedFormats",2);r([o.property({type:Number,attribute:"max-file-size"})],exports.FileUploader.prototype,"maxFileSize",2);r([o.property({type:Boolean})],exports.FileUploader.prototype,"multiple",2);r([o.property({type:String})],exports.FileUploader.prototype,"name",2);r([o.property({type:String})],exports.FileUploader.prototype,"status",2);r([m.state()],exports.FileUploader.prototype,"_files",2);r([m.state()],exports.FileUploader.prototype,"isDragOver",2);r([D.query("#file-input")],exports.FileUploader.prototype,"fileInput",2);exports.FileUploader=r([g.customElement(E.IGDS_TAGS.fileUploader)],exports.FileUploader);

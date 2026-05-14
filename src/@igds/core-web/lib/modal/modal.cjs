"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.cjs");const s=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/lit-html.cjs");require("../node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.cjs");const _=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.cjs"),o=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.cjs"),f=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/state.cjs"),g=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query.cjs"),m=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/if-defined.cjs"),y=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/class-map.cjs"),E=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/style-map.cjs"),r=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/when.cjs"),S=require("../abstractions/igds-element.cjs");require("../abstractions/angular-form-element.cjs");const n=require("../constants/events.cjs"),k=require("../constants/tags.cjs"),a=require("./constants.cjs"),v=require("../node_modules/.pnpm/focus-trap@7.6.2/node_modules/focus-trap/dist/focus-trap.esm.cjs"),C=require("../utils/common.cjs"),u=require("../utils/scroll.cjs"),q=require("../utils/isClickInsideDialog.cjs"),M=require("./modal.scss.cjs"),L=require("./tokens.scss.cjs");require("../icon/icon.cjs");require("../button/button.cjs");const D=require("@igds/icons"),b=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.cjs");var B=Object.defineProperty,$=Object.getOwnPropertyDescriptor,e=(d,t,c,l)=>{for(var i=l>1?void 0:l?$(t,c):t,h=d.length-1,p;h>=0;h--)(p=d[h])&&(i=(l?p(t,c,i):p(i))||i);return l&&i&&B(t,c,i),i};exports.Modal=class extends S.IGDSElement{constructor(){super(),this._disabledFocusLock=!1,this.type=a.IGDS_MODAL_TYPE.default,this.top=0,this.start=0,this.isHeightOverflowed=!1,this.resizeHandler=C.throttle(()=>{this.checkHeightOverflow()},a.DELAY_BEFORE_RECALCULATE_MODAL_HEIGHT),this.closeByBackdropClick=this.closeByBackdropClick.bind(this),this.resizeHandler=this.resizeHandler.bind(this),this.requestClose=this.requestClose.bind(this)}set disabledFocusLock(t){t&&this.deactivateFocusLock(),this._disabledFocusLock=t}get disabledFocusLock(){return this._disabledFocusLock}requestClose(){this.open=!1}closeByBackdropClick(t){this.dialogElement&&(q.isClickInsideDialog(t,this.dialogElement.getBoundingClientRect())||this.requestClose())}handleOpenModal(){this.dialogElement&&(this.dialogElement.showModal(),this.dialogElement.addEventListener("click",this.closeByBackdropClick),this.closeButton?.focus(),this.trap&&!this.disabledFocusLock&&this.trap.activate(),this.checkHeightOverflow(),u.lockBodyScrolling(this),this.emit(n.IGDS_EVENTS.open,"opened"))}handleCloseModal(){this.dialogElement&&(this.dialogElement.close(),u.unlockBodyScrolling(this),this.deactivateFocusLock(),this.emit(n.IGDS_EVENTS.close,"closed"))}handlePrimaryButtonClick(){this.emit(n.IGDS_EVENTS.primaryClick,"primaryClicked"),this.requestClose()}handleSecondaryButtonClick(){this.emit(n.IGDS_EVENTS.secondaryClick,"secondaryClicked"),this.requestClose()}handleSlotChange(){this.trap&&this.dialogElement&&this.trap.updateContainerElements(this.dialogElement)}checkHeightOverflow(){this.open&&this.bodyElement&&(this.isHeightOverflowed=this.bodyElement.clientHeight!==this.bodyElement.scrollHeight)}handleCancelingDialogWhenFocusLockDisabled(t){!this.disabledFocusLock||!t||(this.open?this.dialogElement?.addEventListener("cancel",this.requestClose,{once:!0}):this.dialogElement?.removeEventListener("cancel",this.requestClose))}deactivateFocusLock(){this.trap&&this.trap.active&&this.trap.deactivate()}firstUpdated(t){super.firstUpdated(t),this.dialogElement&&(this.trap=v.createFocusTrap(this.dialogElement,{tabbableOptions:{getShadowRoot:!0},escapeDeactivates:()=>(this.requestClose(),!0),clickOutsideDeactivates:!0})),window.addEventListener("resize",this.resizeHandler)}updated(t){super.updated(t),t.has("open")&&(this.open?this.handleOpenModal():this.handleCloseModal()),this.handleCancelingDialogWhenFocusLockDisabled(t.has("open"))}disconnectedCallback(){super.disconnectedCallback(),this.dialogElement&&this.dialogElement.removeEventListener("click",this.closeByBackdropClick),window.removeEventListener("resize",this.resizeHandler),this.dialogElement?.removeEventListener("cancel",this.requestClose),u.unlockBodyScrolling(this),this.deactivateFocusLock()}render(){return s.html`
      <dialog
        class=${y.classMap({modal:!0,"modal--has-image":!!this.imageSrc,"modal--animated":!!this.animated,"modal--overflowed":this.isHeightOverflowed,"modal--type-simple":this.type===a.IGDS_MODAL_TYPE.simple,"modal--type-coach-mark":this.type===a.IGDS_MODAL_TYPE.coachMark})}
        aria-modal=${m.ifDefined(this.open?!0:void 0)}
        style=${this.type===a.IGDS_MODAL_TYPE.coachMark?E.styleMap({marginTop:`${this.top}px`,marginInlineStart:`${this.start}px`}):s.nothing}
        aria-labelledby="header"
      >
        <header class="modal__header-box">
          <button
            class="modal__button-close"
            type="button"
            @click=${this.requestClose}
            aria-label="Close modal"
          >
            <igds-icon node=${D.close} class="modal__icon-close"></igds-icon>
          </button>
          ${r.when(this.imageSrc,()=>s.html`
                <img
                  class=${y.classMap({modal__image:!0,"modal__image--auto-size":!!this.imageAutoSize&&!this.mobileImageSrc,"modal__image--desktop":!!this.mobileImageSrc})}
                  src=${this.imageSrc}
                  alt=${this.imageAlt??""}
                  role=${m.ifDefined(this.imageAlt?void 0:"presentation")}
                />
              `)}
          ${r.when(this.mobileImageSrc,()=>s.html`
                <img
                  class="modal__image modal__image--mobile"
                  src=${this.mobileImageSrc}
                  alt=${this.mobileImageAlt??""}
                  role=${m.ifDefined(this.mobileImageAlt?void 0:"presentation")}
                />
              `)}
          <h2 class="modal__header" id="header">${this.label}</h2>
        </header>
        <div class="modal__separator"></div>
        <article class="modal__body" part="scrollable">
          <slot @slotchange=${this.handleSlotChange}></slot>
        </article>
        <div class="modal__separator modal__separator--bottom"></div>
        <slot name="footer" @slotchange=${this.handleSlotChange}>
          <footer class="modal__footer">
            ${r.when(this.primaryActionLabel,()=>s.html`
                  <igds-button
                    variant="primary"
                    @igds-click=${this.handlePrimaryButtonClick}
                    class="modal__button modal__button--primary"
                  >
                    ${this.primaryActionLabel}
                  </igds-button>
                `)}
            ${r.when(this.secondaryActionLabel,()=>s.html`
                  <igds-button
                    variant="secondary"
                    @igds-click=${this.handleSecondaryButtonClick}
                    class="modal__button modal__button--secondary"
                  >
                    ${this.secondaryActionLabel}
                  </igds-button>
                `)}
          </footer>
        </slot>
      </dialog>
    `}};exports.Modal.styles=[b.unsafeCSS(L),b.unsafeCSS(M)];e([o.property({type:Boolean,reflect:!0})],exports.Modal.prototype,"open",2);e([o.property({type:String})],exports.Modal.prototype,"label",2);e([o.property({type:String})],exports.Modal.prototype,"type",2);e([o.property({type:Number})],exports.Modal.prototype,"top",2);e([o.property({type:Number})],exports.Modal.prototype,"start",2);e([o.property({type:Boolean,attribute:"image-auto-size"})],exports.Modal.prototype,"imageAutoSize",2);e([o.property({type:String,attribute:"image-src"})],exports.Modal.prototype,"imageSrc",2);e([o.property({type:String,attribute:"image-alt"})],exports.Modal.prototype,"imageAlt",2);e([o.property({type:String,attribute:"mobile-image-src"})],exports.Modal.prototype,"mobileImageSrc",2);e([o.property({type:String,attribute:"mobile-image-alt"})],exports.Modal.prototype,"mobileImageAlt",2);e([o.property({type:String,attribute:"primary-action-label"})],exports.Modal.prototype,"primaryActionLabel",2);e([o.property({type:String,attribute:"secondary-action-label"})],exports.Modal.prototype,"secondaryActionLabel",2);e([o.property({type:String})],exports.Modal.prototype,"animated",2);e([o.property({type:Boolean,attribute:"disable-focus-lock"})],exports.Modal.prototype,"disabledFocusLock",1);e([g.query("dialog")],exports.Modal.prototype,"dialogElement",2);e([g.query(".modal__body")],exports.Modal.prototype,"bodyElement",2);e([g.query(".modal__button-close")],exports.Modal.prototype,"closeButton",2);e([f.state()],exports.Modal.prototype,"isHeightOverflowed",2);exports.Modal=e([_.customElement(k.IGDS_TAGS.modal)],exports.Modal);

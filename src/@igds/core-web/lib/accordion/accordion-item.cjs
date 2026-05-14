"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.cjs");const l=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/lit-html.cjs");require("../node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.cjs");const p=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.cjs"),r=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.cjs"),m=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query.cjs"),d=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/if-defined.cjs"),u=require("../constants/events.cjs"),g=require("../constants/tags.cjs"),y=require("../abstractions/igds-element.cjs");require("../abstractions/angular-form-element.cjs");const h=require("@igds/icons"),_=require("./accordion-item.scss.cjs"),f=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.cjs");var q=Object.defineProperty,I=Object.getOwnPropertyDescriptor,t=(n,e,s,i)=>{for(var o=i>1?void 0:i?I(e,s):e,c=n.length-1,a;c>=0;c--)(a=n[c])&&(o=(i?a(e,s,o):a(o))||o);return i&&o&&q(e,s,o),o};exports.AccordionItem=class extends y.IGDSElement{constructor(){super(...arguments),this.open=!1,this.disabled=!1,this.onToggle=null}detailsToggleHandler(e){this.open=this.details.open,this.emit(u.IGDS_EVENTS.toggle,e.newState),this.onToggle?.(e)}render(){return l.html`
      <details
        ?open=${this.open}
        ?inert=${this.disabled}
        @toggle=${this.detailsToggleHandler}
        aria-expanded=${d.ifDefined(this.open)}
        class="accordion-item"
      >
        <summary aria-label="Accordion item" class="accordion-item__header">
          ${this.icon&&l.html`<igds-icon
            node=${this.icon}
            class="accordion-item__icon"
          ></igds-icon>`}
          <span class="accordion-item__title">${this.header}</span>
          <igds-icon
            node=${h.chevronDown}
            class="accordion-item__arrow"
          ></igds-icon>
        </summary>
        <div
          role="region"
          aria-live="polite"
          aria-hidden=${d.ifDefined(!this.open)}
          class="accordion-item__content"
        >
          <slot class="accordion-item__content-slot"></slot>
        </div>
      </details>
    `}};exports.AccordionItem.styles=f.unsafeCSS(_);t([r.property({type:Boolean})],exports.AccordionItem.prototype,"open",2);t([r.property({type:Boolean})],exports.AccordionItem.prototype,"disabled",2);t([r.property({type:String})],exports.AccordionItem.prototype,"icon",2);t([r.property({type:String})],exports.AccordionItem.prototype,"header",2);t([r.property({type:Boolean,attribute:!1})],exports.AccordionItem.prototype,"onToggle",2);t([m.query("details")],exports.AccordionItem.prototype,"details",2);exports.AccordionItem=t([p.customElement(g.IGDS_TAGS.accordionItem)],exports.AccordionItem);

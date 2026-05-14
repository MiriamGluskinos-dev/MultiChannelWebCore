"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.cjs");const s=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/lit-html.cjs");require("../node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.cjs");const I=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.cjs"),n=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.cjs"),c=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/class-map.cjs"),u=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/when.cjs"),p=require("../constants/events.cjs"),d=require("../constants/tags.cjs"),f=require("../abstractions/igds-element.cjs");require("../abstractions/angular-form-element.cjs");const t=require("./constants.cjs"),S=require("@igds/icons"),h=require("./badge.scss.cjs"),N=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.cjs");var B=Object.defineProperty,T=Object.getOwnPropertyDescriptor,e=(l,i,a,r)=>{for(var o=r>1?void 0:r?T(i,a):i,g=l.length-1,_;g>=0;g--)(_=l[g])&&(o=(r?_(i,a,o):_(o))||o);return r&&o&&B(i,a,o),o};exports.Badge=class extends f.IGDSElement{constructor(){super(...arguments),this.variant=t.IGDS_BADGE_VARIANT.default,this.label="",this.notification=!1,this.notificationButton=!1,this.notificationButtonSize=t.IGDS_NOTIFICATION_BUTTON_SIZES.medium,this.notificationButtonVariant=t.IGDS_NOTIFICATION_BUTTON_VARIANTS.primary}isNumeric(){return typeof this.counter=="number"}getValue(){return this.isNumeric()?String(this.counter):this.label}getRole(){const i=[t.IGDS_BADGE_VARIANT.warning,t.IGDS_BADGE_VARIANT.failure];return u.when(this.isNumeric(),()=>this.notification?"alert":"status",()=>i.includes(this.variant)?"alert":"status")}getBadgeClass(){return u.when(this.isNumeric(),()=>c.classMap({badge:!0,"badge--numeric":!0,"badge--notification":!!this.notification}),()=>c.classMap({badge:!0,"badge--regular":!0,"badge--informative":this.variant===t.IGDS_BADGE_VARIANT.informative,"badge--in-progress":this.variant===t.IGDS_BADGE_VARIANT.inProgress,"badge--success":this.variant===t.IGDS_BADGE_VARIANT.success,"badge--warning":this.variant===t.IGDS_BADGE_VARIANT.warning,"badge--failure":this.variant===t.IGDS_BADGE_VARIANT.failure,"badge--has-icon":!!(this.icon||t.IGDS_BADGE_ICONS[this.variant])&&!this.isNumeric()}))}getIcon(){const i=this.icon||t.IGDS_BADGE_ICONS[this.variant];return u.when(i&&!this.isNumeric(),()=>s.html`<igds-icon node=${i} class="badge__icon"></igds-icon>`)}updated(i){super.updated(i),(typeof i.get("counter")=="number"||typeof i.get("label")=="string")&&this.emit(p.IGDS_EVENTS.change,this.getValue())}handleNotificationClick(i){i.stopPropagation(),this.emit(p.IGDS_EVENTS.click,"button clicked")}render(){return s.html`
      ${u.when(this.notificationButton,()=>s.html`
          <div class="notification-button">
            <igds-button
              class=${c.classMap({"notification-button__button":!0,"notification-button__button--medium":this.notificationButtonSize===t.IGDS_NOTIFICATION_BUTTON_SIZES.medium})}
              .variant=${this.notificationButtonVariant}
              .size=${this.notificationButtonSize}
              @igds-click=${this.handleNotificationClick}
            >
              <igds-icon slot="icon" node=${S.notifications}></igds-icon>
            </igds-button>

            <span
              class=${c.classMap({badge:!0,"notification-button__notifier":!0,"notification-button__notifier--small-link":this.notificationButtonVariant===t.IGDS_NOTIFICATION_BUTTON_VARIANTS.link&&this.notificationButtonSize===t.IGDS_NOTIFICATION_BUTTON_SIZES.small,"notification-button__notifier--medium":this.notificationButtonSize===t.IGDS_NOTIFICATION_BUTTON_SIZES.medium,"notification-button__notifier--large":this.notificationButtonSize===t.IGDS_NOTIFICATION_BUTTON_SIZES.large,"notification-button__notifier--large-link":this.notificationButtonSize===t.IGDS_NOTIFICATION_BUTTON_SIZES.large&&this.notificationButtonVariant===t.IGDS_NOTIFICATION_BUTTON_VARIANTS.link,"badge--numeric":!0,"badge--notification":!!this.notification})}
              role=${this.getRole()}
              aria-live="polite"
            >
              <span class="badge__text"> ${this.label} </span>
            </span>
          </div>
        `,()=>s.html`
          <span
            class=${this.getBadgeClass()}
            role=${this.getRole()}
            aria-live="polite"
          >
            ${this.getIcon()}
            <span class="badge__text">${this.getValue()}</span>
          </span>
        `)}
    `}};exports.Badge.styles=N.unsafeCSS(h);e([n.property({type:String,reflect:!0})],exports.Badge.prototype,"variant",2);e([n.property({type:String})],exports.Badge.prototype,"label",2);e([n.property({type:String})],exports.Badge.prototype,"icon",2);e([n.property({type:Number})],exports.Badge.prototype,"counter",2);e([n.property({type:Boolean})],exports.Badge.prototype,"notification",2);e([n.property({type:Boolean,attribute:"notification-button"})],exports.Badge.prototype,"notificationButton",2);e([n.property({type:String,attribute:"notification-button-size"})],exports.Badge.prototype,"notificationButtonSize",2);e([n.property({type:String,attribute:"notification-button-variant"})],exports.Badge.prototype,"notificationButtonVariant",2);exports.Badge=e([I.customElement(d.IGDS_TAGS.badge)],exports.Badge);

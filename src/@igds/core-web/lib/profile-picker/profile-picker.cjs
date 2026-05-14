"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.cjs");const n=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/lit-html.cjs");require("../node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.cjs");const u=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.cjs"),i=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.cjs"),f=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/class-map.cjs"),P=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/when.cjs"),_=require("../abstractions/igds-element.cjs");require("../abstractions/angular-form-element.cjs");const h=require("./profile-picker.scss.cjs"),v=require("../constants/tags.cjs"),m=require("./constants.cjs");require("../icon/icon.cjs");const c=require("@igds/icons"),d=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.cjs");var g=Object.defineProperty,y=Object.getOwnPropertyDescriptor,r=(a,t,o,s)=>{for(var e=s>1?void 0:s?y(t,o):t,p=a.length-1,l;p>=0;p--)(l=a[p])&&(e=(s?l(t,o,e):l(e))||e);return s&&e&&g(t,o,e),e};exports.ProfilePicker=class extends _.IGDSElement{constructor(){super(...arguments),this.avatarSize=m.IGDS_PROFILE_PICKER_SIZES.small,this.username="שם המשתמש",this.userId="",this.avatarUrl="",this.open=!1}render(){return n.html`
      <div class="profile-picker">
        <button
          class="profile-picker__main"
          aria-haspopup="menu"
          aria-expanded=${this.open?"true":"false"}
          aria-label="User profile"
          slot="trigger"
        >
          <span
            class=${f.classMap({"profile-picker__avatar":!0,"profile-picker__avatar--large":this.avatarSize==="large"})}
          >
            ${P.when(this.avatarUrl,()=>n.html` <img
                class="profile-picker__avatar-img"
                src=${this.avatarUrl}
                alt=""
              />`,()=>n.html`
                <igds-icon
                  class="profile-picker__avatar-icon"
                  fill
                  node=${c.person}
                  aria-hidden="true"
                ></igds-icon>
              `)}
          </span>

          <section class="profile-picker__user">
            <h4 class="profile-picker__user-name">${this.username}</h4>
            <span class="profile-picker__user-id">${this.userId}</span>
          </section>

          <igds-icon
            class="profile-picker__chevron-btn-icon"
            node=${this.open?c.chevronUp:c.chevronDown}
          ></igds-icon>
        </button>
      </div>
    `}};exports.ProfilePicker.styles=d.unsafeCSS(h);r([i.property({type:String,attribute:"avatar-size"})],exports.ProfilePicker.prototype,"avatarSize",2);r([i.property({type:String})],exports.ProfilePicker.prototype,"username",2);r([i.property({type:String,attribute:"user-id"})],exports.ProfilePicker.prototype,"userId",2);r([i.property({type:String,attribute:"avatar-url"})],exports.ProfilePicker.prototype,"avatarUrl",2);r([i.property({type:Boolean})],exports.ProfilePicker.prototype,"open",2);exports.ProfilePicker=r([u.customElement(v.IGDS_TAGS.profilePicker)],exports.ProfilePicker);

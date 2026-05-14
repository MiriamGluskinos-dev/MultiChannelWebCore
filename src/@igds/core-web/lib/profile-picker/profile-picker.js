var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { when } from 'lit/directives/when.js';
import { IGDSElement } from '../abstractions';
import styles from './profile-picker.scss?inline';
import { IGDS_TAGS } from '../constants';
import { IGDS_PROFILE_PICKER_SIZES } from './constants';
import '../icon/icon';
import { person, chevronUp, chevronDown } from '@igds/icons';
let ProfilePicker = class ProfilePicker extends IGDSElement {
    constructor() {
        super(...arguments);
        this.avatarSize = IGDS_PROFILE_PICKER_SIZES.small;
        this.username = 'שם המשתמש';
        this.userId = '';
        this.avatarUrl = '';
        this.open = false;
    }
    render() {
        return html `
      <div class="profile-picker">
        <button
          class="profile-picker__main"
          aria-haspopup="menu"
          aria-expanded=${this.open ? 'true' : 'false'}
          aria-label="User profile"
          slot="trigger"
        >
          <span
            class=${classMap({
            'profile-picker__avatar': true,
            'profile-picker__avatar--large': this.avatarSize === 'large',
        })}
          >
            ${when(this.avatarUrl, () => html ` <img
                class="profile-picker__avatar-img"
                src=${this.avatarUrl}
                alt=""
              />`, () => html `
                <igds-icon
                  class="profile-picker__avatar-icon"
                  fill
                  node=${person}
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
            node=${this.open ? chevronUp : chevronDown}
          ></igds-icon>
        </button>
      </div>
    `;
    }
};
ProfilePicker.styles = unsafeCSS(styles);
__decorate([
    property({ type: String, attribute: 'avatar-size' })
], ProfilePicker.prototype, "avatarSize", void 0);
__decorate([
    property({ type: String })
], ProfilePicker.prototype, "username", void 0);
__decorate([
    property({ type: String, attribute: 'user-id' })
], ProfilePicker.prototype, "userId", void 0);
__decorate([
    property({ type: String, attribute: 'avatar-url' })
], ProfilePicker.prototype, "avatarUrl", void 0);
__decorate([
    property({ type: Boolean })
], ProfilePicker.prototype, "open", void 0);
ProfilePicker = __decorate([
    customElement(IGDS_TAGS.profilePicker)
], ProfilePicker);
export { ProfilePicker };

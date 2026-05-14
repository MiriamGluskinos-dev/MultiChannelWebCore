var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { property } from 'lit/decorators.js';
import { IGDSElement } from './igds-element';
class AngularFormElement extends IGDSElement {
    constructor() {
        super(...arguments);
        this.passiveElement = false;
        this._value = '';
        this._checked = false;
        this.DEFAULT_VALUE = 'on';
    }
    set checked(value) {
        if (Boolean(value) !== this._checked) {
            this.dispatchAngularSpecificEvent('checked', value);
            this._checked = value;
        }
    }
    get checked() {
        return this._checked;
    }
    set value(newValue) {
        if (this.value == null && newValue == null) {
            return;
        }
        if (this._value === this.DEFAULT_VALUE && newValue == null) {
            this.dispatchAngularSpecificEvent('value', this._value);
            return;
        }
        if (newValue != this._value) {
            this.dispatchAngularSpecificEvent('value', newValue);
            this._value = newValue;
        }
    }
    get value() {
        return this._value;
    }
    dispatchAngularSpecificEvent(propertyName, value) {
        if (this.passiveElement) {
            return;
        }
        this.dispatchEvent(new CustomEvent(`${propertyName}Change`, { detail: value }));
    }
    setAsAngularLibFormElement() {
        this.passiveElement = true;
    }
}
__decorate([
    property({ type: Boolean, attribute: 'checked' })
], AngularFormElement.prototype, "checked", null);
__decorate([
    property({ type: String, attribute: 'value' })
], AngularFormElement.prototype, "value", null);
export { AngularFormElement };

import { LitElement } from 'lit';
class IGDSElement extends LitElement {
    emit(name, value, customOptions = {}) {
        const options = {
            bubbles: true,
            cancelable: false,
            composed: true,
            detail: { value, ...customOptions },
        };
        this.dispatchEvent(new CustomEvent(name, options));
    }
}
export { IGDSElement };

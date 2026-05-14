import { PropertyValues } from 'lit';
import { IGDSElement } from '../abstractions';
import { IGDS_BUTTON_TYPES, IGDS_BUTTON_VARIANTS, IGDS_BUTTON_SIZES } from './constants';
import '../icon';
declare class Button extends IGDSElement {
    static styles: import("lit").CSSResult[];
    constructor();
    private _internals;
    variant?: `${IGDS_BUTTON_VARIANTS}`;
    size?: `${IGDS_BUTTON_SIZES}`;
    disabled: boolean;
    loading: boolean;
    label?: string;
    type: `${IGDS_BUTTON_TYPES}`;
    inverted: boolean;
    iconOnly: boolean;
    private hasIcon;
    private hasSecondIcon;
    private hasNoText;
    buttonElement: HTMLButtonElement;
    static formAssociated: boolean;
    private setAsButtonWithIcon;
    private setAsButtonWithSecondIcon;
    focus(): void;
    private handleClick;
    private handleFocus;
    private handleBlur;
    private handleKeydown;
    private handleKeyup;
    private handleIconSlotChange;
    protected updated(_changedProperties: PropertyValues): void;
    checkButtonTextSlot(): void;
    private getAriaLabel;
    render(): import("lit").TemplateResult<1>;
}
export { Button };
declare global {
    interface HTMLElementTagNameMap {
        'igds-button': Button;
    }
}

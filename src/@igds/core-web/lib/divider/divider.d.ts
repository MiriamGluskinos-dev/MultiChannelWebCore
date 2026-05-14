import { LitElement } from 'lit';
import { IGDS_DIVIDER_ORIENTATIONS, IGDS_DIVIDER_WIDTH } from './constants';
declare class Divider extends LitElement {
    static styles: import("lit").CSSResult;
    constructor();
    width?: `${IGDS_DIVIDER_WIDTH}`;
    orientation?: `${IGDS_DIVIDER_ORIENTATIONS}`;
    inverted?: boolean;
    label?: string;
    render(): import("lit").TemplateResult<1>;
}
export { Divider };
declare global {
    interface HTMLElementTagNameMap {
        'igds-divider': Divider;
    }
}

import { LitElement } from 'lit';
import { type IconName } from './dynamic-icon.types';
import '../icon';
declare class DynamicIcon extends LitElement {
    name: IconName;
    color?: string;
    size?: string | number;
    accessibleName?: string;
    render(): import("lit").TemplateResult<1>;
    private handleInvalidIcon;
    private renderFallback;
}
export { DynamicIcon };
declare global {
    interface HTMLElementTagNameMap {
        'igds-dynamic-icon': DynamicIcon;
    }
}

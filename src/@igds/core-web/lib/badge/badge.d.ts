import { PropertyValues } from 'lit';
import { IGDS_TAGS } from '../constants';
import { IGDSElement } from '../abstractions';
import { IGDS_BADGE_VARIANT, IGDS_NOTIFICATION_BUTTON_SIZES, IGDS_NOTIFICATION_BUTTON_VARIANTS } from './constants';
declare class Badge extends IGDSElement {
    static styles: import("lit").CSSResult;
    variant: `${IGDS_BADGE_VARIANT}`;
    label: string;
    icon?: string;
    counter?: number;
    notification?: boolean | undefined;
    notificationButton?: boolean | undefined;
    notificationButtonSize?: `${IGDS_NOTIFICATION_BUTTON_SIZES}`;
    notificationButtonVariant?: `${IGDS_NOTIFICATION_BUTTON_VARIANTS}`;
    private isNumeric;
    private getValue;
    private getRole;
    private getBadgeClass;
    private getIcon;
    updated(changedProperties: PropertyValues<this>): void;
    private handleNotificationClick;
    render(): import("lit").TemplateResult<1>;
}
export { Badge };
declare global {
    interface HTMLElementTagNameMap {
        [IGDS_TAGS.badge]: Badge;
    }
}

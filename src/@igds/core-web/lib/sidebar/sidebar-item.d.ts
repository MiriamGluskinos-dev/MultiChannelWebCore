import { IGDSElement } from '../abstractions';
import { IGDS_TAGS } from '../constants';
declare class SidebarItem extends IGDSElement {
    static styles: import("lit").CSSResult;
    componentId: string;
    label: string;
    disabled: boolean;
    subMenu: boolean;
    icon?: string;
    isSubMenuItem: boolean;
    expanded: boolean;
    render(): import("lit").TemplateResult<1>;
    onMouseEnter(): void;
    onClick(): void;
}
export { SidebarItem };
declare global {
    interface HTMLElementTagNameMap {
        [IGDS_TAGS.sidebarItem]: SidebarItem;
    }
}

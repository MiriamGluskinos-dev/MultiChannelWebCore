import { IGDS_TAGS } from '../constants';
import { IGDSElement } from '../abstractions';
import { TabsContext } from './context';
import '../icon';
import '../badge';
declare class Tabs extends IGDSElement {
    context: TabsContext;
    static styles: import("lit").CSSResult;
    tabs: {
        id: string;
        label: string;
        icon?: string;
        disabled: boolean;
        badge?: number;
    }[];
    currentTabId?: string;
    centered: boolean;
    connectedCallback(): void;
    private scrollToActiveTab;
    private handleClick;
    private handleKeyDown;
    render(): import("lit").TemplateResult<1>;
}
export { Tabs };
declare global {
    interface HTMLElementTagNameMap {
        [IGDS_TAGS.tabs]: Tabs;
    }
}

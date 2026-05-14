import { IGDS_TAGS } from '../constants';
import { IGDSElement } from '../abstractions';
import { TabsContext } from './context';
declare class TabPanel extends IGDSElement {
    context?: TabsContext;
    tab: string;
    connectedCallback(): void;
    disconnectedCallback(): void;
    handleSlotChange(): void;
    render(): import("lit").TemplateResult<1>;
}
export { TabPanel };
declare global {
    interface HTMLElementTagNameMap {
        [IGDS_TAGS.tabPanel]: TabPanel;
    }
}

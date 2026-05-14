import { PropertyValues } from 'lit';
import { IGDS_TAGS } from '../constants';
import { IGDSElement } from '../abstractions';
import { TabsContext } from './context';
declare class Tab extends IGDSElement {
    context?: TabsContext;
    id: string;
    label: string;
    disabled: boolean;
    icon?: string;
    badge?: number;
    connectedCallback(): void;
    private registerTab;
    update(changedProperties: PropertyValues): void;
    disconnectedCallback(): void;
    render(): null;
}
export { Tab };
declare global {
    interface HTMLElementTagNameMap {
        [IGDS_TAGS.tab]: Tab;
    }
}

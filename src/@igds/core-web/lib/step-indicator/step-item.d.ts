import { PropertyValues } from 'lit';
import { IGDS_TAGS } from '../constants';
import { IGDSElement } from '../abstractions';
import { IgdsStepIndicatorContext } from './context';
declare class StepItem extends IGDSElement {
    private stepId?;
    label?: string;
    secondaryLabel?: string;
    context?: IgdsStepIndicatorContext;
    itemSlot?: HTMLSlotElement;
    firstUpdated(changedProperties: PropertyValues): void;
    disconnectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
}
export { StepItem };
declare global {
    interface HTMLElementTagNameMap {
        [IGDS_TAGS.stepItem]: StepItem;
    }
}

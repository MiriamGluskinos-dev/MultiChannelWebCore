import { PropertyValues } from 'lit';
import { IGDS_TAGS } from '../constants';
import { IGDSElement } from '../abstractions';
import { IGDS_STEP_INDICATOR_ORIENTATION } from './constants';
import { IgdsStepIndicatorContext } from './context';
import '../icon';
import { StepItemRendererProps } from './types/step-item-renderer-props';
import { StepIndicatorItemClick } from '../abstractions/event-types/step-indicator-item-click';
declare class StepIndicator extends IGDSElement {
    static styles: import("lit").CSSResult;
    private myParentStepId;
    orientation?: `${IGDS_STEP_INDICATOR_ORIENTATION}`;
    current: number;
    flat: boolean;
    context: IgdsStepIndicatorContext;
    parentContext?: IgdsStepIndicatorContext;
    steps: import("./types/step-details").StepIndicatorDetails[];
    private onStepChanged;
    private isCurrentStep;
    connectedCallback(): void;
    firstUpdated(changedProperties: PropertyValues): void;
    update(changedProperties: PropertyValues): void;
    disconnectedCallback(): void;
    renderFlatStepIndicator(): import("lit").TemplateResult<1>;
    renderHorizontalMobileHeader(): import("lit").TemplateResult<1> | undefined;
    renderStepItem({ isNested, isCompleted, isCurrent, number, label, secondaryLabel, children, parentNumber, }: StepItemRendererProps): import("lit").TemplateResult<1>;
    emitClick(detail: StepIndicatorItemClick): void;
    render(): import("lit").TemplateResult<1> | null;
}
export { StepIndicator };
declare global {
    interface HTMLElementTagNameMap {
        [IGDS_TAGS.stepIndicator]: StepIndicator;
    }
}

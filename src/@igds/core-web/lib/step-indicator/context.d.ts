import { IGDS_STEP_INDICATOR_ORIENTATION } from './constants';
import { StepIndicatorDetails } from './types/step-details';
export declare class IgdsStepIndicatorContext {
    private _orientation?;
    private _steps;
    onChange: (() => void) | undefined;
    getSteps(): StepIndicatorDetails[];
    setOrientation(orientation: `${IGDS_STEP_INDICATOR_ORIENTATION}`): void;
    getOrientation(): "horizontal" | "vertical" | undefined;
    registerStep(label: string, secondaryLabel?: string): string;
    registerSubSteps(steps: StepIndicatorDetails[], currentStep: number): string;
    updateNestedCurrentStep(parentItemId: string | undefined, current: number): void;
    removeStep(stepId: string): void;
    updateContext(): void;
}
export declare const igdsStepIndicatorContext: {
    __context__: IgdsStepIndicatorContext;
};

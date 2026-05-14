import { createContext } from '@lit/context';
export class IgdsStepIndicatorContext {
    constructor() {
        this._steps = [];
        this.onChange = undefined;
    }
    getSteps() {
        return this._steps;
    }
    setOrientation(orientation) {
        this._orientation = orientation;
    }
    getOrientation() {
        return this._orientation;
    }
    registerStep(label, secondaryLabel) {
        this._steps = [
            ...this._steps,
            {
                id: `${this._steps.length + 1}`,
                label,
                ...(secondaryLabel ? { secondaryLabel } : {}),
            },
        ];
        this.updateContext();
        return this._steps[this._steps.length - 1].id;
    }
    registerSubSteps(steps, currentStep) {
        const lastStep = this._steps[this._steps.length - 1];
        this._steps = [
            ...this._steps.slice(0, -1),
            {
                id: lastStep.id,
                label: lastStep.label,
                ...(lastStep.secondaryLabel
                    ? { secondaryLabel: lastStep.secondaryLabel }
                    : {}),
                children: {
                    current: currentStep,
                    items: steps.map((s) => ({
                        id: `${this._steps.length}.${s.id}`,
                        label: s.label,
                        ...(s.secondaryLabel ? { secondaryLabel: s.secondaryLabel } : {}),
                    })),
                },
            },
        ];
        this.updateContext();
        return this._steps[this._steps.length - 1].id;
    }
    updateNestedCurrentStep(parentItemId, current) {
        if (parentItemId === undefined) {
            return;
        }
        this._steps = this._steps.map((item) => {
            if (item.id === parentItemId) {
                return {
                    ...item,
                    ...(item.children
                        ? {
                            children: {
                                current,
                                items: [...item.children.items],
                            },
                        }
                        : {}),
                };
            }
            else {
                return item;
            }
        });
        this.updateContext();
    }
    removeStep(stepId) {
        this._steps = this._steps.filter((step) => step.id !== stepId);
        this.updateContext();
    }
    updateContext() {
        if (this.onChange !== undefined) {
            this.onChange();
        }
    }
}
export const igdsStepIndicatorContext = createContext(Symbol('igds-step-indicator'));

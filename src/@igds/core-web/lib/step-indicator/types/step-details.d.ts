export type StepIndicatorDetails = StepDetails & {
    children?: SubStepDetails;
};
export type SubStepDetails = {
    current: number;
    items: StepDetails[];
};
export type StepDetails = {
    id: string;
    label: string;
    secondaryLabel?: string;
};

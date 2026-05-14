import { TemplateResult } from 'lit';
export type StepItemRendererProps = {
    isNested: boolean;
    isCompleted: boolean;
    isCurrent: boolean;
    number: number;
    label: string;
    secondaryLabel?: string;
    children?: TemplateResult<1>;
    parentNumber?: number;
};

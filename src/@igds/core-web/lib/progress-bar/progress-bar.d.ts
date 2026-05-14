import { PropertyValues } from 'lit';
import { IGDS_TAGS } from '../constants';
import { IGDS_PROGRESS_BAR_TYPE, IGDS_SPINNER_SIZES } from './constants';
import { IGDSElement } from '../abstractions';
declare class ProgressBar extends IGDSElement {
    static styles: import("lit").CSSResult;
    type?: `${IGDS_PROGRESS_BAR_TYPE}`;
    color: string;
    inverted: boolean;
    value: number;
    size: `${IGDS_SPINNER_SIZES}`;
    label?: string | undefined;
    helpText?: string | undefined;
    statusIcon?: string;
    indeterminate: boolean;
    private _progressBar;
    private parseColor;
    private completeProgress;
    updated(changedProperties: PropertyValues<this>): void;
    private getLineProgress;
    private getSpinnerProgress;
    render(): import("lit").TemplateResult<1>;
}
export { ProgressBar };
declare global {
    interface HTMLElementTagNameMap {
        [IGDS_TAGS.progressBar]: ProgressBar;
    }
}

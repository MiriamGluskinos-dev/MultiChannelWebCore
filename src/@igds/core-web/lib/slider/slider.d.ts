import { AngularFormElement } from '../abstractions';
import { IGDS_TAGS } from '../constants';
import { IGDS_SLIDER_VARIANTS } from './constants';
declare class Slider extends AngularFormElement {
    static formAssociated: boolean;
    static styles: import("lit").CSSResult;
    private _internals;
    constructor();
    componentId: string;
    dir: string;
    label: string;
    variant: `${IGDS_SLIDER_VARIANTS}`;
    min: number;
    max: number;
    step: number;
    disabled: boolean;
    icon: string;
    name?: string;
    form?: string;
    defaultValue?: string;
    required: boolean;
    invalid: boolean;
    error?: string;
    minValueName?: string;
    maxValueName?: string;
    onChange?: ((event: Event) => void) | null;
    sliderInputElement: HTMLInputElement;
    sliderMinInputElement: HTMLInputElement;
    sliderMaxInputElement: HTMLInputElement;
    sliderMinValueNameElement: HTMLSpanElement;
    sliderMaxValueNameElement: HTMLSpanElement;
    minValue: number;
    maxValue: number;
    firstUpdated(): void;
    updated(): void;
    initSlider(): void;
    initRangeSlider(): void;
    updateRangeBackground(): void;
    updateValuePositions(): void;
    render(): import("lit").TemplateResult<1>;
    renderSingleSlider(): import("lit").TemplateResult<1>;
    renderRangeSlider(): import("lit").TemplateResult<1>;
    onChangeHandler(event: Event): void;
    processFormDataAndEvents(event: Event, isMin?: boolean): void;
    onRangeValueChange(event: Event, isMin?: boolean): void;
    get offsetDistance(): number;
}
export { Slider };
declare global {
    interface HTMLElementTagNameMap {
        [IGDS_TAGS.slider]: Slider;
    }
}

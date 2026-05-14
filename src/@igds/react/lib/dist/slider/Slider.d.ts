import React from 'react';
import { Slider as SliderWC } from '@igds/core-web/slider';
declare const Slider: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<SliderWC>, "defaultValue" | "onChange" | "connectedCallback" | "disconnectedCallback" | "firstUpdated" | "updated" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "form" | "label" | "icon" | "disabled" | "onIgdsChange" | "variant" | "componentId" | "required" | "invalid" | "name" | "error" | "checked" | "value" | "min" | "max" | "onChangeHandler" | "step" | "minValueName" | "maxValueName" | "sliderInputElement" | "sliderMinInputElement" | "sliderMaxInputElement" | "sliderMinValueNameElement" | "sliderMaxValueNameElement" | "minValue" | "maxValue" | "initSlider" | "initRangeSlider" | "updateRangeBackground" | "updateValuePositions" | "renderSingleSlider" | "renderRangeSlider" | "processFormDataAndEvents" | "onRangeValueChange" | "offsetDistance"> & {
    onIgdsChange?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
} & Partial<Omit<SliderWC, keyof HTMLElement>> & React.RefAttributes<SliderWC>, "ref"> & React.RefAttributes<SliderWC>>;
export { Slider, SliderWC };

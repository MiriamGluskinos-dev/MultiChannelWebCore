import React from 'react';
import { Rating as RatingWC } from '@igds/core-web/rating';
declare const Rating: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<RatingWC>, "onFocus" | "onChange" | "onKeyDown" | "onMouseEnter" | "onMouseLeave" | "connectedCallback" | "disconnectedCallback" | "updated" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "form" | "label" | "onIgdsChange" | "variant" | "componentId" | "name" | "checked" | "value" | "readonly" | "onChangeHandler" | "handleDocumentMouseDown" | "removeHighlightedClass" | "onIgdsHover" | "ratingGrade" | "isHovering" | "hoverValue" | "iconMaxCount" | "highlightedIndex" | "selectedIndex" | "ratingGroup" | "ratingInput" | "ratingButtons" | "initializeRatingGrade" | "handleValuePropChange" | "renderStarRatingButtons" | "getFaceButtonCssClasses" | "getFaceIconCssClasses" | "renderFaceRatingButtons" | "onStarRatingClick" | "resetHighlightedSelection" | "onFaceRatingClick" | "commitSelection"> & {
    onIgdsHover?: ((e: CustomEvent<any>) => void) | undefined;
    onIgdsChange?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
} & Partial<Omit<RatingWC, keyof HTMLElement>> & React.RefAttributes<RatingWC>, "ref"> & React.RefAttributes<RatingWC>>;
export { Rating, RatingWC };

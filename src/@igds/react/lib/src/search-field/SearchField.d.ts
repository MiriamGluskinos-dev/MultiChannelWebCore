import React from 'react';
import { SearchField as SearchFieldWC } from '@igds/core-web/search-field';
declare const SearchField: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<SearchFieldWC>, "onInput" | "onKeyDown" | "onSelect" | "connectedCallback" | "disconnectedCallback" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "disabled" | "variant" | "value" | "onIgdsInput" | "placeholder" | "isPopupOpen" | "setPopupPosition" | "handleDocumentMouseDown" | "onIgdsClear" | "highlightedId" | "getClearIcon" | "onClear" | "onClearIconKeyDown" | "removeHighlightedClass" | "handleEnterOrSpaceDown" | "handleEscapeDown" | "handleArrowKeysDown" | "filters" | "onApply" | "getInputIcon" | "isRelevantKey" | "onIgdsSelect" | "onIgdsSearch" | "searchInputElement" | "searchGroupElement" | "audioElement" | "sourceElement" | "searchPopupElements" | "isFilterPopupOpen" | "isFirstInputToggled" | "firstInputValue" | "lastInputValue" | "suggestions" | "filterSuggestions" | "filterPlaceholder" | "showClear" | "clearable" | "voiceSearch" | "showEmptyResultsMessage" | "onAudioRecorderStop" | "playAudio" | "getInputCssClasses" | "renderClearIcon" | "renderFirstPart" | "renderSecondPart" | "renderDividedSearchField" | "isLtrHero" | "isRtlHero" | "isLtlHero" | "isRtlHeroWithDoubleEndPadding" | "isLtlHeroWithDoubleEndPadding" | "hasExtraEndPadding" | "hasExtraDoubleEndPadding" | "renderDefaultOrHeroSearchField" | "getHighlightedIndex" | "processHighlightedIndex" | "setValue" | "toggleSuggestionPopupByFirstInput" | "toggleSuggestionPopup" | "onFirstInputChange" | "onLastInputChange" | "onSearch" | "onLastInputSearch" | "getSuggestions" | "getSearchedSuggestions" | "getIconsAndAudioRecorderBox" | "getSettingsIcon" | "onFilterIconKeyDown" | "onFilterToggle" | "getSearchIconButton" | "getAudioRecorder" | "renderSuggestions" | "setDividedSearchInputValue" | "getSettingsIconTabIndex"> & {
    onIgdsInput?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
    onIgdsSearch?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
    onIgdsClear?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
    onIgdsSelect?: ((e: CustomEvent<{
        value: {
            id: string;
            label?: string;
            value?: string;
        };
    }>) => void) | undefined;
} & Partial<Omit<SearchFieldWC, keyof HTMLElement>> & React.RefAttributes<SearchFieldWC>, "ref"> & React.RefAttributes<SearchFieldWC>>;
export { SearchField, SearchFieldWC };

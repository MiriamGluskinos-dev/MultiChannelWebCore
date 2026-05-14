import React from 'react';
import { Dropdown as DropdownWC } from '@igds/core-web/dropdown';
declare const Dropdown: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<DropdownWC>, "defaultValue" | "onFocus" | "onBlur" | "onChange" | "onKeyDown" | "onSelect" | "connectedCallback" | "disconnectedCallback" | "firstUpdated" | "updated" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "form" | "label" | "select" | "disabled" | "onIgdsFocus" | "onIgdsBlur" | "onIgdsChange" | "onIgdsKeydown" | "required" | "helpText" | "helpIcon" | "invalid" | "name" | "error" | "setFormValue" | "getHelpContainer" | "getHelpIcon" | "getHelpText" | "getError" | "checked" | "value" | "labelIcon" | "placeholder" | "isPopupOpen" | "togglePopup" | "setPopupPosition" | "onChangeHandler" | "handleDocumentMouseDown" | "onIgdsClear" | "trigger" | "dropdownOptionElements" | "listElement" | "noOptions" | "filterText" | "highlightedId" | "treeCollapsedId" | "treeExpandedId" | "treeFocusedIndex" | "valueIcon" | "multiple" | "treeView" | "selected" | "options" | "filterable" | "tooltip" | "tooltipQuestion" | "tooltipIcon" | "treeNodes" | "setSelectedOptions" | "setMultiSelectedOptions" | "setSingleSelectedOption" | "setTreeViewSelectedNode" | "onClearFilter" | "isExtraDoublePaddingLtr" | "isExtraDoublePaddingRtr" | "getInputValueIcon" | "getClearIcon" | "onClear" | "onClearIconKeyDown" | "removeHighlightedClass" | "processOptionIndex" | "handleEnterOrSpaceDown" | "handleEscapeDown" | "handleArrowKeysDown" | "onKeyDownForFilterableDropdown" | "processCheckboxChecked" | "emitComponentEvents" | "handleEnterOrSpaceDownForMultipleChoicesDropdown" | "handleArrowsDownForMultipleChoiceDropdown" | "onKeyDownForMultipleChoicesDropdown" | "handleEnterOrSpaceDownForTreeViewDropdown" | "onKeyDownForTreeViewDropdown" | "scrollToIndexWhenMoveDown" | "scrollToIndexWhenMoveUp" | "handleEnterOrSpaceDownForSingleChoiceDropdown" | "findSingleChoiceIndex" | "processSingleChoiceDropdownOptions" | "handleArrowsDownForSingleChoiceDropdown" | "onKeyDownForSingleChoiceDropdown" | "setPopupPositionWhenOpen" | "getDropdownOptions" | "setFilterText" | "getPopupActions" | "selectAllHandler" | "getFormValue" | "resetAllHandler" | "renderDropdownOptions" | "renderDropdownTreeView" | "renderNoOptions" | "getOptions" | "filteredOptions" | "onMultiSelect" | "onSingleSelect" | "onTreeNodeClick" | "onTreeNodeFocusChanged" | "resetTreeCollapsedIds"> & {
    onIgdsClear?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
    onIgdsKeydown?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
    onIgdsBlur?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
    onIgdsFocus?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
    onIgdsChange?: ((e: CustomEvent<{
        value: string | string[];
    }>) => void) | undefined;
} & Partial<Omit<DropdownWC, keyof HTMLElement>> & React.RefAttributes<DropdownWC>, "ref"> & React.RefAttributes<DropdownWC>>;
export { Dropdown, DropdownWC };

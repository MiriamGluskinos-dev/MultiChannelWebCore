import React from 'react';
import { Table as TableWC } from '@igds/core-web/table';
declare const Table: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<TableWC>, "connectedCallback" | "disconnectedCallback" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "header" | "tbody" | "context" | "handleEscapeDown" | "rows" | "onIgdsDragStart" | "onIgdsDragEnd" | "droppable" | "update" | "initDragAndDrop" | "processArrowsKeyDown" | "isRelevantKey" | "onIgdsRowSelect" | "onIgdsCallAction" | "onIgdsSortingOrderChange" | "onIgdsCellChange" | "onIgdsCellClick" | "onIgdsCellEnterPressed" | "onIgdsCellLinkClick" | "selectable" | "editable" | "focusable" | "truncated" | "actions" | "selectedRows" | "_expandedRowIds" | "editableCell" | "domRows" | "cellText" | "boxes" | "cells" | "processDroppablePropertyUpdate" | "processTruncatedPropertyUpdate" | "checkTruncated" | "handleSelect" | "handleSelectAll" | "handleExpandAll" | "toggleRowSlot" | "handleAction" | "resetSortingOrder" | "changeSortingOrder" | "editCell" | "cancelEditCell" | "handleEditCellInput" | "saveCellValue" | "getCellValue" | "setFocusedCell" | "handleCellClick" | "handleInputKeydown" | "handleEnterDown" | "moveUp" | "moveDown" | "moveStart" | "moveEnd" | "handleKeyDown" | "focusCellByAddress" | "handleClickLinkCell" | "getTruncatedValue" | "renderExpandableRow" | "renderExpandAllCellControl" | "renderExpandCellControl" | "renderSelectAllCellControl" | "renderSelectCellControl" | "renderPlaceholderCellControl" | "renderHeaderCell" | "renderTableHeader" | "renderActionCellControl" | "renderCellsToCompleteTableRow" | "renderDragAndDropCellControl" | "renderLinkCell" | "renderTextCell" | "renderTableCell" | "renderSlottedCell" | "renderRowCells"> & {
    onIgdsDragStart?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
    onIgdsDragEnd?: ((e: CustomEvent<{
        value: string;
        oldRowIndex: number | undefined;
        newRowIndex: number | undefined;
    }>) => void) | undefined;
    onIgdsRowSelect?: ((e: CustomEvent<{
        value: string[];
    }>) => void) | undefined;
    onIgdsCallAction?: ((e: CustomEvent<{
        value: {
            rowId: string;
            rowIndex: number;
            action: string;
        };
    }>) => void) | undefined;
    onIgdsSortingOrderChange?: ((e: CustomEvent<{
        value: Record<number, string>;
    }>) => void) | undefined;
    onIgdsCellChange?: ((e: CustomEvent<{
        value: {
            rowIndex: number;
            cellIndex: number;
            newValue: string;
        };
    }>) => void) | undefined;
    onIgdsCellClick?: ((e: CustomEvent<{
        value: {
            rowIndex: number;
            cellIndex: number;
        };
    }>) => void) | undefined;
    onIgdsCellEnterPressed?: ((e: CustomEvent<{
        value: {
            rowIndex: number;
            cellIndex: number;
        };
    }>) => void) | undefined;
    onIgdsCellLinkClick?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
} & Partial<Omit<TableWC, keyof HTMLElement>> & React.RefAttributes<TableWC>, "ref"> & React.RefAttributes<TableWC>>;
export { Table, TableWC };

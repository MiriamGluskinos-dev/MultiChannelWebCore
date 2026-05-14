export type TableHeaderDetails = {
    id: string;
    name: string;
    tooltip?: string;
    sortable?: boolean;
    sortingOrder?: 'asc' | 'desc';
    draggable?: boolean;
    align?: 'start' | 'end' | 'center';
    slotted?: boolean;
    width?: string;
    minWidth?: string;
    maxWidth?: string;
};

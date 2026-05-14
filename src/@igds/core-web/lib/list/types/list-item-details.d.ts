import { DataListItemDetails } from './data-list-item-details';
export type ListItemDetails = DataListItem | HtmlListItem;
export type DataListItem = {
    id: string;
    data: DataListItemDetails;
};
export type HtmlListItem = {
    id: string;
    htmlContent: HTMLElement[];
};

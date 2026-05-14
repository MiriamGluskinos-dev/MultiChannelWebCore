export type BreadcrumbsItemDetails = {
    href: string;
    label: string;
    rel?: string;
    target?: '_blank' | '_parent' | '_self' | '_top';
};
export type BreadcrumbsItemWithId = BreadcrumbsItemDetails & {
    id: string;
};

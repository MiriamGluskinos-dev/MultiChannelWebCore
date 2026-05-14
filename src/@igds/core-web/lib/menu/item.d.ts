interface Item {
    id: string;
    label: string;
    icon?: string;
    subMenu?: boolean;
    subMenuItems?: Item[];
    disabled?: boolean;
    withDivider?: boolean;
}
export { Item };

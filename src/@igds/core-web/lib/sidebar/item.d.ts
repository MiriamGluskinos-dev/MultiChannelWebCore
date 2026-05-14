interface ItemSidebar {
    id: string;
    label: string;
    icon?: string;
    subMenu?: boolean;
    subMenuItems?: ItemSidebar[];
    disabled?: boolean;
}
export { ItemSidebar };

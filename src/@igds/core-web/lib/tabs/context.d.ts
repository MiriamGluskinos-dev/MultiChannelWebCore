type TabData = {
    id: string;
    label: string;
    icon?: string;
    disabled: boolean;
    badge?: number;
};
export declare class TabsContext {
    private _currentTab;
    private _tabs;
    private _panels;
    onChangeTabs?: () => void;
    onCurrentTabChange?: (newTabId: string) => void;
    get currentTab(): string | null;
    get tabs(): TabData[];
    get panels(): {
        id: string;
        panel: HTMLElement;
    }[];
    set currentTab(value: string | null);
    getTabs(): TabData[];
    registerTab(tabData: TabData): void;
    registerPanel(id: string, panel: HTMLElement): void;
    updatePanel(id: string, panel: HTMLElement): void;
    unregisterTab(currentId: string): void;
    unregisterPanel(currentTab: string): void;
    updateContext(part: 'tabs' | 'panels'): void;
}
export declare const tabsContext: {
    __context__: TabsContext;
};
export {};

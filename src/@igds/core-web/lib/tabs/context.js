import { createContext } from '@lit/context';
export class TabsContext {
    constructor() {
        this._currentTab = null;
        this._tabs = [];
        this._panels = [];
        this.onChangeTabs = undefined;
        this.onCurrentTabChange = undefined;
    }
    get currentTab() {
        return this._currentTab;
    }
    get tabs() {
        return this._tabs;
    }
    get panels() {
        return this._panels;
    }
    set currentTab(value) {
        this._currentTab = value;
        if (this.onCurrentTabChange && this._currentTab) {
            this.onCurrentTabChange(this._currentTab);
        }
    }
    getTabs() {
        return this._tabs;
    }
    registerTab(tabData) {
        const existingTabIndex = this._tabs.findIndex((tab) => tab.id === tabData.id);
        if (existingTabIndex >= 0) {
            this._tabs = [
                ...this._tabs.slice(0, existingTabIndex),
                tabData,
                ...this._tabs.slice(existingTabIndex + 1),
            ];
        }
        else {
            this._tabs = [...this._tabs, tabData];
        }
        if (!this._currentTab) {
            this.currentTab = tabData.id;
        }
        this.updateContext('tabs');
    }
    registerPanel(id, panel) {
        this._panels = [...this._panels, { id, panel }];
    }
    updatePanel(id, panel) {
        this._panels = this._panels.map(({ id: existingId, panel: existingPanel }) => {
            if (existingId === id) {
                return { id, panel };
            }
            return { id: existingId, panel: existingPanel };
        });
    }
    unregisterTab(currentId) {
        this._tabs = this._tabs.filter(({ id }) => id !== currentId);
    }
    unregisterPanel(currentTab) {
        this._panels = this._panels.filter(({ id }) => id !== currentTab);
    }
    updateContext(part) {
        if (part === 'tabs' && this.onChangeTabs) {
            this.onChangeTabs();
        }
    }
}
export const tabsContext = createContext(Symbol('tabs-context'));

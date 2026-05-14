import { IgdsRichTextEditorContext } from './rich-text-editor-context';
import { IGDSElement } from '../abstractions';
import { IGDS_TAGS } from '../constants';
import { IGDS_TOOLBAR_COMMAND } from './constant';
import '../icon';
declare class ToolbarItem extends IGDSElement {
    static styles: import("lit").CSSResult;
    icon: string;
    command: `${IGDS_TOOLBAR_COMMAND}`;
    label?: string;
    contextData: IgdsRichTextEditorContext;
    getLabel(): string;
    handleClick(): void;
    render(): import("lit").TemplateResult<1>;
}
export { ToolbarItem };
declare global {
    interface HTMLElementTagNameMap {
        [IGDS_TAGS.toolbarItem]: ToolbarItem;
    }
}

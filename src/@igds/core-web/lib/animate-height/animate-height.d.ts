import { IGDS_TAGS } from '../constants';
import { IGDSElement } from '../abstractions';
declare class AnimateHeight extends IGDSElement {
    static styles: import("lit").CSSResult;
    private _expand;
    private startTime;
    private fullTargetHeight;
    private actualTargetHeight;
    private animationId;
    private residualDuration;
    duration: number;
    set expand(value: boolean);
    get expand(): boolean;
    height: number;
    isAutoHeight: boolean;
    container: HTMLDivElement;
    constructor();
    private animateHeight;
    private animateIt;
    render(): import("lit").TemplateResult<1>;
}
export { AnimateHeight };
declare global {
    interface HTMLElementTagNameMap {
        [IGDS_TAGS.animateHeight]: AnimateHeight;
    }
}

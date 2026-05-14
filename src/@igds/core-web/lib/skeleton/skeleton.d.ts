import { PropertyValues } from 'lit';
import { IGDS_TAGS } from '../constants';
import { IGDSElement } from '../abstractions';
import { IGDS_SKELETON_VARIANT } from './constants';
declare class Skeleton extends IGDSElement {
    static styles: import("lit").CSSResult;
    variant: `${IGDS_SKELETON_VARIANT}`;
    radius: number;
    width: string;
    height?: string;
    currentWidth: string;
    currentHeight: string | undefined;
    private updateCurrentState;
    update(changedProperties: PropertyValues): void;
    render(): import("lit").TemplateResult<1>;
}
export { Skeleton };
declare global {
    interface HTMLElementTagNameMap {
        [IGDS_TAGS.skeleton]: Skeleton;
    }
}

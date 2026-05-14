import { IGDS_TAGS } from '../constants';
import { IGDSElement } from '../abstractions';
import { SegmentDataContext } from './context';
import { IGDS_SEGMENT_SIZE } from './constants';
import '../icon';
import '../button';
import '../tooltip';
declare class SegmentedControl extends IGDSElement {
    static styles: import("lit").CSSResult;
    static formAssociated: boolean;
    private _internals;
    constructor();
    contextData: SegmentDataContext;
    set disabled(value: boolean);
    set size(value: `${IGDS_SEGMENT_SIZE}`);
    name?: string;
    segmentsWithText: {
        id: string;
        hasText: boolean;
    }[];
    get isIconOnly(): boolean;
    updateSelectedId(selectedId: string | undefined, options?: {
        skipEvent?: boolean;
    }): void;
    reportAboutTextSegment(id: string, hasText: boolean): void;
    render(): import("lit").TemplateResult<1>;
}
export { SegmentedControl };
declare global {
    interface HTMLElementTagNameMap {
        [IGDS_TAGS.segmentedControl]: SegmentedControl;
    }
}

import { IGDS_SEGMENT_SIZE } from './constants';
export type SegmentDataContext = {
    selectedId?: string;
    disabled?: boolean;
    size?: `${IGDS_SEGMENT_SIZE}`;
    updateSelectedId: (selectedId: string | undefined, options?: {
        skipEvent?: boolean;
    }) => void;
    reportAboutTextSegment: (id: string, hasText: boolean) => void;
};
export declare const segmentContext: {
    __context__: SegmentDataContext;
};

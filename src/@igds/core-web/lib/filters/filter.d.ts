import { Option } from '../dropdown';
import { IGDS_FILTER_TYPE } from './constants';
export interface FilterHorizontal {
    type: `${IGDS_FILTER_TYPE}`;
    items: HorizontalFilterItem[];
}
export interface HorizontalFilterItem {
    id: string;
    label?: string;
    placeholder?: string;
    value?: string | boolean;
    options?: Option[];
}
export interface FilterVertical extends VerticalFilterItem {
    subLevel?: VerticalFilterItem[];
}
export interface VerticalFilterItem {
    id: string;
    label?: string;
    value?: boolean;
    count?: number;
    expanded?: boolean;
}

import { IGDS_BADGE_VARIANT } from '../../badge';
import { IGDS_CELL_TYPE } from '../constant';
export type TableCellDetails = TextCell | BadgeCell | LinkCell;
export type TextCell = {
    id?: string;
    type?: IGDS_CELL_TYPE.text;
    value: string;
};
export type BadgeCell = {
    id?: string;
    type: IGDS_CELL_TYPE.badge;
    label: string;
    variant: `${IGDS_BADGE_VARIANT}`;
};
export type LinkCell = {
    id?: string;
    type: IGDS_CELL_TYPE.link;
    label: string;
    url: string;
    title: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
    isEmitEvent?: boolean;
    disabled?: boolean;
};

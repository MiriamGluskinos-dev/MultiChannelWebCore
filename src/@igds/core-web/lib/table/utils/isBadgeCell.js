import { IGDS_CELL_TYPE } from '../constant';
export const isBadgeCell = (item) => {
    return item.type === IGDS_CELL_TYPE.badge;
};

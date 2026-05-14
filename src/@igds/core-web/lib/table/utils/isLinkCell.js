import { IGDS_CELL_TYPE } from '../constant';
export const isLinkCell = (item) => {
    return item.type === IGDS_CELL_TYPE.link;
};

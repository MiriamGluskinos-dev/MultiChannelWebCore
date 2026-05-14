import { IGDS_CELL_TYPE } from '../constant';
export const isTextCell = (item) => {
    return item.type === IGDS_CELL_TYPE.text || item.type === undefined;
};

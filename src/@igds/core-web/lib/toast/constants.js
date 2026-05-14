import { alertCircleFilled, infoFilled, successFilled, } from '@igds/icons';
export var IGDS_TOAST_TYPES;
(function (IGDS_TOAST_TYPES) {
    IGDS_TOAST_TYPES["floating"] = "floating";
    IGDS_TOAST_TYPES["inline"] = "inline";
})(IGDS_TOAST_TYPES || (IGDS_TOAST_TYPES = {}));
export var IGDS_TOAST_VARIANT;
(function (IGDS_TOAST_VARIANT) {
    IGDS_TOAST_VARIANT["attention"] = "attention";
    IGDS_TOAST_VARIANT["failure"] = "failure";
    IGDS_TOAST_VARIANT["info"] = "info";
    IGDS_TOAST_VARIANT["success"] = "success";
})(IGDS_TOAST_VARIANT || (IGDS_TOAST_VARIANT = {}));
export const IGDS_TOAST_ICONS = {
    [IGDS_TOAST_VARIANT.attention]: alertCircleFilled,
    [IGDS_TOAST_VARIANT.failure]: alertCircleFilled,
    [IGDS_TOAST_VARIANT.info]: infoFilled,
    [IGDS_TOAST_VARIANT.success]: successFilled,
};

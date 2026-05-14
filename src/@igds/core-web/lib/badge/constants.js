import { infoOutlined, inProgress, successFilled, alertCircleFailureFilled, block, } from '@igds/icons';
export var IGDS_BADGE_VARIANT;
(function (IGDS_BADGE_VARIANT) {
    IGDS_BADGE_VARIANT["default"] = "default";
    IGDS_BADGE_VARIANT["failure"] = "failure";
    IGDS_BADGE_VARIANT["inProgress"] = "in-progress";
    IGDS_BADGE_VARIANT["informative"] = "informative";
    IGDS_BADGE_VARIANT["success"] = "success";
    IGDS_BADGE_VARIANT["warning"] = "warning";
})(IGDS_BADGE_VARIANT || (IGDS_BADGE_VARIANT = {}));
export const IGDS_BADGE_ICONS = {
    [IGDS_BADGE_VARIANT.default]: null,
    [IGDS_BADGE_VARIANT.informative]: infoOutlined,
    [IGDS_BADGE_VARIANT.inProgress]: inProgress,
    [IGDS_BADGE_VARIANT.success]: successFilled,
    [IGDS_BADGE_VARIANT.warning]: alertCircleFailureFilled,
    [IGDS_BADGE_VARIANT.failure]: block,
};
export var IGDS_NOTIFICATION_BUTTON_SIZES;
(function (IGDS_NOTIFICATION_BUTTON_SIZES) {
    IGDS_NOTIFICATION_BUTTON_SIZES["large"] = "large";
    IGDS_NOTIFICATION_BUTTON_SIZES["medium"] = "medium";
    IGDS_NOTIFICATION_BUTTON_SIZES["small"] = "small";
})(IGDS_NOTIFICATION_BUTTON_SIZES || (IGDS_NOTIFICATION_BUTTON_SIZES = {}));
export var IGDS_NOTIFICATION_BUTTON_VARIANTS;
(function (IGDS_NOTIFICATION_BUTTON_VARIANTS) {
    IGDS_NOTIFICATION_BUTTON_VARIANTS["link"] = "link";
    IGDS_NOTIFICATION_BUTTON_VARIANTS["primary"] = "primary";
    IGDS_NOTIFICATION_BUTTON_VARIANTS["secondary"] = "secondary";
})(IGDS_NOTIFICATION_BUTTON_VARIANTS || (IGDS_NOTIFICATION_BUTTON_VARIANTS = {}));

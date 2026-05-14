import { cloudUpload, alertCircleOutlined, loader, successOutlined, } from '@igds/icons';
export var IGDS_FILE_UPLOADER_STATUS;
(function (IGDS_FILE_UPLOADER_STATUS) {
    IGDS_FILE_UPLOADER_STATUS["default"] = "default";
    IGDS_FILE_UPLOADER_STATUS["fail"] = "fail";
    IGDS_FILE_UPLOADER_STATUS["pending"] = "pending";
    IGDS_FILE_UPLOADER_STATUS["success"] = "success";
})(IGDS_FILE_UPLOADER_STATUS || (IGDS_FILE_UPLOADER_STATUS = {}));
export const IGDS_FILE_UPLOADER_ICONS = {
    [IGDS_FILE_UPLOADER_STATUS.default]: cloudUpload,
    [IGDS_FILE_UPLOADER_STATUS.fail]: alertCircleOutlined,
    [IGDS_FILE_UPLOADER_STATUS.pending]: loader,
    [IGDS_FILE_UPLOADER_STATUS.success]: successOutlined,
};

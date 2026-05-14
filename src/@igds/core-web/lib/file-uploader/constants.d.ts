export declare enum IGDS_FILE_UPLOADER_STATUS {
    default = "default",
    fail = "fail",
    pending = "pending",
    success = "success"
}
export declare const IGDS_FILE_UPLOADER_ICONS: Record<IGDS_FILE_UPLOADER_STATUS, string | null>;
export interface AddedFile {
    id: number;
    name: string;
    status: 'ready to upload' | 'wrong file format' | 'max file size exceeded';
    error?: string;
    file?: File;
}

interface ColumnDef {
    id: string;
    name: string;
}
export declare function useExportToCsv(): {
    exportToCSV: <T extends Record<string, any>>(rows: T[], columns: ColumnDef[], fileName?: string) => void;
};
export {};
//# sourceMappingURL=useExportToCsv.d.ts.map
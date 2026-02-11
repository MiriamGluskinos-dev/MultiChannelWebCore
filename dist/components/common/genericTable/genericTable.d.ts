import type { ColumnDef, TransactionRow } from "./genericTableTypes";
interface GenericTableProps {
    rowsData: TransactionRow[];
    columns: ColumnDef[];
    hasSearch?: boolean;
    onSendCurrentRows?: (rows: TransactionRow[]) => void;
}
declare const GenericTable: (props: GenericTableProps) => import("react/jsx-runtime").JSX.Element;
export default GenericTable;
//# sourceMappingURL=genericTable.d.ts.map
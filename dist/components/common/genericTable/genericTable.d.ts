import type { ColumnDef, TransactionRow } from "./genericTableTypes";
interface Props {
    rowsData: TransactionRow[];
    columns: ColumnDef[];
    onSendCurrentRows?: (rows: TransactionRow[]) => void;
}
export default function GenericTable(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=genericTable.d.ts.map
export interface ColumnDef {
    id: string;
    name: string;
    slotted?: boolean;
    sortable?: boolean;
    type?: "number" | "string" | "date" | "link" | "icon" | "amount" | "print";
    href?: string;
}
export interface TransactionRow {
    PaymentID: string;
    [key: string]: any;
}
//# sourceMappingURL=genericTableTypes.d.ts.map
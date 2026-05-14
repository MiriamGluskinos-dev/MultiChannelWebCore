import type { ReactNode } from "react";

export interface HeaderDef {
  id: string;
  name: string;
  slotted?: boolean; // האם העמודה מכילה תוכן מיוחד (כמו קישורים או כפתורים) שדורש טיפול שונה בעיצוב
  sortable?: boolean;
  type?: "number" | "string" | "date" | "link" | "icon" | "amount" | "print";
  href?: string; // רק עבור type "link"
  width?: number;
}

export interface TransactionRow {
  [key: string]: any;
  component?: ReactNode
}
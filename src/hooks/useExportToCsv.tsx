import { useCallback } from "react";

interface ColumnDef {
  id: string;
  name: string;
}

export function useExportToCsv() {
  const exportToCSV = useCallback(
    <T extends Record<string, any>>(
      rows: T[],
      columns: ColumnDef[],
      fileName = "table.csv"
    ) => {
      if (!rows.length) return;

      // Build header row
      const header = columns.map((col) => `"${col.name}"`).join(",");

      // Build data rows
      const csvRows = rows.map((row) =>
        columns
          .map((col) =>
            `"${String(row[col.id] ?? "").replace(/"/g, '""')}"`
          )
          .join(",")
      );

      const csvContent = [header, ...csvRows].join("\n");

      // Add UTF-8 BOM so Hebrew works in Excel
      const blob = new Blob(["\uFEFF" + csvContent], {
        type: "text/csv;charset=utf-8;",
      });

      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      link.click();

      URL.revokeObjectURL(url);
    },
    []
  );

  return { exportToCSV };
}

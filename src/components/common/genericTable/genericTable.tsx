import { useEffect, useState, useRef, useMemo } from "react";
import { Input, SearchField, Table, TableHeader, TableRow, Pagination, PaginationItem, Icon, TableCell } from "@igds/react";
import { useTranslation } from "../../../i18n/useTranslation";
import { useResponsiveColumns } from "../../../hooks/genericTable/useResponsiveColumns";
import { useNumberFormatter } from "../../../hooks/genericTable/useNumberFormatter";
import type { ColumnDef, TransactionRow } from "./genericTableTypes";
import styles from "./genericTable.module.scss";

interface GenericTableProps {
    rowsData: TransactionRow[];
    columns: ColumnDef[];
    hasSearch?: boolean;
    onSendCurrentRows?: (rows: TransactionRow[]) => void;
}

const GenericTable = (props: GenericTableProps) => {
    const { rowsData, columns, hasSearch = false, onSendCurrentRows } = props;
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchText, setSearchText] = useState("");
    const { formatNumberWithCommas } = useNumberFormatter();
    const { containerRef, visible, hidden } = useResponsiveColumns(columns);
    const { t } = useTranslation();
    const paginationRef = useRef<any>(null);
    const formatDate = (date: string) => date ? new Date(date).toLocaleDateString("he-IL") : "";
    const formatCellValue = (colId: string, value: any, type?: string): string | TableCell => {
        if (value == null) return "";

        switch (type) {
            case "date":
                return formatDate(value as string);
            case "amount":
                return formatNumberWithCommas(value as number, true);
            case "print":
                return;
            case "link":
                return;
            default:
                return String(value);
        }
    };

    const renderCellContent = (col: ColumnDef, row: TransactionRow) => {
        const value = row[col.id as keyof TransactionRow];

        if (col.type === "link") {
            return <a href={col.href || "/"} style={{ color: 'var(--igds-primary-color)' }}>{String(value)}</a>;
        }
        else if (col.type === "print") {
            return (
                <a href={col.href || "/"} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--igds-primary-color)', display: 'inline-flex', alignItems: 'center' }}>
                    <Icon name="file" />
                </a>
            );
        }
        return formatCellValue(col.id, value, col.type);
    };

    const filteredRows = useMemo(() => {
        if (!searchText) return rowsData;
        const search = searchText.toLowerCase();
        return rowsData.filter(row => Object.values(row).some(val => String(val).toLowerCase().includes(search)));
    }, [searchText, rowsData]);

    const totalPages = Math.ceil(filteredRows.length / rowsPerPage);

    const currentRows = useMemo(() => {
        const start = (currentPage - 1) * rowsPerPage;
        return filteredRows.slice(start, start + rowsPerPage);
    }, [currentPage, rowsPerPage, filteredRows]);

    useEffect(() => {
        if (props.onSendCurrentRows) {
            props.onSendCurrentRows(currentRows);
        }
    }, [currentRows, props]);

    useEffect(() => {
        const el = paginationRef.current;
        const handlePageChange = (e: any) => {
            const newPageValue = e.detail?.value;
            if (newPageValue) setCurrentPage(parseInt(newPageValue, 10));
        };
        el?.addEventListener('igds-change', handlePageChange);
        return () => el?.removeEventListener('igds-change', handlePageChange);
    }, [totalPages]);

    const handleRowsNumChange = (val: string) => {
        if (val === "") { setRowsPerPage(10); return; }
        let value = Number(val);
        if (value < 1) value = 1;
        if (value > 1000) value = 1000;
        setRowsPerPage(value);
        setCurrentPage(1);
    };

    return (
        <div className={styles.table__box} ref={containerRef} dir="rtl">
            {hasSearch && <div className={styles.searchBox}>
                <SearchField dir="rtl" value={searchText} placeholder={t("Search")} withoutSuggestions
                    onIgdsInput={(e: any) => { setSearchText(e.target.value); setCurrentPage(1); }}
                    onInputClear={() => { setSearchText(""); setCurrentPage(1); }} />
            </div>}
            <Table>
                <TableHeader columns={visible} />
                {currentRows.length > 0 ? currentRows.map((row, index) => (
                    <TableRow
                        key={row.PaymentID || index}
                        expanded={hidden.length > 0}
                        cells={visible.map(col => col.slotted !== true ? ({
                            value: renderCellContent(col, row),
                        }) : null).filter(Boolean) as any}
                    >
                        {visible.map(col => col.slotted === true && (
                            <TableCell key={col.id}>
                                {renderCellContent(col, row)}
                            </TableCell>
                        ))}
                        {hidden.length > 0 && (
                            <div className={styles.expandGridContainer} style={{ display: 'grid', gridTemplateColumns: `repeat(${visible.length}, 1fr)`, gap: '2rem', padding: '1rem', direction: 'rtl' }}>
                                {hidden.map(col => (
                                    <div key={col.id} style={{ display: 'flex', flexDirection: 'column' }}>
                                        <span style={{ fontSize: '0.8rem', color: 'var(--igds-light-ref-dawn-blue-800)', marginBottom: '4px' }}>
                                            {col.name}
                                        </span>
                                        <span style={{ fontWeight: 'bold', fontSize: '1rem' }}>
                                            {/* כאן הקסם: משתמשים באותה פונקציה שמרנדרת גם אייקונים/לינקים */}
                                            {renderCellContent(col, row)}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </TableRow>
                    {
                        row.component &&
                            <div className={styles.expandWrapper} style={{ width: "100%", display: "block", marginTop: "0.5rem" }}>
                                {row.component}
                            </div>
                    }
                )) : <TableRow cells={[{ value: t("noResultsFound") || "לא נמצאו תוצאות לחיפוש זה" }]} />}
            </Table>
            <div className={styles.flexVision} style={{ marginTop: '24px' }}>
                <p>{filteredRows.length > 0 ? t('showingItems', { start: (currentPage - 1) * rowsPerPage + 1, end: Math.min(currentPage * rowsPerPage, filteredRows.length), total: filteredRows.length }) : t('noItemsToShow') || "אין פריטים להצגה"}</p>
                <section className={styles.flexVisionIn}>
                    <Input type="number" value={rowsPerPage || ""} label={t("rowsPerPage")} min={1} max={1000} onChange={(e: any) => handleRowsNumChange(e.target.value)} />
                    {totalPages > 1 && (
                        <Pagination ref={paginationRef} current={currentPage} variant="numbered">
                            {Array.from({ length: totalPages }, (_, i) => (<PaginationItem key={i + 1} href={`#${i + 1}`} />))}
                        </Pagination>)}
                </section>
            </div>
        </div>
    );
}
export default GenericTable;
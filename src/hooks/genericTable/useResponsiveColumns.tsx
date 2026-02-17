import { useLayoutEffect, useRef, useState } from "react";
import type { ColumnDef } from "../../components/common/genericTable/genericTableTypes";

export function useResponsiveColumns(columns: ColumnDef[], enabled: boolean = true) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState<ColumnDef[]>(columns);
    const [hidden, setHidden] = useState<ColumnDef[]>([]);
    const recalc = () => {
        if (!containerRef.current) return;

        const width = containerRef.current.offsetWidth;
        let used = 60; // base padding/margin
        const v: ColumnDef[] = [];
        const h: ColumnDef[] = [];

        for (const col of columns) {
            const colWidth = 128; // fixed column width
            if (used + colWidth <= width) {
                v.push(col);
                used += colWidth;
            } else {
                h.push(col);
            }
        }

        setVisible(v);
        setHidden(h);
    };

    useLayoutEffect(() => {
        if (!enabled) return;

        // Initial calculation
        recalc();

        // Resize listener
        const handleResize = () => requestAnimationFrame(recalc);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [columns, enabled]);

    return { containerRef, visible, hidden };
}

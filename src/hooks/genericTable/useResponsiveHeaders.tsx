import { useLayoutEffect, useRef, useState } from "react";
import type { HeaderDef } from "../../components/common/genericTable/genericTableTypes";

export function useResponsiveHeaders(headers: HeaderDef[], enabled: boolean = true) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState<HeaderDef[]>(headers);
    const [hidden, setHidden] = useState<HeaderDef[]>([]);
    const recalc = () => {
        if (!containerRef.current) return;

        const width = containerRef.current.offsetWidth;
        let used = 60; // base padding/margin
        const v: HeaderDef[] = [];
        const h: HeaderDef[] = [];

        for (const header of headers) {
            const headerWidth = header.width || 128; // fixed header width
            if (used + headerWidth <= width) {
                v.push(header);
                used += headerWidth;
            } else {
                h.push(header);
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
    }, [headers, enabled]);

    return { containerRef, visible, hidden };
}

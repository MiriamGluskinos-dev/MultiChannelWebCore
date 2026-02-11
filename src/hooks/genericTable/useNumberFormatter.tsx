import { useCallback } from "react";

export function useNumberFormatter() {
    const formatNumberWithCommas = useCallback(
        (num: number | string, shekelSign: boolean = false): string => {
            if (num === null || num === undefined || isNaN(Number(num))) return "";

            const formatted = Number(num).toLocaleString("en-US", {
                maximumFractionDigits: 0
            });

            return shekelSign ? `₪${formatted}` : formatted;
        },
        []
    );

    return { formatNumberWithCommas };
}

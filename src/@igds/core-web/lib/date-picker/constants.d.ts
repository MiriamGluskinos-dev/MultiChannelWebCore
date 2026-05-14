export declare enum IGDS_WEEK_DAYS_SHORTCUTS {
    sunday = "\u05D0\u05F3",
    monday = "\u05D1\u05F3",
    tuesday = "\u05D2\u05F3",
    wednesday = "\u05D3\u05F3",
    thursday = "\u05D4\u05F3",
    friday = "\u05D5\u05F3",
    saturday = "\u05E9\u05F3"
}
export declare enum IGDS_MONTHS {
    january = "\u05D9\u05E0\u05D5\u05D0\u05E8",
    february = "\u05E4\u05D1\u05E8\u05D5\u05D0\u05E8",
    march = "\u05DE\u05E8\u05E5",
    april = "\u05D0\u05E4\u05E8\u05D9\u05DC",
    may = "\u05DE\u05D0\u05D9",
    june = "\u05D9\u05D5\u05E0\u05D9",
    july = "\u05D9\u05D5\u05DC\u05D9",
    august = "\u05D0\u05D5\u05D2\u05D5\u05E1\u05D8",
    september = "\u05E1\u05E4\u05D8\u05DE\u05D1\u05E8",
    october = "\u05D0\u05D5\u05E7\u05D8\u05D5\u05D1\u05E8",
    november = "\u05E0\u05D5\u05D1\u05DE\u05D1\u05E8",
    december = "\u05D3\u05E6\u05DE\u05D1\u05E8"
}
export declare enum IGDS_DATE_MODE {
    date = "date",
    month = "month",
    year = "year"
}
export declare enum IGDS_START_WEEK_ON {
    sunday = "sunday",
    monday = "monday"
}
export type Day = {
    day: number;
    isCurrentMonth: boolean;
    disabled: boolean;
};
export declare const START_YEAR_FOR_YEAR_RANGE_GENERATION = 2016;
export declare const YEARS_COUNT_TO_DISPLAY = 20;
export declare const DATE_PICKER_DELAY_BEFORE_RECALCULATE_POPUP_POSITION = 100;
export declare const REGULAR_EXPRESSION_FOR_DATE_VALIDATION: RegExp;
export declare const REGULAR_EXPRESSION_FORM_MONTH_YEAR_VALIDATION: RegExp;

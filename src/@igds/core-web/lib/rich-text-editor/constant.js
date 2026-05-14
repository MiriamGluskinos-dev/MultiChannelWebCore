export var IGDS_TOOLBAR_COMMAND;
(function (IGDS_TOOLBAR_COMMAND) {
    IGDS_TOOLBAR_COMMAND["bold"] = "bold";
    IGDS_TOOLBAR_COMMAND["indentDecrease"] = "indent-";
    IGDS_TOOLBAR_COMMAND["indentIncrease"] = "indent+";
    IGDS_TOOLBAR_COMMAND["italic"] = "italic";
    IGDS_TOOLBAR_COMMAND["ltr"] = "ltr";
    IGDS_TOOLBAR_COMMAND["orderedList"] = "list";
    IGDS_TOOLBAR_COMMAND["rtl"] = "rtl";
    IGDS_TOOLBAR_COMMAND["strike"] = "strike";
    IGDS_TOOLBAR_COMMAND["underline"] = "underline";
    IGDS_TOOLBAR_COMMAND["unorderedList"] = "ulist";
})(IGDS_TOOLBAR_COMMAND || (IGDS_TOOLBAR_COMMAND = {}));
export const IGDS_TOOLBAR_DEFAULT_LABEL = {
    [IGDS_TOOLBAR_COMMAND.bold]: 'הדגשת טקסט',
    [IGDS_TOOLBAR_COMMAND.indentDecrease]: 'הקטנת כניסה',
    [IGDS_TOOLBAR_COMMAND.indentIncrease]: 'הגדלת כניסה',
    [IGDS_TOOLBAR_COMMAND.italic]: 'להפוך את הטקסט לנטוי',
    [IGDS_TOOLBAR_COMMAND.orderedList]: 'להפוך לרשימה מסודרת',
    [IGDS_TOOLBAR_COMMAND.strike]: 'הוסף קו',
    [IGDS_TOOLBAR_COMMAND.underline]: 'הוסף קו תחתון',
    [IGDS_TOOLBAR_COMMAND.unorderedList]: 'להפוך לרשימה לא מסודרת',
    [IGDS_TOOLBAR_COMMAND.ltr]: 'כיוון טקסט: LTR',
    [IGDS_TOOLBAR_COMMAND.rtl]: 'כיוון טקסט: RTL',
};

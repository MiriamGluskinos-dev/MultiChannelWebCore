import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./fieldsGrid.scss";
const FieldsGrid = ({ fields }) => {
    return (_jsx("div", { className: "fields-grid", children: fields.map((field, index) => (_jsxs("div", { className: "field-item", children: [_jsx("p", { className: "field-label", children: field.label }), _jsx("p", { className: `field-value strong ${field.statusColor}`, children: field.value })] }, index))) }));
};
export default FieldsGrid;

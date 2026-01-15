import { jsx as _jsx } from "react/jsx-runtime";
export const Button = ({ children }) => {
    return (_jsx("button", { style: {
            padding: '8px 16px',
            background: '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
        }, children: children }));
};

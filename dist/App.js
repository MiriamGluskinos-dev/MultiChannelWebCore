import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import './i18n/config';
import MainSearchContainer from './ui/MainSearchContainer/MainSearchContainer';
import { useApiRequest } from './api';
import { RootLayout } from './ui';
import './App.css';
const App = () => {
    const res = useApiRequest({
        url: '/messages/morning',
        method: 'GET',
    });
    useEffect(() => {
        console.log('PAGE: API response:', res);
    }, [res]);
    return (_jsxs(RootLayout, { children: [_jsx("h3", { children: "Shared Core Playground" }), _jsx(MainSearchContainer, { pageTitle: ':\u05E9\u05D0\u05D9\u05DC\u05EA\u05EA \u05D4\u05D5\u05D3\u05E2\u05D5\u05EA \u05D1\u05D5\u05E7\u05E8', infoText: "\u05D4\u05E1\u05D1\u05E8 \u05DC\u05E9\u05D0\u05D9\u05DC\u05EA\u05D4", hasSearchButton: true, hasClearButton: true, children: _jsx("div", { children: "I'm the content" }) })] }));
};
export default App;

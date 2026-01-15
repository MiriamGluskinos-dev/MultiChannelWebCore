import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Toast } from '@igds/react';
import Title from '../common/title/Title';
import Link from '../common/link/link';
import SearchContainer from './SearchContainer/SearchContainer';
import { useTranslation } from 'react-i18next';
import './MainSearchContainer.module.scss';
const MainSearchContainer = (props) => {
    const { infoText, pageTitle, hasSearchButton, hasClearButton, onSearch, onClear } = props;
    const [showInfo, setShowInfo] = useState(false);
    const { t } = useTranslation();
    return (_jsxs("div", { className: 'mainSearchContainer', children: [_jsx(Title, { title: pageTitle, subTitle: '' }), _jsxs("div", { className: 'mainSearchInfoLink', children: [_jsx(Link, { onClick: () => setShowInfo(!showInfo), text: t('queryExplanation') }), showInfo && _jsx(Toast, { className: 'mainSearchToast', children: infoText })] }), _jsx(SearchContainer, { hasSearchButton: hasSearchButton, hasClearButton: hasClearButton, onSearch: onSearch, onClear: onClear, children: props.children })] }));
};
export default MainSearchContainer;

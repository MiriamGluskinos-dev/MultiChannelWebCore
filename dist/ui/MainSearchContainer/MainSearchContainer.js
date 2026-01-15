import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Toast } from '@igds/react';
import Title from '../common/title/Title';
import Link from '../common/link/link';
import SearchContainer from './SearchContainer/SearchContainer';
import { useTranslation } from 'react-i18next';
import styles from './MainSearchContainer.module.scss';
const MainSearchContainer = (props) => {
    const { infoText, pageTitle, hasSearchButton, hasClearButton, onSearch, onClear } = props;
    const [showInfo, setShowInfo] = useState(false);
    const { t } = useTranslation();
    return (_jsxs("div", { className: styles.mainSearchContainer, children: [_jsx(Title, { title: pageTitle, subTitle: '' }), infoText && _jsxs("div", { className: styles.mainSearchInfoLink, children: [_jsx(Link, { onClick: () => setShowInfo(!showInfo), text: t('queryExplanation') }), showInfo && _jsx(Toast, { className: styles.mainSearchToast, children: infoText })] }), props.children && _jsx(SearchContainer, { hasSearchButton: hasSearchButton, hasClearButton: hasClearButton, onSearch: onSearch, onClear: onClear, children: props.children })] }));
};
export default MainSearchContainer;

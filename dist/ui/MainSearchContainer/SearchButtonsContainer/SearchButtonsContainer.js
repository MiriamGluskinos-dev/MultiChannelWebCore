import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Icon } from '@igds/react';
import { useTranslation } from 'react-i18next';
import styles from './SearchButtonsContainer.module.scss';
const SearchButtonsContainer = (props) => {
    const { hasSearchButton, hasClearButton, onSearch, onClear } = props;
    const { t } = useTranslation();
    return (_jsxs("div", { className: styles.searchButtonsContainer, children: [hasSearchButton && _jsx(Button, { label: 'Search', icon: _jsx(Icon, { name: "search" }), onClick: onSearch, children: t('Search') }), hasClearButton && _jsx(Button, { label: 'Clear', icon: _jsx(Icon, { name: "close" }), onClick: onClear, children: t("Clear") })] }));
};
export default SearchButtonsContainer;

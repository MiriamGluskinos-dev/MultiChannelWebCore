import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './SearchContainer.module.scss';
import SearchButtonsContainer from '../SearchButtonsContainer/SearchButtonsContainer';
const SearchButtons = (props) => {
    const { hasSearchButton, hasClearButton, onSearch, onClear } = props;
    return (_jsxs("div", { className: styles.searchContainer, children: [_jsx("div", { className: styles.searchContent, children: props.children }), _jsx(SearchButtonsContainer, { hasSearchButton: hasSearchButton, hasClearButton: hasClearButton, onSearch: onSearch, onClear: onClear })] }));
};
export default SearchButtons;

import { type FC } from 'react';
export interface SearchButtonsContainerProps {
    hasSearchButton?: boolean;
    hasClearButton?: boolean;
    isSearchDisabled?: boolean;
    isClearDisabled?: boolean;
    onSearch?: () => void;
    onClear?: () => void;
}
declare const SearchButtonsContainer: FC<SearchButtonsContainerProps>;
export default SearchButtonsContainer;
//# sourceMappingURL=SearchButtonsContainer.d.ts.map
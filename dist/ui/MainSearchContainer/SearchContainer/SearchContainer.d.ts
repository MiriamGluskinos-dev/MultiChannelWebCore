import { type FC, type ReactNode } from 'react';
interface SearchContainerProps {
    children: ReactNode;
    hasSearchButton?: boolean;
    hasClearButton?: boolean;
    onSearch?: () => void;
    onClear?: () => void;
}
declare const SearchButtons: FC<SearchContainerProps>;
export default SearchButtons;
//# sourceMappingURL=SearchContainer.d.ts.map
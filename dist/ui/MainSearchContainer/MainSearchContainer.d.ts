import { type FC, type ReactNode } from 'react';
interface MainSearchContainerProps {
    children?: ReactNode;
    pageTitle: string;
    infoText?: string;
    hasSearchButton?: boolean;
    hasClearButton?: boolean;
    onSearch?: () => void;
    onClear?: () => void;
}
declare const MainSearchContainer: FC<MainSearchContainerProps>;
export default MainSearchContainer;
//# sourceMappingURL=MainSearchContainer.d.ts.map
import { type FC, type ReactNode } from 'react';
import './MainSearchContainer.module.scss';
interface MainSearchContainerProps {
    children: ReactNode;
    infoText: string;
    pageTitle: string;
    hasSearchButton?: boolean;
    hasClearButton?: boolean;
    onSearch?: () => void;
    onClear?: () => void;
}
declare const MainSearchContainer: FC<MainSearchContainerProps>;
export default MainSearchContainer;
//# sourceMappingURL=MainSearchContainer.d.ts.map
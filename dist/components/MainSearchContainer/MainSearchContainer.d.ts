import { type FC, type ReactNode } from 'react';
import type { SearchButtonsContainerProps } from './SearchButtonsContainer/SearchButtonsContainer';
import type { QueryInfoProps } from '../common/toastInfo/toastInfo';
interface MainSearchContainerProps {
    children?: ReactNode;
    pageTitle: string;
    info?: QueryInfoProps;
    buttonsProps?: SearchButtonsContainerProps;
}
declare const MainSearchContainer: FC<MainSearchContainerProps>;
export default MainSearchContainer;
//# sourceMappingURL=MainSearchContainer.d.ts.map
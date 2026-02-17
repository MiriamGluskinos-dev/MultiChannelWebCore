import { type FC, type ReactNode} from 'react'
import Title from '../common/title/title';
import SearchContainer from './SearchContainer/SearchContainer';
import ToastInfo from '../common/toastInfo/toastInfo';
import styles from './MainSearchContainer.module.scss';
import type { SearchButtonsContainerProps } from './SearchButtonsContainer/SearchButtonsContainer';
import type { QueryInfoProps } from '../common/toastInfo/toastInfo';

interface MainSearchContainerProps {
  children?: ReactNode;
  pageTitle: string;
  info?: QueryInfoProps;
  buttonsProps?: SearchButtonsContainerProps;
}

const MainSearchContainer: FC<MainSearchContainerProps> = (props: MainSearchContainerProps) => {
  const { info, pageTitle, buttonsProps } = props;

  return (
    <div className={styles.mainSearchContainer}>
      <Title title={pageTitle} subTitle='' />
      {info?.infoContent &&
        <ToastInfo infoTitle={info.infoTitle} infoContent={info.infoContent} />}
      {props.children &&
        <SearchContainer buttonsProps={buttonsProps}>
          {props.children}
        </SearchContainer>}
    </div>
  )
}

export default MainSearchContainer;

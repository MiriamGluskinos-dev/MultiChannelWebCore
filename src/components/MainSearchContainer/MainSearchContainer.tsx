import { type FC, type ReactNode, useState } from 'react'
import { Toast } from '@igds/react';
import Title from '../common/title/title';
import Link from '../common/link/link';
import SearchContainer from './SearchContainer/SearchContainer';
import { useTranslation } from 'react-i18next';
import styles from './MainSearchContainer.module.scss';
import type { SearchButtonsContainerProps } from './SearchButtonsContainer/SearchButtonsContainer';

interface MainSearchContainerProps {
  children?: ReactNode;
  pageTitle: string;
  infoText?: string;
  buttonsProps?: SearchButtonsContainerProps;
}

const MainSearchContainer: FC<MainSearchContainerProps> = (props: MainSearchContainerProps) => {
  const { infoText, pageTitle, buttonsProps } = props;
  const [showInfo, setShowInfo] = useState(false);
  const { t } = useTranslation();

  return (
    <div className={styles.mainSearchContainer}>
      <Title title={pageTitle} subTitle='' />
      {infoText && <div className={styles.mainSearchInfoLink}>
        <Link onClick={() => setShowInfo(!showInfo)} text={t('queryExplanation')} />
        {showInfo && <Toast className={styles.mainSearchToast}>{infoText}</Toast>}
      </div>}
      {props.children &&
        <SearchContainer buttonsProps={buttonsProps}>
          {props.children}
        </SearchContainer>}
    </div>
  )
}

export default MainSearchContainer;

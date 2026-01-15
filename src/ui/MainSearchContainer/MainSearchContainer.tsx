import { type FC, type ReactNode, useState } from 'react'
import { Toast } from '@igds/react';
import Title from '../common/title/Title';
import Link from '../common/link/link';
import SearchContainer from './SearchContainer/SearchContainer';
import { useTranslation } from 'react-i18next';
import './MainSearchContainer.module.scss';

interface MainSearchContainerProps {
  children: ReactNode;
  pageTitle: string;
  infoText?: string;
  hasSearchButton?: boolean;
  hasClearButton?: boolean;
  onSearch?: () => void;
  onClear?: () => void;
}

const MainSearchContainer: FC<MainSearchContainerProps> = (props: MainSearchContainerProps) => {
  const { infoText, pageTitle, hasSearchButton, hasClearButton, onSearch, onClear } = props;
  const [showInfo, setShowInfo] = useState(false);
  const { t } = useTranslation();

  return (
    <div className='mainSearchContainer'>
      <Title title={pageTitle} subTitle='' />
      {infoText && <div className='mainSearchInfoLink'>
        <Link onClick={() => setShowInfo(!showInfo)} text={t('queryExplanation')} />
        {showInfo && <Toast className='mainSearchToast'>{infoText}</Toast>}
      </div>}
      {props.children && <SearchContainer hasSearchButton={hasSearchButton} hasClearButton={hasClearButton} onSearch={onSearch} onClear={onClear}>
        {props.children}
      </SearchContainer>}
    </div>
  )
}

export default MainSearchContainer;

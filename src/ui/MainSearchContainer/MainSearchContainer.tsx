import { type FC, type ReactNode, useState } from 'react'
import { Toast } from '@igds/react';
import Title from '../common/title/Title';
import Link from '../common/link/link';
import SearchContainer from './SearchContainer/SearchContainer';
import './MainSearchContainer.modules.scss';

interface MainSearchContainerProps {
  children: ReactNode;
  infoText: string;
  pageTitle: string;
  hasSearchButton?: boolean;
  hasClearButton?: boolean;
  onSearch?: () => void;
  onClear?: () => void;
}

const MainSearchContainer: FC<MainSearchContainerProps> = (props: MainSearchContainerProps) => {
  const { infoText, pageTitle, hasSearchButton, hasClearButton, onSearch, onClear } = props;
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className='mainSearchContainer'>
      <Title title={pageTitle} subTitle='' />
      <div className='mainSearchInfoLink'>
        <Link onClick={() => setShowInfo(!showInfo)} text='הסבר לשאילתה' />
        {showInfo && <Toast className='mainSearchToast'>{infoText}</Toast>}
      </div>
      <SearchContainer hasSearchButton={hasSearchButton} hasClearButton={hasClearButton} onSearch={onSearch} onClear={onClear}>
        {props.children}
      </SearchContainer>
    </div>
  )
}

export default MainSearchContainer;

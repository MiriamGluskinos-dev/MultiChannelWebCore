import { type FC, type ReactNode } from 'react'
import { Toast } from '@igds/react';
import Title from '../common/title/Title';
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

  return (
    <div className='mainSearchContainer'>
      <Toast className='mainSearchToast'>{infoText}</Toast>
      <Title title={pageTitle} subTitle='' />
      <SearchContainer hasSearchButton={hasSearchButton} hasClearButton={hasClearButton} onSearch={onSearch} onClear={onClear}>
        {props.children}
      </SearchContainer>
    </div>
  )
}

export default MainSearchContainer;

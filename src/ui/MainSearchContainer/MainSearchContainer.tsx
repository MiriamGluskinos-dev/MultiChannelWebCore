import { type FC, type ReactNode } from 'react'
import { Banner } from '@igds/react';
import Title from '../common/title/Title';
import SearchContainer from './SearchContainer/SearchContainer';
import './MainSearchContainer.modules.scss';

interface MainSearchContainerProps {
  children: ReactNode;
  infoText: string;
  pageTitle: string;
  hasSearchButton?: boolean;
  hasClearButton?: boolean;
}

const MainSearchContainer: FC<MainSearchContainerProps> = (props: MainSearchContainerProps) => {
  const { infoText, pageTitle, hasSearchButton, hasClearButton } = props;
  return (
    <div className='mainSearchContainer'>
      <Banner description={infoText}></Banner>
      <Title title={pageTitle} subTitle='' />
      <SearchContainer hasSearchButton={hasSearchButton} hasClearButton={hasClearButton}>
        {props.children}
      </SearchContainer>
    </div>
  )
}

export default MainSearchContainer;

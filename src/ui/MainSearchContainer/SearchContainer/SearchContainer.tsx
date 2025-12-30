import { type FC, type ReactNode } from 'react'
import './SearchContainer.modules.scss';
import SearchButtonsContainer from '../SearchButtonsContainer/SearchButtonsContainer';

interface SearchContainerProps {
  children: ReactNode;
  hasSearchButton?: boolean;
  hasClearButton?: boolean;
}


const SearchButtons: FC<SearchContainerProps> = (props: SearchContainerProps) => {
  const { hasSearchButton, hasClearButton } = props;

  return (
    <div className='searchContainer'>
      <div className='searchContent'>
        {props.children}
      </div>
      <SearchButtonsContainer hasSearchButton={hasSearchButton} hasClearButton={hasClearButton} />
    </div>
  )
}

export default SearchButtons;

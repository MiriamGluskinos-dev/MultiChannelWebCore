import { type FC, type ReactNode } from 'react'
import './SearchContainer.modules.scss';
import SearchButtonsContainer from '../SearchButtonsContainer/SearchButtonsContainer';

interface SearchContainerProps {
  children: ReactNode;
  hasSearchButton?: boolean;
  hasClearButton?: boolean;
  onSearch?: () => void;
  onClear?: () => void; 
}


const SearchButtons: FC<SearchContainerProps> = (props: SearchContainerProps) => {
  const { hasSearchButton, hasClearButton, onSearch, onClear } = props;

  return (
    <div className='searchContainer'>
      <div className='searchContent'>
        {props.children}
      </div>
      <SearchButtonsContainer hasSearchButton={hasSearchButton} hasClearButton={hasClearButton} onSearch={onSearch} onClear={onClear}/>
    </div>
  )
}

export default SearchButtons;

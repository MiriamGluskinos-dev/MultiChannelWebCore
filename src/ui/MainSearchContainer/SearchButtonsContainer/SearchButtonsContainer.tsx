import { type FC } from 'react'
import { Button } from '@igds/react';
import './SearchButtonsContainer.modules.scss';

interface SearchButtonsContainerProps {
  hasSearchButton?: boolean;
  hasClearButton?: boolean;
}

const SearchButtonsContainer: FC<SearchButtonsContainerProps> = (props: SearchButtonsContainerProps) => {
  const { hasSearchButton, hasClearButton } = props;

  return (
    <div className='searchButtonsContainer'>
      {hasSearchButton && <Button label='Search' >Search</Button>}
      {hasClearButton && <Button label='Clear'>Clear</Button>}
    </div>
  )
}

export default SearchButtonsContainer;

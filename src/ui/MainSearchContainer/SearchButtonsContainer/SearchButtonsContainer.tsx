import { type FC } from 'react'
import { Button, Icon } from '@igds/react';
import './SearchButtonsContainer.modules.scss';

interface SearchButtonsContainerProps {
  hasSearchButton?: boolean;
  hasClearButton?: boolean;
}

const SearchButtonsContainer: FC<SearchButtonsContainerProps> = (props: SearchButtonsContainerProps) => {
  const { hasSearchButton, hasClearButton } = props;

  return (
    <div className='searchButtonsContainer'>
      {hasSearchButton && <Button label='Search' icon={<Icon name="search" />}>חיפוש</Button>}
      {hasClearButton && <Button label='Clear' icon={<Icon name="close" />}>נקה</Button>}
    </div>
  )
}

export default SearchButtonsContainer;

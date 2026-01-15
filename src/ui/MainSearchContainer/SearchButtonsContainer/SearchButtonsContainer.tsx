import { type FC } from 'react'
import { Button, Icon } from '@igds/react';
import { useTranslation } from 'react-i18next';
import './SearchButtonsContainer.module.scss';

interface SearchButtonsContainerProps {
  hasSearchButton?: boolean;
  hasClearButton?: boolean;
  onSearch?: () => void;
  onClear?: () => void; 
}

const SearchButtonsContainer: FC<SearchButtonsContainerProps> = (props: SearchButtonsContainerProps) => {
  const { hasSearchButton, hasClearButton, onSearch, onClear } = props;
  const { t } = useTranslation();
  
  return (
    <div className='searchButtonsContainer'>
      {hasSearchButton && <Button label='Search' icon={<Icon name="search" />} onClick={onSearch}>{t('Search')}</Button>}
      {hasClearButton && <Button label='Clear' icon={<Icon name="close" />} onClick={onClear}>{t("Clear")}</Button>}
    </div>
  )
}

export default SearchButtonsContainer;

import { type FC } from 'react'
import { Button, Icon } from '@igds/react';
import { useTranslation } from 'react-i18next';
import styles from './SearchButtonsContainer.module.scss';

export interface SearchButtonsContainerProps {
  hasSearchButton?: boolean;
  hasClearButton?: boolean;
  isSearchDisabled?: boolean;
  isClearDisabled?: boolean;
  onSearch?: () => void;
  onClear?: () => void;
}

const SearchButtonsContainer: FC<SearchButtonsContainerProps> = (props: SearchButtonsContainerProps) => {
  const { hasSearchButton, hasClearButton, isSearchDisabled, isClearDisabled, onSearch, onClear } = props;
  const { t } = useTranslation();

  return (
    <div className={styles.searchButtonsContainer}>
      {hasSearchButton && <Button
        label='Search'
        icon={<Icon name="search" />}
        onClick={onSearch}
        disabled={isSearchDisabled}>
        {t('Search')}
      </Button>}

      {hasClearButton && <Button label='Clear'
        icon={<Icon name="close" />}
        onClick={onClear}
        disabled={isClearDisabled}>
        {t("Clear")}
      </Button>}
    </div>
  )
}

export default SearchButtonsContainer;

import { type FC, type ReactNode } from 'react'
import styles from './SearchContainer.module.scss';
import SearchButtonsContainer, { type SearchButtonsContainerProps } from '../SearchButtonsContainer/SearchButtonsContainer';

interface SearchContainerProps {
  children: ReactNode;
  buttonsProps?: SearchButtonsContainerProps;
}


const SearchButtons: FC<SearchContainerProps> = (props: SearchContainerProps) => {
  const { buttonsProps } = props;

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchContent}>
        {props.children}
      </div>
      {buttonsProps && <SearchButtonsContainer {...buttonsProps} />}
    </div>
  )
}

export default SearchButtons;

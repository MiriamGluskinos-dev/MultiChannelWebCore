import { type FC, type PropsWithChildren } from 'react'
import './SearchContainer.scss';

const SearchButtons: FC<PropsWithChildren> = (props) => {
  return (
    <div className='searchContainer'>
      {props.children}
    </div>
  )
}

export default SearchButtons;

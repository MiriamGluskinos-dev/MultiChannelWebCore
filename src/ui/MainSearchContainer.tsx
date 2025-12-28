import { type FC, type ReactNode } from 'react'
// import { Button } from 'shared-core';
import { Button, Banner, FileUploader , Checkbox} from '@igds/react';

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
      <Banner title={infoText}></Banner>
      <h1>{pageTitle}</h1>
      {props.children}
      {hasSearchButton && <Button variant="primary" size="medium" label='Search' >Search</Button>}
      {hasClearButton && <Button label='Clear'>Clear</Button>}
            <FileUploader id='klkl' onChange={()=>{}}></FileUploader>
            <Checkbox label='checkbox 1' onChange={()=>{}}></Checkbox>

    </div>
  )
}

export default MainSearchContainer;

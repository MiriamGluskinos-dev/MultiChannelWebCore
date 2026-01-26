import { useEffect, useState } from 'react';
import { RootLayout, MainSearchContainer } from '../../src/components';
import { useApiRequest, useSystemTableApiRequest } from '../../src/api';
import { Button } from '@igds/react';
import '../i18n/index.ts';
import './App.css';

const App = () => {
  const [click, setClick] = useState(false)

  const { response } = useSystemTableApiRequest({
    tableName: 'CargoIdentifierType',
  });

  useEffect(() => {
    if (response) {
      console.log('PAGE: System Table data:', response.data);
    }
  }, [response.data]);

  const { response: res, refetch } = useApiRequest({
    url: '/shaarolami/CustomspilotWeb/SystemTables/api/GetTableData?tableName=CargoIdentifierType',
    method: 'GET',
    // mock: true,
    data:{
      color: 'green',
      font: '15'
    },
    auto: false
  });

  useEffect(() => {
    console.log('no data?', res.data);
  }, [res.data]);

  useEffect(() => {
    if (click) {
      console.log('refetching!!!!!!');
      refetch();
    }
  }, [click]);



  return (
    <RootLayout>
      <MainSearchContainer
        pageTitle='Query Title Playground'
        infoText="Query Explanation"
        buttonsProps={{
          // isClearDisabled: false,
          // isSearchDisabled: true,
        }}
      >
        <div>I'm the content</div><br/>
        <Button onClick={() => setClick(true)}>Click to fetch Data</Button>
      </MainSearchContainer>
    </RootLayout>
  );
}

export default App;

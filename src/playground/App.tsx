import { useEffect, useState } from 'react';
import type { FC } from 'react';
import '../../src/i18n/config';
import { useApiRequest } from '../../src/api';
import { RootLayout } from '../../src/ui';
import useSystemTableApiRequest from '../api/useSystemTableApiRequest';
import MainSearchContainer from '../../src/ui/MainSearchContainer/MainSearchContainer';
import './App.css';

const App: FC = () => {
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
      <h3>Shared Core Playground</h3>
      <MainSearchContainer
        pageTitle='שאילתת הודעות בוקר:'
        infoText="הסבר לשאילתה"
        buttonsProps={{
          isClearDisabled: false,
          isSearchDisabled: true,
        }}
      >
        <div>I'm the content</div>
        <button onClick={() => setClick(true)}>sss</button>
      </MainSearchContainer>
    </RootLayout>
  );
}

export default App;

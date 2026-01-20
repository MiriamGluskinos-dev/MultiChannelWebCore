import { useEffect } from 'react';
import type { FC } from 'react';
import '../../src/i18n/config';
import MainSearchContainer from '../../src/ui/MainSearchContainer/MainSearchContainer';
import { useApiRequest } from '../../src/api';
import { RootLayout } from '../../src/ui';
import './App.css';
import useSystemTableApiRequest from '../api/useSystemTableApiRequest';

const App: FC = () => {

  const res = useApiRequest({
    url: 'mock/url',
    method: 'GET',
    mock: true
  });

  const resSystemTable = useSystemTableApiRequest({
    tableName: 'CargoIdentifierType',
  });

  useEffect(() => {
    console.log('PAGE: API rpesponse:', res);
  }, [res.response.data]);

  useEffect(() => {

    if (resSystemTable.response) {
      console.log('PAGE: System Table data:', resSystemTable.response.data);
    }
  }, [resSystemTable.response.data]);

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
      </MainSearchContainer>
    </RootLayout>
  );
}

export default App;

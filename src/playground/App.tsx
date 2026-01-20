import { useEffect } from 'react';
import type { FC } from 'react';
import '../../src/i18n/config';
import MainSearchContainer from '../../src/ui/MainSearchContainer/MainSearchContainer';
import { useApiRequest } from '../../src/api';
import { RootLayout } from '../../src/ui';
import './App.css';

const App: FC = () => {

  const res = useApiRequest({
    url: '/messages/morning',
    method: 'GET',
  });

  useEffect(() => {
    console.log('PAGE: API response:', res);
  }, [res]);

  return (
    <RootLayout>
      <h3>Shared Core Playground</h3>
      <MainSearchContainer
        pageTitle='שאילתת הודעות בוקר:'
        infoText="הסבר לשאילתה"
        buttonsProps={{
          hasSearchButton: true,
          hasClearButton: true,
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

import { useEffect } from 'react';
import type { FC } from 'react';
import './i18n/config';
import MainSearchContainer from './ui/MainSearchContainer/MainSearchContainer';
import { useApiRequest } from './api';
import { RootLayout } from './ui';
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
        pageTitle=':שאילתת הודעות בוקר'
        infoText="הסבר לשאילתה"
        hasSearchButton
        hasClearButton
      >
        <div>I'm the content</div>
      </MainSearchContainer>
    </RootLayout>
  );
}

export default App;

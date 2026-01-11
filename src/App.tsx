import { useEffect } from 'react';
import type { FC } from 'react';
import './i18n/config';
import MainSearchContainer from './ui/MainSearchContainer/MainSearchContainer';
import './App.css';
import { useApiRequest } from './api';

const App: FC = () => {

  const res = useApiRequest({
    url: '/messages/morning',
    method: 'GET',
  });

  useEffect(() => {
    console.log('PAGE: API response:', res);
  }, [res]);

  return (
    <div className="App">
      <h3>Shared Core Playground</h3>
      <MainSearchContainer
        pageTitle=':שאילתת הודעות בוקר'
        infoText="הסבר לשאילתה"
        hasSearchButton
        hasClearButton
      >
        <div>I'm the content</div>
      </MainSearchContainer>
    </div>
  );
}

export default App;

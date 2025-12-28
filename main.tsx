import React from 'react';
import ReactDOM from 'react-dom/client';
// import '@shared/theme/theme.scss';
import MainSearchContainer from './src/ui/MainSearchContainer';
import { Button } from './src/ui/Button';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <h1>Shared Core Playground</h1>
    <MainSearchContainer
      pageTitle='שאילתת סטאטוס הצהרה'
      infoText="הסבר לשאילתה"
      hasSearchButton={true}
      hasClearButton={true}
    >
      <div>שלום</div>
    </MainSearchContainer>

    <Button>בדיקה</Button>
  </React.StrictMode>
);
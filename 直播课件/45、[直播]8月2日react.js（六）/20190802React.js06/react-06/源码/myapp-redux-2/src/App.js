import React from 'react';

import './assets/index.css';

import {HashRouter, BrowserRouter} from 'react-router-dom';

import BaseApp from './BaseApp/Index';

function App() {
  return (
    <div>
      <BrowserRouter>
        <BaseApp />
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import './i18n';
import App from './App';
import * as foo1 from './Q_and_A/import-export';
import foo from './Q_and_A/import-export';
import TextComponent from './Q_and_A/TextComponent';

console.log(foo1, foo);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TextComponent />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

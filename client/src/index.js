import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import * as serviceWorker from '../../client/node_modules/caniuse-lite/data/features/serviceworkers.js';
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_en from "./translations/en/common.json";
import common_gr from "./translations/gr/common.json";
import common_sp from "./translations/sp/common.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',                              
  resources: {
      en: {
          common: common_en               
      },
      gr: {
          common: common_gr               
      },
      sp: {
          common: common_sp
      },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

//serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
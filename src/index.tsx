import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from '@shopify/polaris';

import App from './App';
import { store } from './store';
import '@shopify/polaris/build/esm/styles.css';
import './scss/index.scss';

ReactDOM.render(
  <AppProvider i18n={enTranslations}>
    <Provider store={store}>
      <App />
    </Provider>
  </AppProvider>,
  document.getElementById('root'),
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { GlobalStyle } from './components/GlobalStyle.js';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from './redux/store.jsx';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/cars">
          <App />
          <GlobalStyle />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </>
);

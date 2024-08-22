import './index.scss';

// React
import React from 'react';
import ReactDOM from 'react-dom/client';

// React Router
import { HashRouter } from 'react-router-dom';

// Components
import App from './components/App/App.tsx';

import { Provider } from 'react-redux';
import store from './slices/index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);

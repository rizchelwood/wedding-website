import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';

import App from './App';
// import store from './store';

render(
  // <Provider store={store}>
  // </Provider>,
  <App />,
  document.getElementById('root')
);

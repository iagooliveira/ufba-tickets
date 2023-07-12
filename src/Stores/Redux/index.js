import { configureStore } from '@reduxjs/toolkit';

import { isDevelopment } from 'Helpers/environment';

import reducer from './root.reducer';

const store = configureStore({
  reducer
});

if (isDevelopment() && module.hot) {
  module.hot.accept('Stores/Redux/root.reducer', () => {
    const newRootReducer = require('Stores/Redux/root.reducer').default;
    store.replaceReducer(newRootReducer);
  });
}

export default store;

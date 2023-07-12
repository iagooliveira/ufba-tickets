import { combineReducers } from '@reduxjs/toolkit';

import auth from './slices/auth.slice';
import notification from './slices/notification.slice';

const rootReducer = combineReducers({
  auth,
  notification
});

export default rootReducer;

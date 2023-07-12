import * as uuid from 'uuid';

import { createSlice } from '@reduxjs/toolkit';

export const NOTIFICATION_REDUCER = 'notification';

const notification = createSlice({
  name: NOTIFICATION_REDUCER,
  initialState: {
    notifications: []
  },
  reducers: {
    addNotification: (state, { payload }) => {
      const key = payload.options && payload.options.key;

      state.notifications.unshift({
        key: key || uuid.v4(),
        ...payload
      });
    },
    closeNotification: (state, { payload }) => ({
      notifications: [
        ...state.notifications.map(item =>
          payload.dismissAll || item.key === payload.key
            ? { ...item, dismissed: true }
            : { ...item }
        )
      ]
    }),
    removeNotification: (state, { payload }) => ({
      notifications: state.notifications.filter(item => item.key !== payload)
    })
  }
});

export const { addNotification, closeNotification, removeNotification } =
  notification.actions;

export default notification.reducer;

import { createSlice } from '@reduxjs/toolkit';

import { ROLES } from 'Modules/User/constants/roles';

export const AUTH_REDUCER = 'auth';

const hasRole = (user, role) => user.role.some(userRole => userRole === role);

const auth = createSlice({
  name: AUTH_REDUCER,
  initialState: {
    isAuthenticated: false,
    user: undefined,
    role: undefined
  },
  reducers: {
    signIn: (state, { payload }) => {
      state.user = payload.user;
      state.isAuthenticated = true;
      if (hasRole(payload.user, ROLES.ROLE_ADMIN)) {
        state.role = ROLES.ROLE_ADMIN;
      }
    },
    signOut: state => {
      state.isAuthenticated = false;
      state.user = undefined;
      state.role = undefined;
    },
    me: (state, { payload }) => {
      state.user = payload;
    }
  }
});

export const authActions = auth.actions;

export default auth.reducer;

import { createSlice } from "@reduxjs/toolkit";

interface initialState {
  accessToken?: string;
  refreshToken?: string;
  isAuth?: boolean;
  error?: string;
}

const initialState: initialState = {
  accessToken: localStorage.getItem('access') || undefined,
  isAuth: !!localStorage.getItem('access'),
  refreshToken: localStorage.getItem('refresh') || undefined,
};

export const authSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers:  { 
    setAuth: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isAuth = true;
      localStorage.setItem ('access', action.payload.accessToken);
      localStorage.setItem ('refresh', action.payload.refreshToken);

    },
    setLogout: (state) => {
    state.accessToken = undefined;
    state.refreshToken = undefined;
    state.isAuth = false;
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    }
    },
   
})
export const { setAuth, setLogout } = authSlice.actions;

export default authSlice.reducer;
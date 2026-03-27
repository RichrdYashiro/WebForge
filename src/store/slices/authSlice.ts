import { createSlice } from "@reduxjs/toolkit";
interface IUser {
  id: number;
  email: string;
  name: string;
  surname?: string;
}
interface initialState {
  accessToken?: string;
  refreshToken?: string;
  isAuth?: boolean;
  error?: string;
  user?: IUser | null;
}

const initialState: initialState = {
  accessToken: localStorage.getItem('access') || undefined,
  isAuth: !!localStorage.getItem('access'),
  refreshToken: localStorage.getItem('refresh') || undefined,
  user: JSON.parse(localStorage.getItem('user') || 'null') || null,
};

export const authSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers:  { 
    setAuth: (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isAuth = true;
     
      localStorage.setItem ('access', action.payload.accessToken);
      localStorage.setItem ('refresh', action.payload.refreshToken);
      localStorage.setItem('user', JSON.stringify(action.payload.user));

    },
    setLogout: (state) => {
    state.accessToken = undefined;
    state.refreshToken = undefined;
    state.isAuth = false;
    state.user = null;
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    localStorage.removeItem('user');
    }
    },
   
})
export const { setAuth, setLogout } = authSlice.actions;

export default authSlice.reducer;
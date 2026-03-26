import { configureStore } from '@reduxjs/toolkit'
import  editorReducer from './slices/editorSlice'
import authReducer from './slices/authSlice'
import { authApi } from '../services/authapi'

export const store = configureStore({
  reducer: {
    editor: editorReducer,
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
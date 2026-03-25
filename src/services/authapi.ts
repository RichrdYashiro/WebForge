import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { setAuth } from '../store/slices/authSlice';

export const authApi = createApi({
 reducerPath: 'auth',
 baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
 endpoints: (builder) => ({
    login: builder.mutation({
     query: (body) => ({
      url: '/login',
      method: 'POST',
      body,
     }),
        async onQueryStarted(args, {dispatch, queryFulfilled}) {
        try{
            const {data} = await queryFulfilled;
            dispatch(setAuth({
               accessToken: data.accessToken, 
                refreshToken: data.refreshToken
            }))
        }
        catch (error) {
            console.log(error)
        }
    }
 
    }),
    register: builder.mutation ({
        query: (body) => ({
      url: '/register',
      method: 'POST',
      body,
    }),
 
 })
 
})
});

export const {useLoginMutation, useRegisterMutation} = authApi
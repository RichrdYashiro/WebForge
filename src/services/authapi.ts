import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { setAuth } from '../store/slices/authSlice';

export const authApi = createApi({
 reducerPath: 'authApi',
 baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001'}),
 endpoints: (builder) => ({
    login: builder.mutation({
     query: (credentials) => ({
      url: '/login',
      method: 'POST',
      body: {
      email: credentials.login,
      password: credentials.password
    },
     }),
        async onQueryStarted(args, {dispatch, queryFulfilled}) {
        try{
            const {data} = await queryFulfilled;
            localStorage.setItem('token', data.accessToken)
            dispatch(setAuth({
               accessToken: data.accessToken, 
                user: data.user
            }))
        }
        catch (error) {
            console.log(error)
        }
    }
 
    }),
    register: builder.mutation ({
        query: (registerUser) => ({
      url: '/register',
      method: 'POST',
      body:{
        email: registerUser.email,
        password: registerUser.password,
        name: registerUser.name,
        surname: registerUser.surname,
      }
    }),
    
    async onQueryStarted(args, {dispatch, queryFulfilled}) {
        try{
            const {data} = await queryFulfilled;
            dispatch(setAuth({
               accessToken: data.accessToken, 
                user: data.user
            }))
        }
        catch (error) {
            console.log(error)
        }
    }
 
 })
})
});


export const {useLoginMutation, useRegisterMutation} = authApi
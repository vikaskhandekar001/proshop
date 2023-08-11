import {createApi ,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { BASE_URI } from '../constants';

const baseQuery = fetchBaseQuery({baseQuery:BASE_URI});


export const apiSlice = createApi({
    baseQuery,
    tagTypes:['Product','User','Order'],
    endpoints:(builder)=>({})
})
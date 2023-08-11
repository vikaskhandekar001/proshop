import {PRODUCT_URI} from '../constants.js';
import {apiSlice} from './apiSlice.js';

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCT_URI,
      }),
      keepUnusedDataFor: 5,
    }),

    getProductDetails: builder.query({
        query: (productId) => ({
          url: `${PRODUCT_URI}/${productId}`,
        }),
        keepUnusedDataFor: 5,
      })
  }),
});

export const { useGetProductsQuery, useGetProductDetailsQuery } = productApiSlice;

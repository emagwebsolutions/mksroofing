import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const fetchData = createApi({
  reducerPath: 'fetchData',
  baseQuery: fetchBaseQuery({
    baseUrl: "/api"
  }),
  endpoints: (builder) => ({
    getposts: builder.query({
      query: (args: any) => "/fetchpost"
    })
  })
});

export const { useGetpostsQuery} = fetchData

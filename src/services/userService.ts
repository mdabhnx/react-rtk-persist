import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<any, undefined>({
      query: () => "/users",
    }),
    getUser: builder.query<any, string>({
      query: (id) => `/users/${id}`,
    }),
  }),
});

export const { useGetAllUsersQuery, useGetUserQuery } = userApi;

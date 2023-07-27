import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// редьюсер для работы с треками
const FETCH_CATALOG = "https://painassasin.online/catalog";

export const musicApi = createApi({
  reducerPath: "trackReducer",
  baseQuery: fetchBaseQuery({
    baseUrl: FETCH_CATALOG,
  }),
  endpoints: (builder) => ({
    getAllTracks: builder.query({
      query: () => ({
        url: "/track/all/",
      }),
    }),
    getAllFavorite: builder.query({
      query: (headers) => ({
        url: "/track/favorite/all/",
        headers,
      }),
    }),
  }),
});

// редьюсер для работы с пользователями
const FETCH_USER = "https://painassasin.online/user";

export const userApi = createApi({
  reducerPath: "userReducer",
  baseQuery: fetchBaseQuery({
    baseUrl: FETCH_USER,
  }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (body) => ({
        url: "/signup/",
        method: "POST",
        body,
      }),
    }),
    logIn: builder.mutation({
      query: (body) => ({
        url: "/token/",
        method: "POST",
        body,
      }),
    }),
    refreshToken: builder.mutation({
        query: (body) => ({
          url: "/token/refresh",
          method: "POST",
          body,
        }),
      }),
  }),
});

export const { useSignUpMutation, useLogInMutation, useRefreshTokenMutation } = userApi;
export const { useGetAllTracksQuery, useGetAllFavoriteQuery } = musicApi;

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
    getSelection: builder.query({
      query: (id) => ({
        url: `/selection/${id}`,
      }),
    }),
    getAllFavorite: builder.query({
      query: (token) => ({
        url: "/track/favorite/all/",
        headers: { authorization: `Bearer ${token}` },
      }),
    }),
    addFavorite: builder.mutation({
      query: ({ id, token }) => ({
        url: `/track/${id}/favorite/`,
        headers: { authorization: `Bearer ${token}` },
        method: "POST",
      }),
    }),
    deleteFavorite: builder.mutation({
      query: ({ id, token }) => ({
        url: `/track/${id}/favorite/`,
        headers: { authorization: `Bearer ${token}` },
        method: "DELETE",
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
      query: (refresh) => ({
        url: "/token/refresh",
        method: "POST",
        refresh,
      }),
    }),
  }),
});

export const { useSignUpMutation, useLogInMutation, useRefreshTokenMutation } =
  userApi;
export const {
  useGetAllTracksQuery,
  useGetAllFavoriteQuery,
  useGetSelectionQuery,
  useAddFavoriteMutation,
  useDeleteFavoriteMutation,
} = musicApi;

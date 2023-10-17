import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from './config/constants'
import { IPost } from 'shared/types/api/posts.interfaces'

// FSD # Also we can split this file and separate Api and hooks.
// 1. move 'postApi' from 'shared' => 'app/api' or even to 'widgets/api'
// 2. move hook 'useGetPostsQuery' => 'widget/..'
// 3. move hook 'useGetPostQuery' => 'entities/post'

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getPosts: builder.query<IPost[], number>({
      query: (page) => `posts?_limit=6&_start=${page * 6}`,

      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems)
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg
      },
    }),
    getPost: builder.query<IPost, string>({
      query: (postId) => `posts/${postId}`,
    }),
  }),
})

// auto-generated hooks
export const { useGetPostsQuery, useGetPostQuery } = postsApi

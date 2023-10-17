import React from 'react'
import './styles/App.css'
import { IPost } from 'shared/types/api/posts.interfaces'
import { useGetPostsQuery } from '../shared/api/postsApi'
import { useSelector } from 'react-redux'

import Home from 'pages/home/home'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { SerializedError } from '@reduxjs/toolkit'
import { ErrorFetchMessage } from '../shared/api/config/ErrorFetchMessage'
import { ErrorBoundary } from 'react-error-boundary'

export default function App() {
  const page = useSelector((state: RootState) => state.page)

  const {
    data,
    error,
    isFetching,
  }: { data?: IPost[]; error?: FetchBaseQueryError | SerializedError; isFetching: boolean; isError?: boolean } =
    useGetPostsQuery(page)

  if (error) return <ErrorFetchMessage error={error} />

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Home data={data} isFetching={isFetching}></Home>
    </ErrorBoundary>
  )
}

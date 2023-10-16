import React from 'react'
import './styles/App.css'
import { IPost } from 'shared/types/api/posts.interfaces'
import { useGetPostsQuery } from '../shared/api/postsApi'
import { useSelector } from 'react-redux'
import { RootState } from 'shared/store/store'

import { Home } from 'pages/home/home'

export default function App() {
  const page = useSelector((state: RootState) => state.page)
  const { data, isFetching }: { data?: IPost[]; isFetching: boolean } = useGetPostsQuery(page)

  return (
    <>
      <Home data={data} isFetching={isFetching}></Home>
    </>
  )
}

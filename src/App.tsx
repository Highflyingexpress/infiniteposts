import { useGetPostsQuery } from './service/postsApi'
import React, { useEffect, useState } from 'react'
import './App.css'

interface IPost {
  id: number
  title: string
  body: string
  userId: number
}

export default function App() {
  const [page, setPage] = useState(0)
  const { data, isFetching } = useGetPostsQuery(page)

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight
      if (scrolledToBottom && !isFetching) setPage(page + 1)
    }

    document.addEventListener('scroll', onScroll)

    return function () {
      document.removeEventListener('scroll', onScroll)
    }
  }, [page, isFetching])

  const Post = ({ id, title, body }: { id: number; title: string; body: string }) => {
    const formattedTitle = title.charAt(0).toUpperCase() + title.slice(1) + '.'
    return (
      <div
        style={{
          border: '1px solid black',
          padding: '10px',
        }}
      >
        <>{id}</>
        <h3>{formattedTitle}</h3>
        <div className="postBody">{body}</div>
        <button className="btn">просмотр</button>
      </div>
    )
  }

  return (
    <div className="App">
      <h3>React - RTK Query - Router v6 - JSONPlaceholder</h3>
      <h4>scrollin down is infinity - caution - do not hurt your middle finger</h4>
      {data?.map((p: IPost) => <Post key={p.id} id={p.id} title={p.title} body={p.body} />)}
    </div>
  )
}

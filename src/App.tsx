import { useGetPostsQuery } from './service/postsApi'
import React, { useEffect, useState } from 'react'

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
    const formattedTitle = title.charAt(0).toUpperCase() + title.slice(1)
    return (
      <div
        style={{
          border: '1px solid black',
          padding: '10px',
        }}
      >
        <h3>
          {id} - {formattedTitle}
        </h3>
        <h3>{body}</h3>
        <button>просмотр</button>
      </div>
    )
  }

  return (
    <div>
      <h2>React - RTK Query - Router v6 - JSONPlaceholder</h2>
      <h3>scrollin down is infinity - caution - do not hurt your middle finger</h3>
      {data?.map((p: IPost) => <Post key={p.id} id={p.id} title={p.title} body={p.body} />)}
    </div>
  )
}

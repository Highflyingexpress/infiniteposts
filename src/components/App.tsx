import React, { useEffect } from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom'
import { prettierStr } from 'utils/strFormat'
import { IdCircle } from 'ui/idCircle'
import { IPost } from 'interfaces/posts.interfaces'
import { useGetPostsQuery } from '../service/postsApi'
import { useDispatch, useSelector } from 'react-redux'
import { setPage } from 'slices/pageSlice'
import { RootState } from 'store'
import infiniteSign from '../svg/infiniteSign.svg'

export default function App() {
  const page = useSelector((state: RootState) => state.page)
  const { data, isFetching }: { data?: IPost[]; isFetching: boolean } = useGetPostsQuery(page)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight
      if (scrolledToBottom && !isFetching) dispatch(setPage(page + 1))
    }

    document.addEventListener('scroll', onScroll)

    return function () {
      document.removeEventListener('scroll', onScroll)
    }
  }, [page, isFetching])

  const Post = ({ id, title, body }: { id: number; title: string; body: string }) => {
    return (
      <div
        style={{
          border: '1px solid black',
          padding: '10px',
        }}
      >
        <IdCircle>{id}</IdCircle>
        <h3>{prettierStr(title)}</h3>
        <div className="postBody">{prettierStr(body)}</div>
        <button className="btn" onClick={() => navigate(`posts/${id}`)}>
          просмотр
        </button>
      </div>
    )
  }

  return (
    <div className="App">
      <div className="AppHeader">
        <img src={infiniteSign} alt="Infinite scroll app" />
        <div>
          <h3>React - RTK Query - Router v6 - JSONPlaceholder</h3>
          <h4>
            scrollin down is infinity here - <span style={{ color: 'darkred' }}>caution</span> - do not hurt your
            scrollin-finger
          </h4>
        </div>
      </div>
      {data?.map((p: IPost) => <Post key={p.id} id={p.id} title={p.title} body={p.body} />)}
    </div>
  )
}

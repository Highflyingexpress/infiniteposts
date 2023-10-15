import React, { useEffect } from 'react'
import './App.css'
import { IPost } from 'interfaces/posts.interfaces'
import { useGetPostsQuery } from '../service/postsApi'
import { useDispatch, useSelector } from 'react-redux'
import { setPage } from 'slices/pageSlice'
import { RootState } from 'store'
import infiniteSign from '../svg/infiniteSign.svg'
import { PostCard } from './PostCard'

export default function App() {
  const page = useSelector((state: RootState) => state.page)
  const { data, isFetching }: { data?: IPost[]; isFetching: boolean } = useGetPostsQuery(page)
  const dispatch = useDispatch()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting && !isFetching) {
          observer.unobserve(entry.target)
          dispatch(setPage(page + 1))
        }
      },
      { threshold: 1 }
    )
    const lastCard = document.querySelector('.postCard:last-child')
    if (lastCard) observer.observe(lastCard)

    return () => {
      observer.disconnect()
    }
  }, [page, isFetching])

  return (
    <>
      <div className="App">
        <div className="AppHeader">
          <img src={infiniteSign} alt="Infinite scroll app" />
          <div>
            <h3>React - RTK Query - Router v6 - JSONPlaceholder</h3>
            <h4>scrollin down is infinity here - caution - do not hurt your scrollin-finger</h4>
          </div>
        </div>
        {data?.map((p: IPost) => (
          <div className="postCard" key={p.id}>
            <PostCard key={p.id} id={p.id} title={p.title} body={p.body} />
          </div>
        ))}
      </div>
    </>
  )
}

import React, { useEffect } from 'react'
import { IPost } from 'shared/types/api/posts.interfaces'

import { useDispatch, useSelector } from 'react-redux'
import { setPage } from 'shared/store/slices/pageSlice'
import { RootState } from 'shared/store/store'
import { PostCard } from '../entities/postCard/PostCard'

type InfinitePosts = {
  data: IPost[] | undefined
  isFetching: boolean
}

export default function InfinitePosts(props: InfinitePosts) {
  const { data, isFetching } = props
  const page = useSelector((state: RootState) => state.page)
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
      {data?.map((p: IPost) => (
        <div className="postCard" key={p.id}>
          <PostCard key={p.id} id={p.id} title={p.title} body={p.body} />
        </div>
      ))}
    </>
  )
}

import React from 'react'
import { useGetPostQuery } from 'shared/api/postsApi'
import { prettierStr } from 'shared/lib/strFormat'
import { IdSign } from 'shared/ui/idSign'
import { IPost } from 'shared/types/api/posts.interfaces'
import { useNavigate, useParams } from 'react-router-dom'

export const Post = () => {
  const { postId } = useParams<{ postId: string }>()
  const { data }: { data?: IPost } = useGetPostQuery(Number(postId))
  const navigate = useNavigate()
  const title = data?.title ?? ''
  const body = data?.body ?? ''

  return (
    <div
      style={{
        border: '1px solid black',
        padding: '10px',
        width: '60%',
        margin: '10px auto',
      }}
    >
      <IdSign>{Number(postId)}</IdSign>
      <h3>{prettierStr(title)}</h3>
      <div>{prettierStr(body)}</div>
      <h4>Author: user{data?.userId}</h4>
      <button className="btn" onClick={() => navigate(-1)}>
        назад
      </button>
    </div>
  )
}

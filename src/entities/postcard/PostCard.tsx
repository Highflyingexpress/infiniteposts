import React from 'react'
import { useNavigate } from 'react-router-dom'
import { prettierStr } from 'shared/lib/strFormat'
import { IdSign } from 'shared/ui/idSign'
import { ButtonPostCard } from './ui/ButtonPostCard'

export const PostCard = ({ id, title, body }: { id: number; title: string; body: string }) => {
  const navigate = useNavigate()
  return (
    <div>
      <IdSign>{id}</IdSign>
      <h3>{prettierStr(title)}</h3>
      <div className="postBody">{prettierStr(body)}</div>
      <ButtonPostCard onClick={() => navigate(`posts/${id}`)}>просмотр</ButtonPostCard>
    </div>
  )
}

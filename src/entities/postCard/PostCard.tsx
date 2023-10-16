import React from 'react'
import { useNavigate } from 'react-router-dom'
import { prettierStr } from 'shared/lib/strFormat'
import { IdSign } from 'shared/ui/idSign'

export const PostCard = ({ id, title, body }: { id: number; title: string; body: string }) => {
  const navigate = useNavigate()
  return (
    <div>
      <IdSign>{id}</IdSign>
      <h3>{prettierStr(title)}</h3>
      <div className="postBody">{prettierStr(body)}</div>
      <button className="btn" onClick={() => navigate(`posts/${id}`)}>
        просмотр
      </button>
    </div>
  )
}

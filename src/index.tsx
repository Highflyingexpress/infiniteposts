import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'
import './index.css'

import App from './components/App'
import { RouterProvider, createBrowserRouter, useNavigate, useParams } from 'react-router-dom'
import { useGetPostQuery } from './service/postsApi'
import { prettierStr } from 'utils/strFormat'
import { IdCircle } from 'ui/idCircle'
import { IPost } from 'interfaces/posts.interfaces'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const Post = () => {
  const { postId } = useParams<{ postId: string }>()
  const { data }: { data?: IPost } = useGetPostQuery(Number(postId))
  const navigate = useNavigate()
  const title = data?.title || ''
  const body = data?.body || ''

  return (
    <div
      style={{
        border: '1px solid black',
        padding: '10px',
        width: '60%',
        margin: '10px auto',
      }}
    >
      <IdCircle>{Number(postId)}</IdCircle>
      <h3>{prettierStr(title)}</h3>
      <div>{prettierStr(body)}</div>
      <h4>Author: user{data?.userId}</h4>
      <button className="btn" onClick={() => navigate(-1)}>
        назад
      </button>
    </div>
  )
}
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'posts/:postId',
    element: <Post />,
  },
])

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'
import './index.css'

import App from './components/App'
import { Post } from 'components/Post'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

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

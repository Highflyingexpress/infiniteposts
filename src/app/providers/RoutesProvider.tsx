import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from 'app/App'
import { Post } from 'entities/post/Post'

export default function RoutesProvider() {
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

  return <RouterProvider router={router} />
}

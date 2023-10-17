import React from 'react'
import App from 'app'
import { Post } from 'entities/post/Post'

const paths = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'posts/:postId',
    element: <Post />,
  },
]

export default paths

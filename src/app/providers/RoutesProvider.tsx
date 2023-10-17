import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import paths from 'app/config/paths'

export default function RoutesProvider() {
  const router = createBrowserRouter(
    paths.map(({ path, element }) => ({
      path,
      element,
    }))
  )

  return <RouterProvider router={router} />
}

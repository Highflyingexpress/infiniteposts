import React from 'react'
import { StoreProvider } from './StoreProvider'
import RoutesProvider from './RoutesProvider'

export function Provider() {
  return (
    <StoreProvider>
      <RoutesProvider />
    </StoreProvider>
  )
}

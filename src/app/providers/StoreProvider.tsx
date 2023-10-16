import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from 'shared/store/store'

type StoreProviderType = {
  children: ReactNode
}

export function StoreProvider(props: StoreProviderType) {
  const { children } = props
  return <Provider store={store}>{children}</Provider>
}

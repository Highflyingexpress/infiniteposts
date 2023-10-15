import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { postsApi } from './service/postsApi'
import { pageReducer } from 'slices/pageSlice'

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    page: pageReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,...rtk
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

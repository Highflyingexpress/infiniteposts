import React from 'react'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { SerializedError } from '@reduxjs/toolkit'
import { ErrorMessage } from 'shared/ui/ErrorMessage'

export const ErrorFetchMessage = ({ error }: { error: FetchBaseQueryError | SerializedError }) => {
  if ('status' in error) {
    const errMsg = 'error' in error ? error.error : JSON.stringify(error.data)
    return <ErrorMessage message={errMsg} />
  } else return <ErrorMessage message={error.message} />
}

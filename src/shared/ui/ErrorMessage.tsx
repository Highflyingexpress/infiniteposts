import React from 'react'

export const ErrorMessage = ({ message = 'something went wrong' }: { message: string | undefined }) => {
  return (
    <div>
      <h2>An error has occurred:</h2>
      <div>{message}</div>
    </div>
  )
}

import React from 'react'

export const IdCircle = ({ children }: { children: number }) => {
  return (
    <span
      style={{
        border: '1px solid black',
        display: 'inline-block',
        width: '30px',
        height: '30px',
        textAlign: 'center',
        lineHeight: '30px',
      }}
    >
      {children}
    </span>
  )
}

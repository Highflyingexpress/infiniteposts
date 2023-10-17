import React from 'react'

type ButtonPostCardProps = {
  children: string
  onClick?: () => void
}

export const ButtonPostCard: React.FC<ButtonPostCardProps> = ({ children, onClick }) => {
  // here should be exclusive-postPreview-button
  return (
    <button style={{ margin: '20px 0 0 0', padding: '5px 7px' }} onClick={onClick}>
      {children}
    </button>
  )
}

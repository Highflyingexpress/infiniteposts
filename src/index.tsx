import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'app/providers'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(<Provider />)

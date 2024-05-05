import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './src/App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

const root = createRoot(document.getElementById('app'))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

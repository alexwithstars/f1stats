import { createRoot } from 'react-dom/client'
import App from './src/App.js'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

const root = createRoot(document.getElementById('app') as HTMLElement)

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

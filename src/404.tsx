import { Link } from 'react-router-dom'
import type { JSX } from 'react'
import './404.css'

export function NotFound (): JSX.Element {
  return (
    <div className='not-found'>
      <h1>404</h1>
      <p>Página no encontrada</p>
      <Link to='/'>Volver al inicio</Link>
    </div>
  )
}

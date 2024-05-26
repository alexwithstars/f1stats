import './404.css'

export function NotFound () {
  return (
    <div className='not-found'>
      <h1>404</h1>
      <p>Página no encontrada</p>
      <a href='/'>Volver al inicio</a>
    </div>
  )
}

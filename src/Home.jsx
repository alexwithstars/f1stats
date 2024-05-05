import { Link } from 'react-router-dom'
import { F1Logo } from './assets/F1Logo'
import { RestartIcon } from './assets/RestartIcon'
import './Home.css'
import { BASE_URL } from './misc/constants'

export function Home () {
  const handleClick = () => {
    const video = document.getElementById('background')
    video.currentTime = 0
    video.play()
  }
  const restartText = 'Reiniciar animación'
  return (
    <>
      <main className='home'>
        <header className='home-header'>
          <F1Logo className='home-logo' />
          <h1 className='home-title'>Stats</h1>
        </header>
        <footer className='home-links'>
          <Link to={`${BASE_URL}/races`} className='home-link-button'>Carreras</Link>
          <Link to={`${BASE_URL}/drivers`} className='home-link-button'>Pilotos</Link>
        </footer>
        <button onClick={handleClick} className='restart'>
          <RestartIcon className='restart-icon' />
          <span className='restart-text' style={{ '--fullWidth': `${restartText.length}ch` }}>
            {restartText}
          </span>
        </button>
      </main>
      <video id='background' className='background' src='f1-logo-animation-cut.mp4' type='video/mp4' autoPlay muted />
    </>
  )
}

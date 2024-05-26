import { Link } from 'react-router-dom'
import { F1Logo } from './assets/F1Logo'
import { RestartIcon } from './assets/RestartIcon'
import { useRef } from 'react'
import './Home.css'

export function Home () {
  const video = useRef(null)
  const handleClick = () => {
    video.current.currentTime = 0
    video.current.play()
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
          <Link to='/races' className='home-link-button'>Carreras</Link>
          <Link to='/drivers' className='home-link-button'>Pilotos</Link>
        </footer>
        <button onClick={handleClick} className='restart'>
          <RestartIcon className='restart-icon' />
          <span className='restart-text' style={{ '--fullWidth': `${restartText.length}ch` }}>
            {restartText}
          </span>
        </button>
      </main>
      <video
        ref={video}
        className='background'
        autoPlay
        muted
      >
        <source src='f1-logo-animation-cut.mp4' type='video/mp4' />
      </video>
    </>
  )
}

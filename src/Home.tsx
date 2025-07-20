import { Link } from 'react-router-dom'
import { F1Logo } from './assets/F1Logo.js'
import { RestartIcon } from './assets/RestartIcon.js'
import { JSX, useRef } from 'react'
import { routes } from './misc/constants.js'
import './Home.css'

export function Home (): JSX.Element {
  const video = useRef<HTMLVideoElement>(null)
  const handleClick = (): void => {
    if (video.current === null) return
    video.current.currentTime = 0
    void video.current.play()
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
          {Object.entries(routes).map(([href, text]) => (
            <Link key={href} to={href} className='home-link-button'>
              {text}
            </Link>
          ))}
        </footer>
        <button onClick={handleClick} className='restart'>
          <RestartIcon className='restart-icon' />
          <span className='restart-text' style={{ '--fullWidth': `${restartText.length}ch` } as React.CSSProperties}>
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

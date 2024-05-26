import { Link } from 'react-router-dom'
import { F1Logo } from '../assets/F1Logo'
import './Navbar.css'
import { useEffect, useState } from 'react'

const LinkTo = ({ href, text, className }) => {
  const [classes, setClasses] = useState(
    `${className} ${
      window.location.pathname === href ? 'active' : ''
    }`
  )
  const updateClasses = (e) => {
    setClasses(
      `${className} ${
        new URL(e.destination.url).pathname === href ? 'active' : ''
      }`
    )
  }
  useEffect(() => {
    window.navigation.addEventListener('navigate', updateClasses)
    return () => { window.navigation.removeEventListener('navigate', updateClasses) }
  }, [])
  return (
    <Link to={href} className={classes}>
      {text}
    </Link>
  )
}

export function Navabar () {
  const [classes, setClasses] = useState(
    `navbar ${
      window.location.pathname === '/' ? 'hide' : ''
    }`
  )
  const updateClasses = (e) => {
    setClasses(`navbar ${
      new URL(e.destination.url).pathname === '/' ? 'hide' : ''
    }`)
  }
  useEffect(() => {
    window.navigation.addEventListener('navigate', updateClasses)
    return () => { window.navigation.removeEventListener('navigate', updateClasses) }
  }, [])
  return (
    <nav className={classes}>
      <Link to='/'>
        <F1Logo className='navbar-logo' />
      </Link>
      <section className='links'>
        <LinkTo href='/races' text='Carreras' className='link' />
        <LinkTo href='/drivers' text='Pilotos' className='link' />
      </section>
    </nav>
  )
}

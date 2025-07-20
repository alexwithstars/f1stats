import { Link } from 'react-router-dom'
import { F1Logo } from '../assets/F1Logo.js'
import { routes } from '../misc/constants.js'
import { useUrl } from '../hooks/useUrl.js'
import { Menu } from '../assets/Menu.js'
import { useEffect, useState, JSX } from 'react'

import './Navbar.css'

export function Navbar (): JSX.Element {
  const destination = useUrl()
  const [showMenu, setShowMenu] = useState(false)
  useEffect(() => {
    setShowMenu(false)
  }, [destination])
  return (
    <nav className={`navbar ${destination === '/' ? 'hide' : ''}`}>
      <Link to='/'>
        <F1Logo className='navbar-logo' />
      </Link>
      <section className='links'>
        {Object.entries(routes).map(([href, text]) => (
          <Link
            key={href}
            to={href}
            className={`link ${destination === href ? 'active' : ''}`}
          >{text}
          </Link>
        ))}
      </section>
      <Menu className='menu' onClick={() => { setShowMenu(!showMenu) }} />
      <section className={'menu-links' + (showMenu ? ' active' : '')}>
        <Link to='/'>
          <F1Logo className='navbar-logo menu-logo' />
        </Link>
        {Object.entries(routes).map(([href, text]) => (
          <Link
            key={href}
            to={href}
            className={`menu-link ${destination === href ? 'active' : ''}`}
          >{text}
          </Link>
        ))}
      </section>
    </nav>
  )
}

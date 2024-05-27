import { Link } from 'react-router-dom'
import { F1Logo } from '../assets/F1Logo'
import { routes } from '../misc/constants'
import { useUrl } from '../hooks/useUrl'
import { Menu } from '../assets/Menu'
import { useEffect, useState } from 'react'
import './Navbar.css'

export function Navabar () {
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

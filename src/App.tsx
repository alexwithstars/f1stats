import { Routes, Route } from 'react-router-dom'
import { Home } from './Home.js'
import { Races } from './Races.js'
import { Drivers } from './Drivers.js'
import { Navbar } from './components/Navbar.js'
import { NotFound } from './404.js'
import type { JSX } from 'react'
import './App.css'

export default function App (): JSX.Element {
  return (
    <>
      <Navbar />
      <main className='content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/races' element={<Races />} />
          <Route path='/drivers' element={<Drivers />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

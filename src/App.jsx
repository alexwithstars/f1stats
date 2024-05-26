import { Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { Races } from './Races'
import { Drivers } from './Drivers'
import { Navabar } from './components/Navbar'
import { NotFound } from './404'
import './App.css'

export default function App () {
  return (
    <>
      <Navabar />
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

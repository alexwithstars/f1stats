import { Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { Races } from './Races'
import { Drivers } from './Drivers'
import { Navabar } from './components/Navbar'
import './App.css'

export default function App () {
  return (
    <>
      <Navabar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/races' element={<Races />} />
        <Route path='/drivers' element={<Drivers />} />
      </Routes>
    </>
  )
}

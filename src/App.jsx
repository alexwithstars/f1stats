import { Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { Races } from './Races'
import { Drivers } from './Drivers'
import { Navabar } from './components/Navbar'
import { BASE_URL } from './misc/constants'
import './App.css'

export default function App () {
  return (
    <>
      <Navabar />
      <Routes>
        <Route path={`${BASE_URL}/`} element={<Home />} />
        <Route path={`${BASE_URL}/races`} element={<Races />} />
        <Route path={`${BASE_URL}/drivers`} element={<Drivers />} />
      </Routes>
    </>
  )
}

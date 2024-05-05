import { useEffect, useState } from 'react'
import { getDrivers } from '../services/f1api'

export function useDrivers () {
  const [drivers, setDrivers] = useState(() => {
    const storage = window.sessionStorage.getItem('drivers')
    if (storage) return JSON.parse(storage)
    return []
  })
  useEffect(() => {
    const getData = async () => {
      const data = await getDrivers()
      data.sort((a, b) => a.team_name.localeCompare(b.team_name))
      window.sessionStorage.setItem('drivers', JSON.stringify(data))
      setDrivers(data)
    }
    getData()
  }, [])

  return drivers
}

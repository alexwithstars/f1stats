import { useEffect, useState } from 'react'
import { getYearRaces } from '../services/f1api'

export function useRaces () {
  const [meetings, setMeetings] = useState(() => {
    const storage = window.sessionStorage.getItem('races')
    if (storage) return JSON.parse(storage)
    return []
  })

  useEffect(() => {
    const getMeetings = async () => {
      const year = new Date().getFullYear()
      const data = await getYearRaces(year)
      window.sessionStorage.setItem('races', JSON.stringify(data))
      setMeetings(data)
    }
    getMeetings()
    return () => {}
  }, [])

  return meetings
}

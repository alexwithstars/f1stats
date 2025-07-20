import { useEffect, useState } from 'react'
import { getCurrentRaces } from '../services/f1v2.js'
import type { RaceV2 } from '../schemas/f1v2.js'

export function useRaces (): RaceV2[] {
  const [races, setRaces] = useState<RaceV2[]>(() => {
    const storage = window.sessionStorage.getItem('races')
    if (storage !== null) return JSON.parse(storage)
    return []
  })

  useEffect(() => {
    const getRaces = async (): Promise<void> => {
      const data = await getCurrentRaces()
      window.sessionStorage.setItem('races', JSON.stringify(data))
      setRaces(data)
    }
    void getRaces()
    return () => {}
  }, [])

  return races
}

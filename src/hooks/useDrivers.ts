import { useEffect, useState } from 'react'
import { getCurrentDrivers as getCurrentDriversV2 } from '../services/f1v2.js'
import type { DriverV2 } from '../schemas/f1v2.js'
import { getDrivers as getCurrentDriversV1 } from '../services/f1v1.js'
import type { DriverV1 } from '../schemas/f1v1.js'

interface IDriver {
  v1: DriverV1 | undefined
  v2: DriverV2
}

export function useDrivers (): IDriver[] {
  const [drivers, setDrivers] = useState<IDriver[]>(() => {
    const storage = window.sessionStorage.getItem('drivers')
    if (storage !== null) return JSON.parse(storage)
    return []
  })
  useEffect(() => {
    const getData = async (): Promise<void> => {
      const data = await getCurrentDriversV2()
      const dataV1 = await getCurrentDriversV1()
      data.sort((a, b) => a.givenName.localeCompare(b.givenName))
      const newDrivers: IDriver[] = data.map(driver => ({
        v1: dataV1.find(d => d.name_acronym === driver.code),
        v2: driver
      }))
      window.sessionStorage.setItem('drivers', JSON.stringify(newDrivers))
      setDrivers(newDrivers)
    }
    void getData()
  }, [])

  return drivers
}

import { DriverCard } from './components/DriverCard.js'
import { Loading } from './components/Loading.js'
import { useDrivers } from './hooks/useDrivers.js'
import { SectionHeader } from './components/SectionHeader.js'
import type { JSX } from 'react'
import './Drivers.css'

export function Drivers (): JSX.Element {
  const drivers = useDrivers()
  return (
    <>
      <SectionHeader title='Pilotos' backgroundUrl='/helmet.jpeg' />
      <main className='drivers'>
        {drivers.length > 0
          ? drivers.map(driver => {
            return (
              <DriverCard
                key={driver.v2.code}
                driver={driver.v2}
                driverV1={driver.v1}
              />
            )
          })
          : <Loading />}
      </main>
    </>
  )
}

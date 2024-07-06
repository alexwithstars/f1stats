import { DriverCard } from './components/DriverCard'
import { Loading } from './components/Loading'
import { useDrivers } from './hooks/useDrivers'
import { SectionHeader } from './components/SectionHeader'
import './Drivers.css'

export function Drivers () {
  const drivers = useDrivers()
  return (
    <>
      <SectionHeader title='Pilotos' backgroundUrl='/helmet.jpeg' />
      <main className='drivers'>
        {drivers.length > 0
          ? drivers.map(driver => {
            return (
              <DriverCard
                key={`d${driver.driver_number}`}
                number={driver.driver_number}
                name={driver.full_name}
                country={driver.country_code}
                imgUrl={driver.headshot_url}
                team={driver.team_name}
                color={driver.team_colour}
              />
            )
          })
          : <Loading />}
      </main>
    </>
  )
}

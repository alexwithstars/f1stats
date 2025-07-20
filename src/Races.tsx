import { JSX, useState } from 'react'
import { RaceInfo } from './components/RaceInfo.js'
import { RaceCard } from './components/RaceCard.js'
import { Loading } from './components/Loading.js'
import { useRaces } from './hooks/useRaces.js'
import { SectionHeader } from './components/SectionHeader.js'
import './Races.css'
import { RaceV2 } from './schemas/f1v2.js'

export function Races (): JSX.Element {
  const [currentRace, setCurrentRace] = useState<RaceV2 | null>(null)

  const races = useRaces()

  const closeHandle = (): void => {
    setCurrentRace(null)
  }

  return (
    <>
      <SectionHeader title='Carreras' backgroundUrl='/f1banner.webp' />
      <section className='races'>
        {races.length > 0
          ? races.map(race => {
            return (
              <RaceCard
                key={`m${race.date}`}
                race={race}
                onClick={() => setCurrentRace(race)}
              />
            )
          })
          : <Loading />}
      </section>
      {currentRace !== null && <RaceInfo race={currentRace} closeHandle={closeHandle} />}
    </>
  )
}

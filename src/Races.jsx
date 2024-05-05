import { useState } from 'react'
import { RaceInfo } from './components/RaceInfo'
import { RaceCard } from './components/RaceCard'
import { Loading } from './components/Loading'
import { useRaces } from './hooks/useRaces'
import './Races.css'

export function Races () {
  const [targetMeeting, setTargetMeeting] = useState(null)

  const races = useRaces()

  const closeHandle = e => {
    setTargetMeeting(null)
  }

  return (
    <main className='main-content'>
      <header className='header'>
        <div className='header-background' />
        <h1 className='header-title'>Carreras</h1>
      </header>
      <section className='races'>
        {races.length > 0
          ? races.map(meeting => {
            const date = new Date(meeting.date_start)
            return (
              <RaceCard
                key={`m${meeting.meeting_key}`}
                country={meeting.country_name}
                countryCode={meeting.country_code}
                date={date}
                circuit={meeting.circuit_short_name}
                onClick={() => setTargetMeeting(meeting)}
              />
            )
          })
          : <Loading />}
      </section>
      {targetMeeting && <RaceInfo meeting={targetMeeting} closeHandle={closeHandle} />}
    </main>
  )
}

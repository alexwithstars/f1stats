import { Loading } from './Loading.js'
import { SessionCard } from './SessionCard.js'
import { X } from '../assets/X.js'
import './RaceInfo.css'
import { RaceV2, sessionNames } from '../schemas/f1v2.js'
import { ISession } from '../types/types.js'

interface RaceInfoProps {
  race: RaceV2
  closeHandle: () => void
}

export const RaceInfo: React.FC<RaceInfoProps> = ({ race, closeHandle }) => {
  const sessions: ISession[] = []
  if (race.FirstPractice !== undefined) sessions.push({ ...race.FirstPractice, type: sessionNames.firstPractice })
  if (race.SecondPractice !== undefined) sessions.push({ ...race.SecondPractice, type: sessionNames.secondPractice })
  if (race.ThirdPractice !== undefined) sessions.push({ ...race.ThirdPractice, type: sessionNames.thirdPractice })
  if (race.Qualifying !== undefined) sessions.push({ ...race.Qualifying, type: sessionNames.qualifying })
  if (race.SprintQualifying !== undefined) sessions.push({ ...race.SprintQualifying, type: sessionNames.sprintQualifying })
  if (race.SprintShootout !== undefined) sessions.push({ ...race.SprintShootout, type: sessionNames.sprintShootout })
  sessions.push({
    time: race.time ?? '00:00',
    date: race.date ?? new Date().toISOString(),
    type: 'Race'
  })
  return (
    <div className='race-info-modal' onClick={closeHandle}>
      <article className='race-info' onClick={e => e.stopPropagation()}>
        <X className='close-race-info' onClick={closeHandle} />
        <h2 className='race-info-title'>{race.raceName}</h2>
        <span className='race-info-subtitle'>{race.Circuit.circuitName}</span>
        <h2 className='race-info-sessions-title'>Sesiones</h2>
        <section className='race-info-sessions'>
          {sessions.length > 0
            ? sessions.map(session => {
              return (
                <SessionCard
                  key={`s${session.date}${session.type}`}
                  session={session}
                />
              )
            })
            : <Loading />}
        </section>
      </article>
    </div>
  )
}

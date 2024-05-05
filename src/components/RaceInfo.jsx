import { useEffect } from 'react'
import { Loading } from './Loading'
import { SessionCard } from './SessionCard'
import { X } from '../assets/X'
import { useSessions } from '../hooks/useSessions'
import './RaceInfo.css'

export function RaceInfo ({ meeting, closeHandle }) {
  const sessions = useSessions({ meeting })
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])
  return (
    <div className='race-info-modal' onClick={closeHandle}>
      <article className='race-info' onClick={e => e.stopPropagation()}>
        <X className='close-race-info' onClick={closeHandle} />
        <h2 className='race-info-title'>{meeting.meeting_official_name}</h2>
        <span className='race-info-subtitle'>{meeting.circuit_short_name}</span>
        <h2 className='race-info-sessions-title'>Sessiones</h2>
        <section className='race-info-sessions'>
          {sessions.length > 0
            ? sessions.map(session => {
              return (
                <SessionCard
                  key={`s${session.session_key}`}
                  name={session.session_name}
                  start={session.date_start}
                  end={session.date_end}
                />
              )
            })
            : <Loading />}
        </section>
      </article>
    </div>
  )
}

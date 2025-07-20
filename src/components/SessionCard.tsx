import { ISession } from '../types/types.js'
import './SessionCard.css'

interface DateDisplayProps {
  date: Date
}

const DateDisplay: React.FC<DateDisplayProps> = ({ date }) => {
  return (
    <div className='date-display'>
      <span className='date-display-day'>
        {date.toLocaleString(undefined, { day: '2-digit' })}
      </span>
      <span className='date-display-month'>
        {date.toLocaleString(undefined, { month: 'short' })}
      </span>
      <span className='date-display-time'>
        {date.toLocaleString(undefined, { hour: '2-digit', minute: '2-digit' })}
      </span>
    </div>
  )
}

interface SessionCardProps {
  session: ISession
}

export const SessionCard: React.FC<SessionCardProps> = ({ session }) => {
  const dateStart = new Date(session.date + 'T' + session.time)
  return (
    <div className='session-card'>
      <h3 className='session-card-title'>{session.type}</h3>
      <DateDisplay date={dateStart} />
    </div>
  )
}

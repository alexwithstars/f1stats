import './SessionCard.css'

const DateDisplay = ({ date }) => {
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

export function SessionCard ({ name, start, end }) {
  const dateStart = new Date(start)
  const dateEnd = new Date(end)
  return (
    <div className='session-card'>
      <h3 className='session-card-title'>{name}</h3>
      <DateDisplay date={dateStart} />
      <DateDisplay date={dateEnd} />
    </div>
  )
}

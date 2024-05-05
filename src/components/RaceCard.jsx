import { Arrow } from '../assets/Arrow'
import { getFlagCdn } from '../services/f1api'
import './RaceCard.css'

export function RaceCard ({ country, countryCode, circuit, date, onClick }) {
  return (
    <article className='race' onClick={onClick}>
      <img src={getFlagCdn(countryCode)} alt={`flag of ${country}`} className='race-flag' />
      <div className='race-content'>
        <div className='race-content-date'>
          <span className='date-day'>
            {date.toLocaleString(undefined, { day: '2-digit' })}
          </span>
          <span className='date-month'>
            {date.toLocaleString(undefined, { month: 'short' })}
          </span>
        </div>
        <div className='race-content-location'>
          <span className='location-country'>{country}</span>
          <span className='location-circuit'>{circuit}</span>
        </div>
      </div>
      <Arrow className='arrow' />
    </article>
  )
}

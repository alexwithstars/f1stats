import { Arrow } from '../assets/Arrow.js'
import type { RaceV2 } from '../schemas/f1v2.js'
import { countryToAlpha2 } from 'country-to-iso'
import { getFlagCdn } from '../services/flag.js'
import './RaceCard.css'
import { fallbackFlagUrl } from '../misc/constants.js'

interface RaceCardProps {
  race: RaceV2
  onClick: () => void
}

export const RaceCard: React.FC<RaceCardProps> = ({ race, onClick }) => {
  const country = race.Circuit.Location.country
  const countryCode = countryToAlpha2(country) ?? ''
  const flagUrl = getFlagCdn(countryCode) ?? fallbackFlagUrl
  const date = new Date(race.date)
  return (
    <article className='race' onClick={onClick}>
      <img src={flagUrl} alt={`flag of ${country}`} className='race-flag' />
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
          <span className='location-circuit'>{race.Circuit.circuitId}</span>
        </div>
      </div>
      <Arrow className='arrow' />
    </article>
  )
}

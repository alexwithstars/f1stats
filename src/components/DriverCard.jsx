import { getFlagCdn } from '../services/f1api'
import './DriverCard.css'

export function DriverCard ({ number, imgUrl, name, country, team, color }) {
  const refinedImgUrl = imgUrl.replace(/1col/, '2col')
  return (
    <article className='driver' style={{ '--back': `#${color}` }}>
      <section className='driver-presentation'>
        <span className='driver-team-back'>{team}</span>
        <img src={refinedImgUrl} className='driver-img' />
        <span className='driver-team-front'>{team}</span>
      </section>
      <section className='driver-info'>
        <span className='driver-number'>{number}</span>
        <img src={getFlagCdn(country)} className='driver-flag' />
        <span className='driver-name'>{name}</span>
      </section>
    </article>
  )
}

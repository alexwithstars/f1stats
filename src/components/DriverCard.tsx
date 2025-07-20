import { fallbackAvatarUrl, fallbackFlagUrl } from '../misc/constants.js'
import { DriverV1 } from '../schemas/f1v1.js'
import { DriverV2 } from '../schemas/f1v2.js'
import { countryToAlpha2 } from 'country-to-iso'
import { getFlagCdn } from '../services/flag.js'
import './DriverCard.css'
import { convertIocCode } from 'convert-country-codes'

interface DriverCardProps {
  driverV1: DriverV1 | undefined
  driver: DriverV2
}

export const DriverCard: React.FC<DriverCardProps> = ({ driverV1, driver }) => {
  let refinedImgUrl = fallbackAvatarUrl
  let color = '0000'
  let team = 'uknown'
  let number = driver.permanentNumber?.toString().padStart(2, '0') ?? '00'
  let countryCode = countryToAlpha2(driver.nationality ?? '')

  if (driverV1 !== undefined) {
    if (driverV1.headshot_url !== null) {
      refinedImgUrl = driverV1.headshot_url.replace(/1col/, '2col')
    }
    if (driverV1.team_colour !== null) {
      color = driverV1.team_colour
    }
    countryCode = convertIocCode(driverV1.country_code ?? '')?.iso2 ?? countryCode
    team = driverV1.team_name
    number = driverV1.driver_number.toString().padStart(2, '0')
  }

  const flagUrl = getFlagCdn(countryCode ?? '') ?? fallbackFlagUrl

  return (
    <article className='driver' style={{ '--back': `#${color}` } as React.CSSProperties}>
      <section className='driver-presentation'>
        <span className='driver-team-back'>{team}</span>
        <img src={refinedImgUrl} className='driver-img' />
        <span className='driver-team-front'>{team}</span>
      </section>
      <section className='driver-info'>
        <span className='driver-number'>{number}</span>
        <img src={flagUrl} className='driver-flag' />
        <span className='driver-name'>{`${driver.givenName} ${driver.familyName.toUpperCase()}`}</span>
      </section>
    </article>
  )
}

import { convertIocCode } from 'convert-country-codes'
import { fallbackFlagUrl } from '../misc/constants'

export const getFlag = (cc, size = 64) => {
  const countryCode = convertIocCode(cc)?.iso2
  if (!countryCode) return fallbackFlagUrl
  if (![12, 24, 32, 48, 64].includes(size)) size = 64
  return `https://flagsapi.com/${countryCode}/flat/${size}.png`
}

export const getFlagCdn = (cc, size = 80) => {
  const countryCode = convertIocCode(cc)?.iso2
  if (!countryCode) return fallbackFlagUrl
  if (![20, 40, 80, 120].includes(size)) size = 80
  return `https://flagcdn.com/w${size}/${countryCode.toLowerCase()}.webp`
}

const getUniqueAsync = async (url) => {
  const response = await fetch(url)
  const data = await response.json()
  const unique = new Set(data.map(m => JSON.stringify(m)))
  return [...unique].map(u => JSON.parse(u))
}

export const getYearRaces = (year) => {
  return getUniqueAsync(`https://api.openf1.org/v1/meetings?year=${year}`)
}

export const getSessions = (meetingKey) => {
  return getUniqueAsync(`https://api.openf1.org/v1/sessions?meeting_key=${meetingKey}`)
}

export const getDrivers = async () => {
  const meetings = await getYearRaces(new Date().getFullYear())
  let meetingKey = 0
  meetings.forEach(m => {
    if (m.meeting_key > meetingKey) meetingKey = m.meeting_key
  })
  const sessions = await getSessions(meetingKey)
  let sessionKey = 0
  sessions.forEach(s => {
    if (s.session_key > sessionKey) sessionKey = s.session_key
  })
  return getUniqueAsync(`https://api.openf1.org/v1/drivers?session_key=${sessionKey}`)
}

import { parseDrivers, parseMeetings, parseSessions } from '../schemas/f1v1.js'
import type { DriverV1, MeetingV1, SessionV1 } from '../schemas/f1v1.js'

const BASE_URL = 'https://api.openf1.org/v1'

const getUniqueAsync = async (url: string): Promise<any[]> => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`)
  }
  const data = await response.json()
  const unique = new Set(data.map((m: any) => JSON.stringify(m)))
  return [...unique].map(u => JSON.parse(u as string))
}

export const getYearRaces = async (year: number): Promise<MeetingV1[]> => {
  const response = await getUniqueAsync(`${BASE_URL}/meetings?year=${year}`)
  const parsed = await parseMeetings(response)
  if (!parsed.success) {
    console.error('Failed to parse meetings:', parsed.error.issues)
    throw new Error('Failed to parse meetings')
  }
  return parsed.data
}

export const getSessions = async (): Promise<SessionV1[]> => {
  const response = await getUniqueAsync(`${BASE_URL}/sessions?meeting_key=latest`)
  const parsed = await parseSessions(response)
  if (!parsed.success) {
    console.error('Failed to parse sessions:', parsed.error.issues)
    throw new Error('Failed to parse sessions')
  }
  return parsed.data
}

export const getDrivers = async (): Promise<DriverV1[]> => {
  const response = await getUniqueAsync(`${BASE_URL}/drivers?session_key=latest`)
  const parsed = await parseDrivers(response)
  if (!parsed.success) {
    console.error('Failed to parse drivers:', parsed.error.issues)
    throw new Error('Failed to parse drivers')
  }
  return parsed.data
}

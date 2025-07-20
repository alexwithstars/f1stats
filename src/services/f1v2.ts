import { parseDrivers, parseRaces } from '../schemas/f1v2.js'
import type { DriverV2, RaceV2 } from '../schemas/f1v2.js'

const BASE_URL = 'https://api.jolpi.ca/ergast/f1'

const apiCaller = async (url: string): Promise<any> => {
  const fullUrl = new URL(`${BASE_URL}${url}`)
  fullUrl.searchParams.set('format', 'json')
  const response = await fetch(fullUrl)
  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`)
  }
  return await response.json()
}

export const getCurrentRaces = async (): Promise<RaceV2[]> => {
  const response = await apiCaller('/current/races')
  const parsed = await parseRaces(response?.MRData?.RaceTable?.Races)
  if (!parsed.success) {
    console.error('Failed to parse races:', parsed.error.issues)
    throw new Error('Failed to parse races')
  }
  return parsed.data
}

export const getCurrentDrivers = async (): Promise<DriverV2[]> => {
  const response = await apiCaller('/current/drivers')
  const parsed = await parseDrivers(response?.MRData?.DriverTable?.Drivers)
  if (!parsed.success) {
    console.error('Failed to parse drivers:', parsed.error.issues)
    throw new Error('Failed to parse drivers')
  }
  return parsed.data
}

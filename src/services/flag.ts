import { fallbackFlagUrl } from '../misc/constants.js'
import { convertIso2Code } from 'convert-country-codes'

export const getFlagCdn = (cc: string, size = 80): string => {
  const countryCode = convertIso2Code(cc)
  if (countryCode === undefined) return fallbackFlagUrl
  if (![20, 40, 80, 120].includes(size)) size = 80
  return `https://flagcdn.com/w${size}/${cc.toLowerCase()}.webp`
}

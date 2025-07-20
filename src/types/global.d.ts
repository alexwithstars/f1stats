declare module 'convert-country-codes' {
  export function convertIocCode (code: string): { iso2: string, iso3: string } | undefined
  export function convertIso2Code (code: string): { ioc: string, iso3: string } | undefined
  export function convertIso3Code (code: string): { ioc: string, iso2: string } | undefined
}

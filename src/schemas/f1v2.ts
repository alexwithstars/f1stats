import z from 'zod'
import { genericParseGenerator } from './all.js'

const locationSchema = z.object({
  lat: z.coerce.number(),
  long: z.coerce.number(),
  locality: z.string(),
  country: z.string()
})

const circuitSchema = z.object({
  circuitId: z.string(),
  url: z.url(),
  circuitName: z.string(),
  Location: locationSchema
})

const driverSchema = z.object({
  driverId: z.string(),
  permanentNumber: z.coerce.number().nullable(),
  code: z.string().nullable(),
  url: z.url().nullable(),
  givenName: z.string(),
  familyName: z.string(),
  dateOfBirth: z.iso.date().nullable(),
  nationality: z.string().nullable()
})

const sessionSchema = z.object({
  date: z.string(),
  time: z.string()
})

export const sessionNames = {
  firstPractice: 'Practice 1',
  secondPractice: 'Practice 2',
  thirdPractice: 'Practice 3',
  qualifying: 'Qualifying',
  sprint: 'Sprint',
  sprintQualifying: 'Sprint Qualifying',
  sprintShootout: 'Sprint Shootout'
}

const raceSchema = z.object({
  season: z.coerce.number(),
  round: z.coerce.number(),
  url: z.url().nullable(),
  raceName: z.string(),
  Circuit: circuitSchema,
  date: z.string(),
  time: z.string().nullable(),
  FirstPractice: sessionSchema.optional(),
  SecondPractice: sessionSchema.optional(),
  ThirdPractice: sessionSchema.optional(),
  Qualifying: sessionSchema.optional(),
  Sprint: sessionSchema.optional(),
  SprintQualifying: sessionSchema.optional(),
  SprintShootout: sessionSchema.optional()
})

export type DriverV2 = z.infer<typeof driverSchema>
export type RaceV2 = z.infer<typeof raceSchema>
export type SessionV2 = z.infer<typeof sessionSchema>

export const parseDrivers = genericParseGenerator(driverSchema.array())
export const parseRaces = genericParseGenerator(raceSchema.array())

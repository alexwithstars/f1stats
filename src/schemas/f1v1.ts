import z from 'zod'
import { genericParseGenerator } from './all.js'

const driverSchema = z.object({
  broadcast_name: z.string(),
  country_code: z.string().nullable(),
  driver_number: z.number(),
  first_name: z.string(),
  full_name: z.string(),
  headshot_url: z.string().nullable(),
  last_name: z.string(),
  meeting_key: z.number(),
  name_acronym: z.string(),
  session_key: z.number(),
  team_colour: z.string(),
  team_name: z.string()
})

const meetingSchema = z.object({
  circuit_key: z.number(),
  circuit_short_name: z.string(),
  country_code: z.string(),
  country_key: z.number(),
  country_name: z.string(),
  date_start: z.date(),
  gmt_offset: z.date(),
  location: z.string(),
  meeting_key: z.number(),
  meeting_official_name: z.string(),
  year: z.number()
})

const sessionSchema = z.object({
  circuit_key: z.number(),
  circuit_short_name: z.string(),
  country_code: z.string(),
  country_key: z.number(),
  country_name: z.string(),
  date_end: z.date(),
  date_start: z.date(),
  gmt_offset: z.date(),
  location: z.string(),
  meeting_key: z.number(),
  session_key: z.number(),
  session_name: z.string(),
  session_type: z.string(),
  year: z.number()
})

export type DriverV1 = z.infer<typeof driverSchema>
export type MeetingV1 = z.infer<typeof meetingSchema>
export type SessionV1 = z.infer<typeof sessionSchema>

export const parseDrivers = genericParseGenerator(driverSchema.array())
export const parseMeetings = genericParseGenerator(meetingSchema.array())
export const parseSessions = genericParseGenerator(sessionSchema.array())

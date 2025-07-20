import z from 'zod'

type genericParser<T> = (data: any) => Promise<z.ZodSafeParseResult<T>>

export function genericParseGenerator<T> (schema: z.ZodSchema<T>):
genericParser<T> {
  return async (data: any) => {
    return await schema.safeParseAsync(data)
  }
}

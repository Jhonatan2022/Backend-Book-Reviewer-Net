import { z } from 'zod'

const createSchema = (fields) =>
  z.object(
    Object.fromEntries(
      fields.map(({ name, rules }) => [
        name,
        z.string({ required_error: `${name} is required`, ...rules })
      ])
    )
  )

export const registerSchema = createSchema([
  { name: 'name', rules: { min: 3 } },
  { name: 'email', rules: { email: { message: 'Invalid email address' } } },
  {
    name: 'password',
    rules: { min: [6, 'Password must be at least 6 characters long'] }
  }
])

export const loginSchema = createSchema([
  { name: 'email', rules: { email: { message: 'Invalid email address' } } },
  {
    name: 'password',
    rules: { min: [6, 'Password must be at least 6 characters long'] }
  }
])

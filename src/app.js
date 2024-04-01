import express from 'express'
import session from 'express-session'
import authRoutes from './routes/auth.routes.js'

const app = express()
app.disable('x-powered-by')

app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  })
)
app.use(express.json())

app.use('/api', authRoutes)

export default app

import app from './app.js'
import { connectDB } from './db/connect.js'

connectDB()
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`)
})

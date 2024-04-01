import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/final-project')
    console.log('Database connected')
  } catch (error) {
    console.error(error.message)
  }
}

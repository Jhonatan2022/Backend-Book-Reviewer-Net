import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'

export const register = async (req, res) => {
  const { name, email, password } = req.body

  try {
    const emailExists = await User.findOne({ email })
    if (emailExists) return res.status(400).json({ message: 'Email already exists' })

    const passwordHash = await bcrypt.hash(password, 10)

    const newUser = new User({ name, email, password: passwordHash })

    const userSaved = await newUser.save()

    res.status(201).json({
      _id: userSaved._id,
      name: userSaved.name,
      email: userSaved.email
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

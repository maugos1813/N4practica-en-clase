import { pool } from '../config/db.js'

export const index = async (req, res) => {
  try {
    const usuarios = await pool.execute('SELECT * FROM users')
    res.json(usuarios[0])
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

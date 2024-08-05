import { pool } from '../config/db.js'

class User {
  static async all () {
    const usuarios = await pool.execute('SELECT * FROM users')
    return usuarios[0]
  }

  static async getById (id) {
    const usuario = await pool.execute('SELECT * FROM users WHERE user_id = ?', [id])
    return usuario[0]
  }

  static async store () {
    const usuarios = await pool.execute('SELECT * FROM users')
    return usuarios[0]
  }
}

export default User

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

  static async create ({ fName, mName, lName, username, email, password }) {
    const campos = ['f_name', 'username', 'email', 'password']
    const values = [fName, username, email, password]

    if (mName) {
      campos.push('m_name')
      values.push(mName)
    }

    if (lName) {
      campos.push('l_name')
      values.push(lName)
    }

    const camposString = campos.join(', ')
    const placeholders = values.map(() => '?').join(', ')

    const nuevoUsuario = await pool.execute(`INSERT INTO users(${camposString}) VALUES (${placeholders})`, values)

    return nuevoUsuario
  }
}

export default User

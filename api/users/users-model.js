const db = require('../../data/dbConfig.js')

module.exports = {
  insert,
  remove,
  getAll,
  getById,
}

function getAll() {
  return db('users')
}

function getById(id) {
  return db('users').where('id', id).first()
}

async function insert(user) {
    const [id] = await db("users").insert(user)
    return getById(id)
}

function remove(id) {
    return db('users')
    .del()
    .where('id', id)
}

const db = require('../data/db-config')

function getAllUsers() { 
    return db('users') 
}

async function insertUser(user) {
  const [newUserObject] = await db('users').insert(user, ['user_id', 'username', 'password'])
  return newUserObject 
}

function findBy(filter) {
  return db('users').where(filter)
}

module.exports = {
    getAllUsers,
    insertUser,
    findBy
}
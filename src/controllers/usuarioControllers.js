const Database = require('./database');

class UserController {
  constructor() {
    this.db = new Database({
      host: 'localhost',
      user: 'asd',
      password: '1234',
      database: 'veterinaria'
    });
  }

  getAllUsers(callback) {
    const sqlQuery = 'SELECT * FROM personas';
    this.db.query(sqlQuery, [], callback);
  }

  addUser(user, callback) {
    const sqlQuery = 'INSERT INTO usuarios personas ?';
    this.db.query(sqlQuery, user, callback);
  }
}

module.exports = UserController;


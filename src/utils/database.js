

const mysql = require('mysql');

class Database {
  constructor(config) {
    this.connection = mysql.createConnection(config);
  }

  connect() {
    this.connection.connect((err) => {
      if (err) {
        console.error('Error connecting to database: ' + err.stack);
        return;
      }
      console.log('Connected to database with id ' + this.connection.threadId);
    });
  }

  disconnect() {
    this.connection.end((err) => {
      if (err) {
        console.error('Error disconnecting from database: ' + err.stack);
        return;
      }
      console.log('Disconnected from database');
    });
  }

  query(sql, values, callback) {
    this.connection.query(sql, values, (err, results, fields) => {
      if (err) {
        console.error('Error executing query: ' + err.stack);
        return callback(err, null);
      }
      callback(null, results);
    });
  }
}

module.exports = Database;

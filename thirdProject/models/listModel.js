var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit: 5,
  host: 'localhost',
  user: 'root',
  password: 'Three1215!',
  database: 'tutorial'
});

module.exports = {
    getList(callback) {
        pool.query('SELECT BoardNumber, Writer, Title, Hit, Updatetime from board', (err, rows) => {
            if(err) throw err;
            callback(rows);
        });
    }
}

var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 5,
    host: 'localhost',
    user: 'root',
    password: 'Three1215!',
    database: 'tutorial'
});

exports.getData = (BoardNumber, callback) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query('SELECT BoardNumber, title, content, hit FROM board WHERE BoardNumber=?;',BoardNumber, (err, row, fields) => {
          if (err) throw err;
          connection.query('UPDATE board SET Hit = Hit + 1 WHERE BoardNumber = ?', BoardNumber, (err, result) => {
            connection.release();
            if (err) throw err;
            callback(row);
        });
      });
    });
}

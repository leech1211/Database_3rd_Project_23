var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit: 5,
  host: 'localhost',
  user: 'root',
  password: 'Three1215!',
  database: 'tutorial'
});

exports.logincheck = function(username, password, callback) {
    pool.getConnection(function(err, connection) {
      if(err) {
        console.error("err: " + err);
        callback(err);
        return;
      }

      var sql = "SELECT UserId, UserPW FROM user WHERE UserID = ? AND UserPW = ?";
      connection.query(sql, [username, password], function(err, rows) {
        connection.release();

        if(err) {
          console.error("err: " + err);
          callback(err);
          return;
        }

        callback(null, rows);
      });
    });
}
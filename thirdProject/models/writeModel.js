var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit: 5,
  host: 'localhost',
  user: 'root',
  password: 'Three1215!',
  database: 'tutorial'
});

module.exports = {
  insertData(datas, callback) {
      var sql = "INSERT INTO board (Writer, Updatetime, Content, Title, Hit) VALUES (?, ?, ?, ?, ?)";
      pool.getConnection(function(err, connection) {
          if (err) console.error("err : " + err);
          connection.query(sql, datas, function(err, rows){
              if (err) console.error("err : " + err);
              console.log("rows: " + JSON.stringify(rows));
              callback();
              connection.release(); // 커넥션 반환
          });
      });
  }
};

module.exports.getUserId = (userName, callback) => {
  pool.getConnection((err, connection) => {
      if (err) throw err;
      var sql = 'SELECT UserNumber FROM user WHERE UserID = ?';
      connection.query(sql, userName, (err, row) => {
          connection.release();
          if (err) throw err;
          callback(row[0].UserNumber);
      });
  });
}
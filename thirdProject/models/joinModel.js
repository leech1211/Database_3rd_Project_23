var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit: 5,
  host: 'localhost',
  user: 'root',
  password: 'Three1215!',
  database: 'tutorial'
});

module.exports = {
    insertData(datas, callback) {
        var sql = "INSERT INTO user(UserName, UserID, UserPW, UserPhone, UserAge, User_start_join_day, UserMgn) VALUES(?,?,?,?,?,?,?)";
        pool.getConnection(function(err, connection) {
            if(err) console.error("err : "+err);
            connection.query(sql, datas, function(err, rows){
                if(err) console.error("err : "+err);
                console.log("rows: "+JSON.stringify(rows));
                callback();
                connection.release(); // 커넥션 반환
            });
        });
    }
};
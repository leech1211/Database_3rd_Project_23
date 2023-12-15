var mysql = require('mysql');
var connection = mysql.createConnection({
    connectionLimit: 5,
    host: 'localhost',
    user: 'root',
    password: 'Three1215!',
    database: 'tutorial'
});

exports.deleteData = (idx,  callback) => {
    var sql = "DELETE FROM board WHERE BoardNumber=?";
    connection.query(sql, [idx], (err, result) => {
        if (err) {
            console.error("글 삭제 중 에러 발생 err: " + err);
        }
        callback(result);
    });
};

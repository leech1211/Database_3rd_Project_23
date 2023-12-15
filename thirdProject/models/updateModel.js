var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit: 5,
  host: 'localhost',
  user: 'root',
  password: 'Three1215!',
  database: 'tutorial'
});

exports.getData = (BoardNumber, callback) => {
    console.log('BoardNumber: ', BoardNumber);
    pool.getConnection((err, connection) => {
        if (err) throw err;
        var sql = 'SELECT title, content, BoardNumber FROM board WHERE BoardNumber = ?';
        connection.query(sql, [BoardNumber], (err, row) => {
            connection.release();
            if (err) throw err;
            callback(row);
        });
    });
}

exports.updateData = (datas, callback) => {
    console.log(datas)
    pool.getConnection((err, connection) => {
        if (err) throw err;
        var sql = "UPDATE board SET title=?, content=? WHERE Writer=? AND BoardNumber=?";
        connection.query(sql, [datas[1],datas[2],datas[0],datas[3]], (err, result) => {
            connection.release();
            if (err) console.error("글 수정 중 에러 발생 err: " + err);
            if (result && result.affectedRows !== undefined) {
                callback(result);
            } else {
                callback({ affectedRows: 0 });
            }
        });
    });
}


var mysql = require('mysql');
var connection = mysql.createConnection({
    connectionLimit:5,
    host: 'localhost',
    user: 'root',
    password: 'Three1215!',
    database: 'tutorial'
});


module.exports = {
    getUserRentalHistory: (userName,  callback) => {
        console.log("model진입");
        // 사용자 이름을 통해 User 테이블에서 UserNumber를 검색
        connection.query('SELECT UserNumber FROM User WHERE UserName = ?', [userName], (err, userRows, fields) => {
            if (err) throw err;

            if (userRows.length > 0) {
                const userNumber = userRows[0].UserNumber; // 첫 번째 결과에서 UserNumber 추출
                console.log("model userNumber : " + userNumber);
                // UserNumber를 사용하여 cycle_rental 테이블에서 대여 내역 검색
                connection.query('SELECT * FROM cycle_rental WHERE RentalUser = ?', [userNumber], (err, rentalRows, fields) => {
                    if (err) throw err;
                    callback(rentalRows);
                });
            } else {
                // 사용자를 찾을 수 없을 때의 처리 (예: 사용자가 없음)
                callback([]);
            }
        });
    }
}




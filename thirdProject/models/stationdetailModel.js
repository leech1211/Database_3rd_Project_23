// var mysql = require('mysql');
// var connection = mysql.createConnection({
//     connectionLimit:5,
//     host: 'localhost',
//     user: 'root',
//     password: 'Three1215!',
//     database: 'tutorial'
// });

// module.exports = {
//     getListDetail: function (idx, callback) {
//         const sql = `
//             SELECT c.CycleNumber, c.Failure, s.StationNumber, s.StationLocate
//             FROM Cycle_info c 
//             LEFT JOIN Station_info s ON c.Now_station = s.StationNumber
//             WHERE c.Now_station = ?`;
//         connection.query(sql, idx, (err, rows, fields) => {
//             if (err) throw err;
//             callback(rows);
//         });
//     }
// };

var mysql = require('mysql');
var connection = mysql.createConnection({
    connectionLimit: 5,
    host: 'localhost',
    user: 'root',
    password: 'Three1215!',
    database: 'tutorial'
});

module.exports = {
    getListDetail: function (idx, callback) {
        const sql1 = `
            SELECT DISTINCT c.CycleNumber, c.Failure, s.StationNumber, s.StationLocate
            FROM Cycle_info c
            LEFT JOIN Station_info s ON c.Now_station = s.StationNumber
            WHERE c.Now_station = ? 
        `;

        const sql2 = `
            SELECT c.Rental_end_station
            FROM Cycle_rental c
            WHERE c.Rental_start_station = ?;
        `;

        const sql3 = `
            SELECT c.Rental_start_station
            FROM Cycle_rental c
            WHERE c.Rental_end_station = ?;
        `;

        connection.query(sql1, idx, (err, rows1) => {
            if (err) throw err;

            connection.query(sql2, idx, (err, rows2) => {
                if (err) throw err;

                connection.query(sql3, idx, (err, rows3) => {
                    if (err) throw err;

                    const result1 = rows1;
                    const result2 = rows2;
                    const result3 = rows3;

                    // 이후 result1, result2, result3를 합치거나 처리하여 원하는 방식으로 반환할 수 있습니다.
                    callback(result1, result2, result3);
                });
            });
        });
    }
};





// var mysql = require('mysql');
// var connection = mysql.createConnection({
//     connectionLimit:5,
//     host: 'localhost',
//     user: 'root',
//     password: 'Three1215!',
//     database: 'tutorial'
// });
var mysql = require('mysql');
var connection = mysql.createConnection({
    connectionLimit:5,
    host: 'localhost',
    user: 'root',
    password: 'Three1215!',
    database: 'tutorial'
});
module.exports = {
    getList(callback) {
        connection.query('SELECT CycleNumber, Now_rental, Failure, Now_station FROM Cycle_info;', (err, rows, fields) => {
            if(err) throw err;
            callback(rows);
        }); 
    }
}
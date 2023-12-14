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
    getData: function(CycleNumber, callback) {
        connection.query("SELECT CycleNumber, Now_rental, Failure, Now_station FROM Cycle_info WHERE CycleNumber=?;", CycleNumber, (err, row, fields) => {
            if(err) throw err;
            callback(row);
        });    
    }
}

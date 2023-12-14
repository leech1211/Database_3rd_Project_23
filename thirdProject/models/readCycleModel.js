var mysql = require('mysql');
var connection = mysql.createConnection({
    connectLimit: 5,
    host: 'localhost',
    user: 'root',
    password: 'xodnd@8533',
    database: 'service'
});

module.exports = {
    getData: function(CycleNumber, callback) {
        connection.query("SELECT CycleNumber, Now_rental, Failure, Now_station FROM Cycle_info WHERE CycleNumber=?;", CycleNumber, (err, row, fields) => {
            if(err) throw err;
            callback(row);
        });    
    }
}

var mysql = require('mysql');
var connection = mysql.createConnection({
    connectLimit: 5,
    host: 'localhost',
    user: 'root',
    password: 'xodnd@8533',
    database: 'service'
});

module.exports = {
    getData: function(FailNumber, callback){
        connection.query("SELECT FailNumber, UserNumber, FailContent, FailData, FailCycle, Failure_success FROM Failure_status WHERE FailNumber=?;", FailNumber, (err, row, fields) => {
            if(err) throw err;
            callback(row);
        });    
    }
}

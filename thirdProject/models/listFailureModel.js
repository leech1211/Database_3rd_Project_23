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
        connection.query('SELECT FailNumber, UserNumber, FailContent, FailData, FailCycle, Failure_success FROM Failure_status;', (err, rows, fields) => {
            if(err) throw err;
            callback(rows);
        }); 
    }
}


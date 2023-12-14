var mysql = require('mysql');
var connection = mysql.createConnection({
    connectLimit: 5,
    host: 'localhost',
    user: 'root',
    password: 'xodnd@8533',
    database: 'service'
});

module.exports = {
    insertData: function(datas, callback) {
        var sql = "INSERT INTO Failure_status (UserNumber, FailContent, FailData, FailCycle, Failure_success) VALUES (?, ?, ?, ?, ?);";
        connection.query(sql, datas, function(err, rows) {
            if(err) console.error("err : " + err);
            console.log("rows : " + JSON.stringify(rows));
            callback();             
        });
    },
    deleteData: function(FailNumber, callback) {
        var sql = "DELETE FROM Failure_status WHERE FailNumber = ?;";
        connection.query(sql, [FailNumber], function(err, result) {
            if(err) console.error("err : " + err);
            console.log("result : " + JSON.stringify(result));
            callback();
        });
    },
    getFailureData: function(FailNumber, callback) {
        var sql = "SELECT FailNumber, UserNumber, FailContent, FailData, FailCycle, Failure_success FROM Failure_status WHERE FailNumber=?;";
        connection.query(sql, FailNumber, function(err,row) {
            if(err) console.error("err : " + err);
            console.log('전달받은 FailNumber: ',FailNumber);
            callback(row);
        });   
    },
    updateData: function(datas, FailNumber, callback) { 
        var sql = "UPDATE Failure_status SET UserNumber=?, FailContent=?, FailData=?, FailCycle=?, Failure_success=? WHERE FailNumber=?;";
        datas.push(FailNumber); 
        console.log("전달받은 datas : ", datas);
        connection.query(sql, datas, function(err, result) {
            if(err) console.error("err : " + err);
            console.log("result : " + JSON.stringify(result));
            callback();
        });
    }
};

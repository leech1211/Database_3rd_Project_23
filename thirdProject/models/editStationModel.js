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
    insertData: function(datas, callback) {
        var sql = "INSERT INTO Station_info (stationLocate, Nowcycle, TodayCycleRental, TodayCycleInput, Operation) VALUES (?, ?, ?, ?, ?);";
        connection.query(sql, datas, function(err, rows) {
            if(err) console.error("err : " + err);
            console.log("rows : " + JSON.stringify(rows));
            callback();             
        });
    },
    deleteData: function(StationNumber, callback) {
        var sql1 = "UPDATE Cycle_info SET Now_station = NULL WHERE Now_station = ?;";
        var sql2 = "DELETE FROM Station_info WHERE StationNumber = ?;";
        connection.query(sql1, [StationNumber], function(err, result) {
            if(err) console.error("err : " + err);
            console.log("result : " + JSON.stringify(result));

            connection.query(sql2, [StationNumber], function(err, result) {
                if(err) console.error("err : " + err);
                console.log("result : " + JSON.stringify(result));
                callback();
            });
        });
    },
    getStationData: function(StationNumber, callback) {
        var sql = "SELECT StationNumber, stationLocate, Nowcycle, TodayCycleRental, TodayCycleInput, Operation FROM Station_info WHERE StationNumber=?;";
        connection.query(sql, StationNumber, function(err,row) {
            if(err) console.error("err : " + err);
            console.log('전달받은 StationNumber: ',StationNumber);
            callback(row);
        });   
    },
    updateData: function(datas, StationNumber, callback) { // 변경된 부분
        var sql = "UPDATE Station_info SET stationLocate=?, Nowcycle=?, TodayCycleRental=?, TodayCycleInput=?, Operation=? WHERE StationNumber=?;";
        datas.push(StationNumber); // 변경된 부분
        console.log("전달받은 datas : ", datas);
        connection.query(sql, datas, function(err, result) {
            if(err) console.error("err : " + err);
            console.log("result : " + JSON.stringify(result));
            callback();
        });
    }
};

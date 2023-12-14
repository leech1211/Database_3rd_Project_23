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
        var CycleInfoSql = "INSERT INTO Cycle_info (Now_rental, Failure, Now_station) VALUES (?, ?, ?);";
        var StationInfoSql = "UPDATE Station_info SET Nowcycle = Nowcycle + 1 WHERE StationNumber = ?;";
        
        connection.query(CycleInfoSql, datas, function(err, rows) {
            if(err) console.error("err : " + err);
            console.log("rows : " + JSON.stringify(rows));
            
            connection.query(StationInfoSql, datas[2], function(err, result) {
                if(err) console.error("err : " + err);
                console.log("result : " + JSON.stringify(result));
                callback();
            });             
        });
    },
    deleteData: function(CycleNumber, callback) {
        var StationInfoSql = "UPDATE Station_info SET Nowcycle = Nowcycle - 1 WHERE StationNumber = (SELECT Now_station FROM Cycle_info WHERE CycleNumber = ?);";
        var CycleInfoSql = "DELETE FROM Cycle_info WHERE CycleNumber = ?;";
        
        connection.query(StationInfoSql, [CycleNumber], function(err, result) {
            if(err) console.error("err : " + err);
            console.log("result : " + JSON.stringify(result));
    
            connection.query(CycleInfoSql, [CycleNumber], function(err, result) {
                if(err) console.error("err : " + err);
                console.log("result : " + JSON.stringify(result));
                callback();
            });             
        });
    },
    getCycleData: function(CycleNumber, callback) {
        var sql = "SELECT CycleNumber, Now_rental, Failure, Now_station FROM Cycle_info WHERE CycleNumber=?;";
        connection.query(sql, CycleNumber, function(err,row) {
            if(err) console.error("err : " + err);
            console.log('전달받은 CycleNumber: ',CycleNumber);
            callback(row);
        });   
    },
    updateData: function(datas, CycleNumber, callback) { 
        var oldStationSql = "SELECT Now_station FROM Cycle_info WHERE CycleNumber=?;";
        var CycleInfoSql = "UPDATE Cycle_info SET Now_rental=?, Failure=?, Now_station=? WHERE CycleNumber=?;";
        var decreaseStationSql = "UPDATE Station_info SET Nowcycle = Nowcycle - 1 WHERE StationNumber = ?;";
        var increaseStationSql = "UPDATE Station_info SET Nowcycle = Nowcycle + 1 WHERE StationNumber = ?;";
    
        connection.query(oldStationSql, [CycleNumber], function(err, row) {
            if(err) console.error("err : " + err);
            console.log('전달받은 CycleNumber: ', CycleNumber);
            var oldStation = row[0].Now_station;
    
            datas.push(CycleNumber);
            console.log("전달받은 datas : ", datas);
            connection.query(CycleInfoSql, datas, function(err, result) {
                if(err) console.error("err : " + err);
                console.log("result : " + JSON.stringify(result));
    
                if(oldStation != datas[2]) {
                    connection.query(decreaseStationSql, [oldStation], function(err, result) {
                        if(err) console.error("err : " + err);
                        console.log("result : " + JSON.stringify(result));
    
                        connection.query(increaseStationSql, [datas[2]], function(err, result) {
                            if(err) console.error("err : " + err);
                            console.log("result : " + JSON.stringify(result));
                            callback();
                        });
                    });
                } else {
                    callback();
                }
            });
        });
    }
};

var mysql = require('mysql');
var connection = mysql.createConnection({
    connectLimit: 5,
    host: 'localhost',
    user: 'root',
    password: 'Three1215!',
    database: 'tutorial'
});

module.exports = {
    getList(callback) { // 대여 목록 출력
        connection.query('SELECT * FROM Cycle_rental;', (err, rows, fields) => {
            if(err) throw err;
            callback(rows);
        }); 
    },
    rentCycle: function(datas, callback) { // 대여 진행
        var CycleInfoSql = "UPDATE Cycle_info SET Now_rental = 1 WHERE CycleNumber = ?;";
        var RentalSql = "INSERT INTO Cycle_rental (CycleNumber, RentalUser, RentalDate_start, Rental_start_station) VALUES (?, ?, NOW(), ?);";
        var StationInfoSql = "UPDATE Station_info SET Nowcycle = Nowcycle - 1, TodayCycleRental = TodayCycleRental + 1 WHERE StationNumber = ?;";
        
        connection.query(RentalSql, datas, function(err, result) {
            if(err) console.error("err : " + err);
            console.log("result : " + JSON.stringify(result));
            
            connection.query(CycleInfoSql, [datas[0]], function(err, rows) {
                if(err) console.error("err : " + err);
                console.log("rows : " + JSON.stringify(rows));
                
                connection.query(StationInfoSql, [datas[2]], function(err, result) {
                    if(err) console.error("err : " + err);
                    console.log("result : " + JSON.stringify(result));
                    callback();
                }); 
            });              
        });
    },
    returnCycle: function(datas, callback) { // 반납 진행
        var CycleInfoSql = "UPDATE Cycle_info SET Now_rental = 0 WHERE CycleNumber = ?;";
        var RentalSql = "UPDATE Cycle_rental SET RentalDate_end = NOW(), Rental_end_station = ? WHERE CycleNumber = ? AND RentalDate_end IS NULL;";
        var StationInfoSql = "UPDATE Station_info SET Nowcycle = Nowcycle + 1, TodayCycleInput = TodayCycleInput + 1 WHERE StationNumber = ?;";

        connection.query(RentalSql, datas, function(err, result) {
            if(err) console.error("err : " + err);
            console.log("result : " + JSON.stringify(result));

            connection.query(CycleInfoSql, [datas[1]], function(err, rows) {
                if(err) console.error("err : " + err);
                console.log("rows : " + JSON.stringify(rows));

                connection.query(StationInfoSql, [datas[0]], function(err, result) {
                    if(err) console.error("err : " + err);
                    console.log("result : " + JSON.stringify(result));
                    callback();
                });
            });
        });
    }
};

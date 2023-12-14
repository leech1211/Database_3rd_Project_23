var mysql = require('mysql');
var connection = mysql.createConnection({
    connectLimit: 5,
    host: 'localhost',
    user: 'root',
    password: 'xodnd@8533',
    database: 'service'
});

module.exports={getData: function(StationNumber, callback){
        connection.query("SELECT StationNumber, stationLocate, Nowcycle, TodayCycleRental, TodayCycleInput, Operation FROM Station_info WHERE StationNumber=?;",StationNumber,(err,row,fileds)=>{
            if(err) throw err;
            callback(row);
        });    
    }
}

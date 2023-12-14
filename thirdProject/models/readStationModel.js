var mysql = require('mysql');
var connection = mysql.createConnection({
    connectionLimit:5,
    host: 'localhost',
    user: 'root',
    password: 'Three1215!',
    database: 'tutorial'
});

module.exports={getData: function(StationNumber, callback){
        connection.query("SELECT StationNumber, stationLocate, Nowcycle, TodayCycleRental, TodayCycleInput, Operation FROM Station_info WHERE StationNumber=?;",StationNumber,(err,row,fileds)=>{
            if(err) throw err;
            callback(row);
        });    
    }
}





var mysql = require('mysql');
var connection = mysql.createConnection({
    connectLimit: 5,
    host: 'localhost',
    user: 'root',
    password: 'xodnd@8533',
    database: 'service'
});

module.exports={getList(callback){
    connection.query('SELECT StationNumber, stationLocate, Nowcycle, TodayCycleRental, TodayCycleInput, Operation FROM Station_info;',(err,rows,fileds)=>{
        if(err) throw err;
        callback(rows);
    }); 
}
}
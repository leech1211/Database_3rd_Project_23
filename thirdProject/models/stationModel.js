var mysql = require('mysql');
var connection = mysql.createConnection({
    connectionLimit:5,
    host: 'localhost',
    user: 'root',
    password: 'Three1215!',
    database: 'tutorial'
});

module.exports={getList(callback){
    connection.query('SELECT * FROM station_info',(err,rows,filds)=>{
        if(err) throw err;
        callback(rows);
    });
}}




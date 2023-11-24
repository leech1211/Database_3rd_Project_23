var mysql = require('mysql');
var connection = mysql.createConnection({
    connectionLimit:5,
    host: 'localhost',
    user: 'root',
    password: 'Three1215!',
    database: 'tutorial'
});

module.exports={getList(callback){
    connection.query('SELECT * FROM cycle_rental',(err,rows,filds)=>{
        if(err) throw err;
        callback(rows);
    });
}}


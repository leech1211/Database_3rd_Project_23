
var mysql = require('mysql');
var connection = mysql.createConnection({
    connectionLimit: 5,
    host: 'localhost',
    user: 'root',
    password: 'Three1215!',
    database: 'tutorial'
});

// module.exports={getList(callback){
//     connection.query('SELECT U.UserName, U.UserPhone, U.UserAge, U.User_start_join_day, CR.RentalUser, SUM(CR.Distance) AS TotalDistance FROM User U JOIN Cycle_rental CR ON U.UserNumber = CR.RentalUser GROUP BY U.UserName, U.UserPhone, U.UserAge, U.User_start_join_day, CR.RentalUser',(err,rows,filds)=>{
//         if(err) throw err;
//         callback(rows);
//     });
// }}


module.exports = {
    getList: function (callback) {
        const sql1 = `
        SELECT U.UserName, U.UserPhone, U.UserAge, U.User_start_join_day, CR.RentalUser, SUM(CR.Distance) AS TotalDistance FROM User U JOIN Cycle_rental CR ON U.UserNumber = CR.RentalUser GROUP BY U.UserName, U.UserPhone, U.UserAge, U.User_start_join_day, CR.RentalUser 
        `;

        const sql2 = `
        SELECT AVG(Distance) AS AverageDistance FROM Cycle_rental;
        `;

        connection.query(sql1, (err, rows1) => {
            if (err) throw err;

            connection.query(sql2,(err, rows2) => {
                if (err) throw err;

                const result1 = rows1;
                const result2 = rows2;

                // 이후 result1, result2 합치거나 처리하여 원하는 방식으로 반환할 수 있습니다.
                callback(result1, result2);
            });
        });
    }
};



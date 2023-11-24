var rentalhistoryModel=require('../models/rentalhistoryModel');
var rentalhistoryUserModel=require('../models/rentalhistoryUserModel');
var expess=require('express');

exports.getList=(req,res,next)=>{
    rentalhistoryModel.getList((rows)=>{
        console.log('rows: '+JSON.stringify(rows));
        console.log("따릉이 대여내역 조회");
        res.render('CheckCycleRentalHistory',{title: "따릉이 대여내역 조회", rows: rows});
        //res.redirect('/CheckCycleRentalHistory.ejs');
    });
}

exports.getUserRentalHistory = (userName, callback) => {
    rentalhistoryUserModel.getUserRentalHistory(userName, (userRows) => {
        console.log('getUserRentalHistory: '+JSON.stringify(userRows));
        callback(userRows);
    });
}




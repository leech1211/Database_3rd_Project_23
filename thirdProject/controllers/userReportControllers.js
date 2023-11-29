var userReportModel=require('../models/userReportModel');
var expess=require('express');

exports.getList=(req,res,next)=>{
    userReportModel.getList((result1, result2)=>{
        console.log('Result 1: ' + JSON.stringify(result1));
        console.log('Result 2: ' + JSON.stringify(result2));
        console.log("유저 내역 조회");
        res.render('UserReportPage',{title: "사용자 내역 조회", rows1: result1,rows2: result2});
    });
}



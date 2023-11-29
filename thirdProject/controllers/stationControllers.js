var stationModel=require('../models/stationModel');
var expess=require('express');

exports.getList=(req,res,next)=>{
    stationModel.getList((rows)=>{
        console.log('rows: '+JSON.stringify(rows));
        console.log("따릉이 대여소 내역 조회");
        res.render('CycleStationList',{title: "따릉이 대여소내역 조회", rows: rows});
    });
}





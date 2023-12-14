var readModel=require('../models/readStationModel');
var express=require('express');

module.exports={
    readData: function (req, res, next){
        var StationNumber = req.query.StationNumber;
        readModel.getData(StationNumber,function(row){
            console.log('대여소 조회 결과 확인 : ', row);
            
            res.render('readStation',{title: "대여소 정보 조회", row: row[0]});
        });
    }
}
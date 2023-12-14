var readModel = require('../models/readCycleModel');
var express = require('express');

module.exports = {
    readData: function (req, res, next){
        var CycleNumber = req.query.CycleNumber;
        readModel.getData(CycleNumber, function(row){
            console.log('자전거 조회 결과 확인 : ', row);
            
            res.render('readCycle', {title: "자전거 정보 조회", row: row[0]});
        });
    }
}

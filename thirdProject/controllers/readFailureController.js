var readModel = require('../models/readFailureModel');
var express = require('express');

module.exports = {
    readData: function (req, res, next){
        var FailNumber = req.query.FailNumber;
        readModel.getData(FailNumber, function(row){
            console.log('고장 정보 조회 결과 확인 : ', row);
            
            res.render('readFailure', {title: "고장 정보 조회", row: row[0]});
        });
    }
}

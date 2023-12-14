var editModel = require('../models/editCycleModel');
var express = require('express');

exports.updateForm = function(req, res, next){
    var CycleNumber = req.query.CycleNumber;
    console.log('Cycle Number 확인 : ', CycleNumber);
    editModel.getCycleData(CycleNumber, function(rows){
        var row = rows[0]; 

        console.log('수정 중인 자전거 조회 결과 확인 : ', row);

        res.render('updateCycle', {title: "자전거 정보 수정", row: row});
    });
};

exports.updateData = function(req, res){
    console.log('result of req.body = ',req.body);
    var CycleNumber = req.body.CycleNumber; 
    var datas = [req.body.Now_rental, req.body.Failure, req.body.Now_station];
        editModel.updateData(datas, req.body.CycleNumber, function(){ 
        console.log('수정할 데이터 확인 : ', req.body.Now_rental);
        console.log('수정할 데이터 확인 : ', req.body.Failure);
        console.log('수정할 데이터 확인 : ', req.body.Now_station);
        console.log('수정할 데이터 확인 : ', CycleNumber); 
        res.redirect('/cycle');
    });
};

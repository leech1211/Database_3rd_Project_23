var editModel = require('../models/editFailureModel');
var express = require('express');

exports.updateForm = function(req, res, next){
    var FailNumber = req.query.FailNumber;
    console.log('Fail Number 확인 : ', FailNumber);
    editModel.getFailureData(FailNumber, function(rows){
        var row = rows[0]; // 수정된 부분

        console.log('수정 중인 고장 정보 조회 결과 확인 : ', row);

        res.render('updateFailure', {title: "고장 정보 수정", row: row});
    });
};

exports.updateData = function(req, res){
    console.log('result of req.body = ',req.body);
    var FailNumber = req.body.FailNumber; 
    var datas = [req.body.UserNumber, req.body.FailContent, req.body.FailData, req.body.FailCycle, req.body.Failure_success];
    editModel.updateData(datas, req.body.FailNumber, function(){ 
        console.log('수정할 데이터 확인 : ', req.body.UserNumber);
        console.log('수정할 데이터 확인 : ', req.body.FailContent);
        console.log('수정할 데이터 확인 : ', req.body.FailData);
        console.log('수정할 데이터 확인 : ', req.body.FailCycle);
        console.log('수정할 데이터 확인 : ', req.body.Failure_success);
        console.log('수정할 데이터 확인 : ', FailNumber); 
        res.redirect('/failure');
    });
};

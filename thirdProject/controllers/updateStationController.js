var editModel = require('../models/editStationModel');
var express = require('express');

exports.updateForm = function(req, res, next){
    var StationNumber = req.query.StationNumber;
    console.log('Station Number 확인 : ', StationNumber);
    editModel.getStationData(StationNumber, function(rows){
        var row = rows[0]; // 수정된 부분

        console.log('수정 중인 대여소 조회 결과 확인 : ', row);

        res.render('updateStation', {title: "대여소 정보 수정", row: row});
    });
};

exports.updateData = function(req, res){
    console.log('result of req.body = ',req.body);
    var StationNumber = req.body.StationNumber; 
    var datas = [req.body.stationLocate, req.body.Nowcycle, req.body.TodayCycleRental, req.body.TodayCycleInput, req.body.Operation];
        editModel.updateData(datas, req.body.StationNumber, function(){ 
        console.log('수정할 데이터 확인 : ', req.body.stationLocate);
        console.log('수정할 데이터 확인 : ', req.body.Nowcycle);
        console.log('수정할 데이터 확인 : ', req.body.TodayCycleRental);
        console.log('수정할 데이터 확인 : ', req.body.TodayCycleInput);
        console.log('수정할 데이터 확인 : ', req.body.Operation);
        console.log('수정할 데이터 확인 : ', StationNumber); 
        res.redirect('/station');
    });
};

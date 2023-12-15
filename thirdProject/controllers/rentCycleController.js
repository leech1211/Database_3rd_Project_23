var rentalModel = require('../models/rentCycleModel');
var express = require('express');

exports.getList=(req,res,next)=>{ // 대여 목록 출력
    rentalModel.getList((rows)=>{
        console.log('rows: '+JSON.stringify(rows));
        res.render('listRental',{title: "대여 현황", rows: rows});
    });
};

exports.getListFirst=(req,res)=>{
    res.redirect('/rent');
};

exports.rentForm = function(req, res, next){ // 사용자 번호, 대여할 자전거, 대여할 대여소 입력
    var CycleNumber = req.query.CycleNumber;
    console.log(req.body);
    console.log('Rent Cycle Number 확인 : ', CycleNumber);
    
    res.render('rental', {title: "자전거 대여", CycleNumber: CycleNumber});
};

exports.rentCycle = function(req, res){
    console.log('result of req.body = ',req.body);
    var datas = [req.body.CycleNumber, req.body.UserNumber, req.body.Rental_start_station];
    rentalModel.rentCycle(datas, function(){ 
        console.log('대여할 자전거 확인 : ', req.body.CycleNumber);
        console.log('대여할 사용자 확인 : ', req.body.UserNumber);
        console.log('대여 시작 대여소 확인 : ', req.body.Rental_start_station);
        
        res.redirect('/rent'); 
    });
};

exports.returnForm = function(req, res, next){ // 반납할 대여소만 입력
    var CycleNumber = req.query.CycleNumber;
    console.log('Return Cycle Number 확인 : ', CycleNumber);
    
    res.render('return', {title: "자전거 반납", CycleNumber: CycleNumber});
};

exports.returnCycle = function(req, res){
    console.log('result of req.body = ',req.body);
    var datas = [req.body.Rental_end_station, req.body.CycleNumber];
    rentalModel.returnCycle(datas, function(){ 
        console.log('반납할 자전거 확인 : ', req.body.CycleNumber);
        console.log('반납할 대여소 확인 : ', req.body.Rental_end_station);
        
        res.redirect('/rent');
    }); 
};

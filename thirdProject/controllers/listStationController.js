var listModel=require('../models/listStationModel');
var express=require('express');

exports.getList=(req,res,next)=>{
    listModel.getList((rows)=>{
        console.log('rows: '+JSON.stringify(rows));
        res.render('listStation',{title: "대여소 현황", rows: rows});
    });
}
exports.getListFirst=(req,res)=>{
    res.redirect('/station');
}
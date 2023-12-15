var listMode1=require('../models/listModel');
var express=require('express');


exports.getList=(req,res,next)=>{
    var UserID = req.params.UserID;
    listMode1.getList((rows)=>{
        console.log('rows: '+JSON.stringify(rows));
        res.render('list',{title: "게시판 전체 글 조회", rows: rows, UserID: UserID});
    });
}
exports.getListFirst=(req,res)=>{
    res.redirect('/board/list/'+UserID);
}
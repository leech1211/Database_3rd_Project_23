var readModel=require('../models/readModel');
var express=require('express');


module.exports={
    readData: function (req,res, next){
        var UserID = req.params.UserID; 
        var BoardNumber = req.params.BoardNumber;
        readModel.getData(BoardNumber,(row)=>{
            console.log('1개 글 조회 결과 확인:',row);
            res.render('read',{title: "글 조회", row: row[0], UserID: UserID});
        });
    }
}

var writeModel=require('../models/writeModel');
var express=require('express');

exports.writeForm=(req,res)=>{
    var UserID = req.params.UserID;
    res.render('write',{title: "문의사항", UserID: UserID});
}

exports.writeData=(req,res)=>{
    var time=new Date;
    var Updatetime = time.toISOString().slice(0, 16).replace('T', ' ');
    var Content=req.body.Content;
    var Title=req.body.Title;
    var Hit=0;
    var UserID = req.params.UserID;
    
    writeModel.getUserId(UserID, (UserNumber) => {
        var Writer=UserNumber;
        var datas = [Writer, Updatetime,Content,Title,Hit];
        
        writeModel.insertData(datas,()=>{
            res.redirect('/board/list/'+UserID);
        });
    });
};

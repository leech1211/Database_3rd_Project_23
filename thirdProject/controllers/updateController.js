const updateModel = require('../models/updateModel');
const writeModel = require('../models/writeModel');
const express = require('express');
var url = require('url');

exports.updateForm = (req, res, next) => {
    var UserID = req.params.UserID;
    var BoardNumber=req.params.BoardNumber;
    updateModel.getData(BoardNumber, (row) => {
        console.log('update에서 1개 글 조회 결과 확인 : ', row);
        res.render('update', { title: "글 수정", row: row[0] || {},UserID: UserID });
    });
}

exports.updateData = (req, res) => {
    var UserID = req.params.UserID;
    var BoardNumber = req.params.BoardNumber;
    var title = req.body.title;
    var content = req.body.content;
    writeModel.getUserId(UserID,(Writer)=>{
    var datas = [Writer, title, content, BoardNumber];
    
    updateModel.updateData(datas, (result) => {
        if (result.affectedRows == 0) {
            res.send("<script>alert('잘못된 요청으로 인해 변경되지 않았습니다.');history.back();</script>");
        } else {
            res.redirect('/board/read/'+UserID+'/'+BoardNumber);
        }
    });
});
}

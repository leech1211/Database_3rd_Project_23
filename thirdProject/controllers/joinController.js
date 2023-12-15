var joinModel=require('../models/joinModel');
var loginModel=require('../models/loginModel');
var express=require('express');

exports.joinForm=(req,res)=>{
    res.render('user',{title: "안녕하세요"});
}

exports.joinData=(req,res)=>{
    var userType;
    if (req.body.type === '유저') {
        userType = 0;
    } else if (req.body.type === '관리자') {
        userType = 1;
    }
    var UserName = req.body.UserName;
    var UserID = req.body.UserID;
    var UserPW = req.body.UserPW;
    var UserPhone = req.body.UserPhone;
    var UserAge = req.body.UserAge;
    var User_start_join_date = new Date();
    var UserMgn = userType;
    var datas = [UserName, UserID, UserPW, UserPhone, UserAge, User_start_join_date, UserMgn];
    joinModel.insertData(datas,()=>{
        res.redirect('/board/login');
    });
};

exports.loginForm =(req,res)=>{
  res.render('login',{title: "안녕하세요"});
}

exports.login = function(req, res) {
    var UserID = req.body.UserID;
    var UserPW = req.body.UserPW;
  
    loginModel.logincheck(UserID, UserPW, function(err, rows) {
      if(err) {
        res.send('Database error');
        return;
      }
  
      if(rows.length > 0) {
        res.redirect('/board/list/'+UserID);
      } else {
        console.log("Invalid credentials - UserID:", UserID, "UserPW:", UserPW, req.body);
        res.redirect('/board/login');
      }
    });
};
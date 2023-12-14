var writeModel = require('../models/editFailureModel');
var express = require('express');

exports.writeForm = function(req, res) {
    res.render('addFailure', {title: "고장 정보 추가"});
}

exports.writeData = function(req, res) {
    var UserNumber = req.body.UserNumber;
    var FailContent = req.body.FailContent;
    var FailData = req.body.FailData;
    var FailCycle = req.body.FailCycle;
    var Failure_success = 0; // 기본값 설정

    var datas = [UserNumber, FailContent, FailData, FailCycle, Failure_success];

    writeModel.insertData(datas, function() {
        res.redirect('/failure');
    });
};

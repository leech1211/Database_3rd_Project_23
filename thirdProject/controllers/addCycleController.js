var writeModel = require('../models/editCycleModel');
var express = require('express');

exports.writeForm = function(req, res) {
    res.render('addCycle', {title: "자전거 추가"});
}

exports.writeData = function(req, res) {
    var Now_rental = req.body.Now_rental === 'on' ? 1 : 0;
    var Failure = req.body.Failure === 'on' ? 1 : 0;
    var Now_station = req.body.Now_station;

    var datas = [Now_rental, Failure, Now_station];

    writeModel.insertData(datas, function() {
        res.redirect('/cycle');
    });
};

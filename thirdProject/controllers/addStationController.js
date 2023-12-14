var writeModel = require('../models/editStationModel');
var express = require('express');

exports.writeForm = function(req, res) {
    res.render('addStation', {title: "대여소 추가"});
}

exports.writeData = function(req, res) {
    var stationLocate = req.body.stationLocate;
    var Nowcycle = req.body.Nowcycle;
    var TodayCycleRental = req.body.TodayCycleRental;
    var TodayCycleInput = req.body.TodayCycleInput;
    var Operation = req.body.Operation === 'on' ? 1 : 0;

    var datas = [stationLocate, Nowcycle, TodayCycleRental, TodayCycleInput, Operation];

    writeModel.insertData(datas, function() {
        res.redirect('/station');
    });
};

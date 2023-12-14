var writeModel = require('../models/editStationModel');
var express = require('express');

exports.deleteData = function(req, res){
    var StationNumber = req.query.StationNumber;
    writeModel.deleteData(StationNumber, function(){
        res.redirect('/station');
    });
};

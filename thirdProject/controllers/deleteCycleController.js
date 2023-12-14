var writeModel = require('../models/editCycleModel');
var express = require('express');

exports.deleteData = function(req, res){
    var CycleNumber = req.query.CycleNumber;

    writeModel.deleteData(CycleNumber, function(){
        res.redirect('/cycle');
    });
};

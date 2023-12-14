var writeModel = require('../models/editFailureModel');
var express = require('express');

exports.deleteData = function(req, res){
    var FailNumber = req.query.FailNumber;
    writeModel.deleteData(FailNumber, function(){
        res.redirect('/failure');
    });
};

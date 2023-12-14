var listModel = require('../models/listCycleModel');
var express = require('express');

exports.getList = (req, res, next) => {
    listModel.getList((rows) => {
        console.log('rows: ' + JSON.stringify(rows));
        res.render('listCycle', {title: "자전거 현황", rows: rows});
    });
}

exports.getListFirst = (req, res) => {
    res.redirect('/cycle');
}
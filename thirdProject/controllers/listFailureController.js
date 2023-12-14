var listModel = require('../models/listFailureModel');
var express = require('express');

exports.getList = (req, res, next) => {
    listModel.getList((rows) => {
        console.log('rows: ' + JSON.stringify(rows));
        res.render('listFailure', { title: "고장 신고 현황", rows: rows });
    });
}
exports.getListFirst = (req, res) => {
    res.redirect('/failure');
}

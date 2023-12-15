var express = require('express');
var router = express.Router();
var listController = require('../controllers/listController');
var joinController = require('../controllers/joinController');
var writeController = require('../controllers/writeController');
var updateController = require('../controllers/updateController');
var readController = require('../controllers/readController');
var deleteController = require('../controllers/deleteController')

const multer = require('multer');

router.get('/test', listController.getListFirst);
router.get('/list/:UserID', listController.getList);
router.get('/user',joinController.joinForm);
router.post('/user',joinController.joinData);
router.get('/read/:UserID/:BoardNumber', readController.readData);
router.get('/write/:UserID',writeController.writeForm);
router.post('/write/:UserID',writeController.writeData);
router.get('/login',joinController.loginForm);
router.post('/login',joinController.login);
router.get('/update/:UserID/:BoardNumber',updateController.updateForm);
router.post('/update/:UserID/:BoardNumber',updateController.updateData);
router.post('/delete', multer().none(), (req, res) => { deleteController.deleteData(req, res) });

module.exports=router;
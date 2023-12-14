var express = require('express');
var router = express.Router();
var listController = require('../controllers/listFailureController'); // 고장 정보의 list를 출력하기 위한 Controller
var addController = require('../controllers/addFailureController'); // 고장 정보 추가 기능의 add를 위한 Controller
var readController = require('../controllers/readFailureController'); // 고장 정보 조회 기능의 read를 위한 Controller 
var updateController = require('../controllers/updateFailureController'); // 고장 정보 수정 기능의 update를 위한 Controller
var deleteController = require('../controllers/deleteFailureController'); // 고장 정보 삭제 기능의 delete를 위한 Controller

router.get('/',listController.getList);
router.get('/list/:idx',listController.getList);
router.get('/add', addController.writeForm);
router.post('/add', addController.writeData);
router.get('/read', readController.readData);
router.get('/update', updateController.updateForm);
router.post('/update', updateController.updateData);
router.post('/delete', deleteController.deleteData);

module.exports=router;

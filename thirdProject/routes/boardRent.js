var express = require('express');
var router = express.Router();
var rentController = require('../controllers/rentCycleController'); // Rent에 필요한 기능들을 모아놓은 Controller

router.get('/',rentController.getList); // Rent 서비스의  초기화면 -> Rental 현황 출력
router.get('/list/:idx',rentController.getList);
router.get('/rental',rentController.rentForm);
router.post('/rental',rentController.rentCycle);
router.get('/return',rentController.returnForm);
router.post('/return',rentController.returnCycle);

module.exports=router;

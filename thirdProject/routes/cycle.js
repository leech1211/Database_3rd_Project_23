var express = require('express');
var router = express.Router();
var rentalhistoryController = require('../controllers/rentalhistoryControllers');




router.get('/rentalhistory', rentalhistoryController.getList);
router.get('/RentalUser', (req, res) => {
   const userName = req.query.userName;
   var userIdx;
   console.log("cycle userName: " + userName);
      
   rentalhistoryController.getUserRentalHistory(userName, (userRows) => {
       res.render('CheckCycleRentalHistory', { title: userName + "님 대여 내역 조회", rows: userRows });
   });
});



module.exports = router;
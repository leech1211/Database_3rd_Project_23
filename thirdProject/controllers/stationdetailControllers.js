var stationModel=require('../models/stationdetailModel');
var expess=require('express');

// exports.getListDetail=(req,res,next)=>{
//     var idx = req.params.idx;
//     console.log("따릉이 대여소 세부정보 idx : " + idx);
//     stationModel.getListDetail(idx,(rows)=>{
//         console.log('rows: '+JSON.stringify(rows));
//         console.log("따릉이 대여소 세부정보");
//         res.render('CycleStationDetail',{title: "따릉이 대여소 세부정보", rows: rows});
//     });
// }
exports.getListDetail = (req, res, next) => {
    var idx = req.params.idx;
    console.log("따릉이 대여소 통계 시각화 idx: " + idx);

    stationModel.getListDetail(idx, (result1, result2, result3) => {
        console.log('Result 1: ' + JSON.stringify(result1));
        console.log('Result 2: ' + JSON.stringify(result2));
        console.log('Result 3: ' + JSON.stringify(result3));

        console.log("따릉이 대여소 통계 시각화");
        res.render('CycleStationDetail', {
            title: "따릉이 대여소내역 통계",
            rows1: result1,  // 첫 번째 쿼리 결과
            rows2: result2,  // 두 번째 쿼리 결과
            rows3: result3   // 세 번째 쿼리 결과
        });
    });
}

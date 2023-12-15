var deleteModel = require('../models/deleteModel'); 

exports.deleteData = (req, res) => {
    var idx = req.body.BoardNumber;
    var UserID = req.params.UserID;

    deleteModel.deleteData(idx, (result) => {
        console.log("idx : ", idx);
        if (result.affectedRows == 0) {
            res.send("<script>alert('패스워드가 일치하지 않거나, 잘못된 요청으로 인해 삭제되지 않았습니다'); history.back();</script>");
        } else {
            res.redirect('/board/list/'+UserID);
        }
    });
};

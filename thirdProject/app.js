var createError = require('http-errors');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cycle = require('./routes/cycle');    //자전거 대여내역
// Router 추가
var stationRouter = require('./routes/boardStation');
var failureRouter = require('./routes/boardFailure');
var cycleRouter = require('./routes/boardCycle');
var board = require('./routes/board');
var rentRouter = require('./routes/boardRent'); // 대여, 반납을 위한 Rental 서비스 관리 Router

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cycle',cycle);    //자전거 대여내역

// 태웅 작업본
app.use('/station', stationRouter);
app.use('/failure', failureRouter);
app.use('/cycle', cycleRouter);
app.use('/rent', rentRouter); // RentRouter 

//신엽 작업본
app.use('/board', board);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

//창훈작업
// 나 작업함 11/15
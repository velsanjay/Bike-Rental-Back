require('dotenv').config()
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')
require('./common/dbconfig')

var GetBikeRouter = require('./routes/Bikes/GetBike');
const SignUpRouter = require('./routes/Signup');
const SignInRouter = require('./routes/SignIn');
const ValidateRouter = require('./routes/ValidateUser');
const ForgetRouter = require('./routes/forget');
const NewBikeRouter = require('./routes/Bikes/newBike');
const EditBikeDetail = require('./routes/Bikes/editBike');
const RemoveBikeRouter = require('./routes/Bikes/removeBike');
const BookBikeRouter = require('./routes/Bikes/BookBike');
const ValidateTokenRouter = require('./routes/ValidateToken');
const GetByIdRouter = require('./routes/Bikes/GetById');
const EditUserRouter = require('./routes/EditUser');
const RemoveBookUserRoter = require('./routes/Remove/RemoveBookUser');
const RemoveUserRouter = require('./routes/Remove/RemoveUser');
const GetUserDetail = require('./routes/getUser');



var app = express();
app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', GetBikeRouter);
app.use('/',SignUpRouter)
app.use('/',SignInRouter)
app.use('/',ValidateRouter)
app.use('/',ForgetRouter)
app.use('/', EditUserRouter)
app.use('/', GetUserDetail)
app.use('/bike', NewBikeRouter)
app.use('/bike', EditBikeDetail)
app.use('/bike', RemoveBikeRouter)
app.use('/', BookBikeRouter)
app.use('/token' , ValidateTokenRouter)
app.use('/' , GetByIdRouter)
app.use('/book', RemoveBookUserRoter)
app.use('/user', RemoveUserRouter)

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

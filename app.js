var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');




const { initializeApp, applicationDefault, cert } = require('./firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('./firebase-admin/firestore');

const serviceAccount = require('./serviceAccount.json');

initializeApp({
  credential: cert(serviceAccount)
});

var indexRouter = require('./index');
var usersRouter = require('./routes/users');
// first start of new page
var deleteRouter = require('./routes/delete');
var profileRouter = require('./routes/profile')
var createrRouter = require('./routes/creater')
var mapperRouter = require('./routes/mapper')


var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// updated view using profile now to see how to switch views
app.use('/profile', profileRouter);
app.use('/delete', deleteRouter)
app.use('/creater', createrRouter)
app.use('/mapper', mapperRouter)
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

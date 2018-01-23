var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose'); ///

var cors = require('cors');///

var index = require('./routes/index');
var users = require('./routes/users');
var register = require('./routes/Authentication');///
var signin = require('./routes/Authentication');///
var incident = require('./routes/users');//Added by Arun
var NewService = require('./routes/users');//Added by Arun
var SaveMsg = require('./routes/users');//Added by Arun
var MsgList = require('./routes/users');//Added by Arun



var app = express();

mongoose.Promise = global.Promise;///
mongoose.connect('mongodb://localhost:27017/ESIM');///

var Schema = mongoose.Schema;///
var UserProfileSchema = new mongoose.Schema({
    //_id:String,
    FirstName: String,
    LastName: String,
    EmailID: String,
   // Password: String,
    Location: String,
    MobileNum: String,
    CreatedOn: Date,
},{
	collection: 'UserProfile'
});///

var UserCredentialSchema = new mongoose.Schema({
  //_id:String,
  LoginID: String,
  Password: String,
  IsAdmin:Boolean,
  IsActive: Boolean,
  CreatedOn: Date,
},{
collection: 'Users'
});///

var IncidentSchema = new mongoose.Schema({
  //_id:String,
  ServiceType: String,
  DepartmentName: String,
  Location:String,
  EmailID: String,
  Status: String,
  Remarks: String,
  CreatedOn: Date,
  ModifiedOn: Date,
},{
collection: 'Incident'
});//Added by Arun

var DepartmentSchema = new mongoose.Schema({
  //_id:String,
  DepartmentName: String,
  EmailID: String,
  MobileNum: String,
  CreatedOn: Date,
},{
collection: 'Department'
});//Added by Arun

var AlertMessageSchema = new mongoose.Schema({
  //_id:String,
  Subject: String,
  Message: String,
  SenderEmailID: String,
  CreatedOn: Date,
},{
collection: 'AlertMessage'
});//Added by Arun

var ProfileModel = mongoose.model('ProfileDetails', UserProfileSchema); ///

var UsersModel = mongoose.model('UsersSchema', UserCredentialSchema); ///
var IncidentsModel = mongoose.model('IncidentSchema', IncidentSchema);//Added by Arun
var DepartmentsModel = mongoose.model('DepartmentSchema', DepartmentSchema);//Added by Arun
var AlertMessageModel = mongoose.model('AlertMessageSchema', AlertMessageSchema);//Added by Arun


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());///
app.use('/',function (req, res,next) {
  req.ProfileModel=ProfileModel;
  req.UsersModel=UsersModel;
  req.IncidentsModel=IncidentsModel;//Added by Arun
  req.DepartmentsModel=DepartmentsModel;//Added by Arun
  req.AlertMessageModel=AlertMessageModel;//Added by Arun
  next();
}); ///
app.use('/', index);
app.use('/users', users);
app.use('/register', register);///
app.use('/signin', signin);
app.use('/Incident', incident);//Added by Arun
app.use('/NewService', NewService);//Added by Arun
app.use('/SaveMsg', SaveMsg);//Added by Arun
app.use('/MsgList',MsgList)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

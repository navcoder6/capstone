var AuthenticationApi = require('../data/AuthenticationApi');//Added by Arun
var mongoose = require('mongoose');//Added by Arun
var bcrypt = require('bcrypt');//Added by Arun
var express = require('express');
var router = express.Router();

/* GET users listing. */
/* router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});  Commented by Arun */  
router.post('/:EmailID', function(req, res) {
  var NewMsg = {};
  NewMsg.Subject = req.body.Subject;
  NewMsg.Message = req.body.Message;
  NewMsg.SenderEmailID = req.body.EmailID;
  NewMsg.CreatedOn=req.body.CreatedOn;
  AuthenticationApi.SaveMsg(NewMsg,req.AlertMessageModel,function(err, MsgInfo) {
    console.log(MsgInfo);
    MsgInfo.res="1";
    res.json(MsgInfo);
	});
}); //Added by Arun
router.get('/:EmailID', function(req, res) {
  AuthenticationApi.getLoggedIncidentList(req.params.EmailID,req.IncidentsModel,function(err, IncidentList) {
    res.json(IncidentList);
	});
}); //Added by Arun
router.post('/', function(req, res) {
  var Service = {};
  var Users={};
  Service.DepartmentName = req.body.DepartmentName;
  Service.EmailID = req.body.EmailID;
  Service.MobileNum = req.body.MobileNum;
  Service.CreatedOn=req.body.CreatedOn;
  Users.LoginID=req.body.EmailID;
  Users.IsAdmin=false;
  AuthenticationApi.CheckCredential(Users,req.UsersModel,function(err, Password) {
    if(Password=="" || Password==null)
    {
      Service.res="0";
      res.json(Service);
    }
    else{
      AuthenticationApi.addNewService(Service,req.DepartmentsModel, function(err, Service) {
        
        Service.res="1";
        res.json(Service);
      });
    }
  });
});
//for Control room User
router.get('/:EmailID', function(req, res) {
  IncidentList={};
  AuthenticationApi.GetDepartmentName(req.params.EmailID,req.DepartmentsModel,function(err, DepartmentName) {
    if(DepartmentName=="" || DepartmentName==null)
    {
      res.json(IncidentList);
    }
    else{
      AuthenticationApi.getPendingIncidentList(DepartmentName,req.IncidentsModel,function(err, IncidentList) {
         res.json(IncidentList);
      });
    }
  });
});

router.get('/', function(req, res) {
  AuthenticationApi.getMsgList(req.AlertMessageModel,function(err, MessageList) {
    res.json(MessageList);
	});
}); //Added by Arun
module.exports = router;

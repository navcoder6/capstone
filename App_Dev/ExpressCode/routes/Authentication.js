var AuthenticationApi = require('../data/AuthenticationApi');
var express = require('express');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var router = express.Router();
var app = express();

const saltRounds = 10;
Password:String;
//var myPlaintextPassword = 's0/\/\P4$$w0rD';
//const someOtherPlaintextPassword = 'not_bacon';

router.post('/', function(req, res) {
  var profile = {};
  var Users={};
  //profile._id;
  profile.FirstName = req.body.FirstName;
  profile.LastName = req.body.LastName;
  profile.EmailID = req.body.EmailID;
  //profile.Password = req.body.Password;
  profile.Location = req.body.Location;
  profile.MobileNum = req.body.MobileNum;
  profile.CreatedOn= req.body.CreatedOn;
  Users.LoginID=req.body.EmailID;
 // Users.Password=req.body.Password;
  Users.IsAdmin=false;
  Users.IsActive=true;
  Users.CreatedOn=req.body.CreatedOn;
  //myPlaintextPassword=req.body.Password;
  AuthenticationApi.CheckCredential(Users,req.UsersModel,function(err, Password) {
    if(Password=="" || Password==null)
    {
      bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(req.body.Password, salt, function(err, hash) {
          // Store hash in your password DB.
          console.log(hash);
          Users.Password=hash;
          AuthenticationApi.addUserProfile(profile,req.ProfileModel,Users,req.UsersModel, function(err, profile) {
            
            profile.res="1";
            res.json(profile);
          });
        });
      });
    }
    else{
      profile.res="0";
      res.json(profile);
    }
  });
});

 // AuthenticationApi.addUserProfile(profile,req.ProfileModel,Users,req.UsersModel, function(err, profile) {
   //   console.log("SSSSSSSSSSSSSSSSSSSSS");
   // res.json(profile);
  //});

router.put('/', function(req, res) {
  var Credential = {};
  var returnvalue={};
  Credential.LoginID=req.body.LoginID;
  Credential.Password=req.body.Password;
  AuthenticationApi.CheckCredential(Credential,req.UsersModel,function(err, Password) {
    var a=JSON.stringify(Password);
    if(Password!="" && Password!=null)
    {
      console.log("AAAAAAAAAAAAAAAAA");
      console.log(Credential.Password);
      /* bcrypt.compare(Credential.Password,Password['Password']).then(function(res){
        if(res==true)
          console.log("CCCCCCCCCCCCC");
        else
          console.log("DDDDDDDDDDDDDDD");
      }); */
      if(bcrypt.compareSync(Credential.Password,Password['Password'])==true)
        returnvalue.res="1";
      else
        returnvalue.res="2";
    }
    else
    {
      returnvalue.res="3";
    }
    res.json(returnvalue);
  });
});

module.exports = router;
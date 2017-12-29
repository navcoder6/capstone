"use strict";
var ObjectID = require('mongoose').mongo.ObjectID;
var _ = require('lodash');

var currentID = 0;
var _clone = function(item) {
	return JSON.parse(JSON.stringify(item));
};

var AuthenticationApi = {	
	addUserProfile: function(profile,ProfileModel,Users,UserModel, callback) {
        ProfileModel.create(profile, function (err, profile) {
            if (err)
                console.log(err);
            else {
                UserModel.create(Users,function (err, Users)
                {
                    if (err)
                        console.log(err);
                    //else
                        //callback(null, _clone(Users));
                });
                callback(null, _clone(profile));
            }
        });
    },
    
    CheckCredential: function(Credential,UsersModel, callback) {
        UsersModel.findOne({LoginID:Credential.LoginID},{Password:1,_id:0},function(err,Password){
            if(err)
                console.log(err);
            else
                callback(null,_clone(Password));
        });
		//UserModel.findOne({ _id: id }, function (err, Boooks) {
		//	if (err)
		//		console.log(err);
		//	else {
		//		callback(null, _clone(Boooks));
		//	}
		//});
	},
};
module.exports = AuthenticationApi;
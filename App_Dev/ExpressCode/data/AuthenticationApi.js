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
        if(Credential.IsAdmin==false)
        {
            UsersModel.findOne({LoginID:Credential.LoginID},{Password:1,_id:1},function(err,CredentialData){
                if(err)
                    console.log(err);
                else
                    callback(null,_clone(CredentialData));
            });
        }
        else
        {
            UsersModel.findOne({IsAdmin:Credential.IsAdmin},{Password:1,_id:1},function(err,CredentialData){
                if(err)
                    console.log(err);
                else
                    callback(null,_clone(CredentialData));
            });
        } //Added by Arun

		//UserModel.findOne({ _id: id }, function (err, Boooks) {
		//	if (err)
		//		console.log(err);
		//	else {
		//		callback(null, _clone(Boooks));
		//	}
		//});
    },
    
    getregistrationDetails: function(EmailID,ProfileModel, callback) {
		ProfileModel.findOne({ EmailID: EmailID }, function (err, RegDetails) {
			if (err)
				console.log(err);
			else {
				callback(null, _clone(RegDetails));
			}
		});
    },
    
    getLoggedIncidentList: function(EmailID,IncidentsModel, callback) {
		IncidentsModel.find({ EmailID: EmailID }, function (err, IncidentList) {
			if (err)
				console.log(err);
			else {
				callback(null, _clone(IncidentList));
			}
		});
    },
    addNewService: function(Service,DepartmentsModel, callback) {
        DepartmentsModel.create(Service, function (err, Service) {
            if (err)
                console.log(err);
            else {
                callback(null, _clone(Service));
            }
        });
    },

    /* getEmailIdsList: function(UsersModel, callback) {
		UsersModel.find({},{LoginID:1,_id:0}, function (err, EmailList) {
			if (err)
				console.log(err);
			else {
				callback(null, _clone(EmailList));
			}
		});
    }, */
    SaveMsg: function(NewMsg,AlertMessageModel, callback) {
		AlertMessageModel.create(NewMsg, function (err, MsgInfo) {
			if (err)
				console.log(err);
			else {
				callback(null, _clone(MsgInfo));
			}
		});
    },
    //Added for getting department name for control room user
    getDepartmentName: function(EmailID,DepartmentsModel,callback){
        DepartmentsModel.find({EmailID:EmailID},{DepartmentName:1,_id:1},function (err, DepartmentName){
			if (err)
				console.log(err);
			else {
				callback(null, _clone(DepartmentName));
			}
		});
    },
    //getting incident lists pending with the control room user on the basis on departmentname
    getPendingIncidentList: function(DepartmentName,IncidentsModel, callback) {
		IncidentsModel.find({ DepartmentName: DepartmentName }, function (err, IncidentList) {
			if (err)
				console.log(err);
			else {
				callback(null, _clone(IncidentList));
			}
		});
    },

    getMsgList: function(AlertMessageModel, callback) {
		AlertMessageModel.find( function (err, MessageList) {
			if (err)
				console.log(err);
			else {
				callback(null, _clone(MessageList));
			}
		});
    },
};
module.exports = AuthenticationApi;
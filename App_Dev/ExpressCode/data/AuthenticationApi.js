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

    getEmailIdsList: function(UsersModel, callback) {
		UsersModel.find({},{LoginID:1,_id:0}, function (err, EmailList) {
			if (err)
				console.log(err);
			else {
				callback(null, _clone(EmailList));
			}
		});
    },
};
module.exports = AuthenticationApi;
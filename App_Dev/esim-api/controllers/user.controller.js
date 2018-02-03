var User = require('./../models/user.model');
var UserCredential = require('./../models/user-credential.model')
var Incident = require('./../models/incident.model');
var Department = require('./../models/department.model');
var AlertMessages = require('./../models/alert-messages.model');
var tweetHelper = require('./../helpers/twitter/tweet');
var emailHelper = require('./../helpers/email/email');

var _ = require('lodash');

function create(req, res, next) {
    const user = new User({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        EmailID: req.body.EmailID,
        Location: req.body.Location,
        MobileNum: req.body.MobileNum,
        CreatedOn: req.body.CreatedOn
    });

    const newCredential = new UserCredential({
        LoginID: req.body.EmailID,
        CreatedOn: req.body.CreatedOn
    });

    User.getUserByEmailId(req.body.EmailID)
        .then((existingUser) => {
            if (existingUser) {
                let userCreated = {};
                userCreated.res = "0";// TODO This needs to be changed in service and client both as an error should be thrown from here
                res.json(userCreated);
            } else {
                user.create()
                    .then((savedUser) => {
                        newCredential.createUser(req.body.Password, function (err, user) {
                            if (!err) {
                                let userCreated = {};
                                userCreated.res = "1";// TODO This needs to be changed in service and client both
                                res.json(userCreated);
                            } else {
                                // Here the savedUser needs to be deleted as user credential could not be saved 
                                next(err);
                            }
                        });
                    })
                    .catch(error => next(error));
            }
        });
}

function getLoggedIncidents(req, res, next) {
    Incident.getIncidentsByEmailId(req.params.EmailID)
    .then((incidentList) => {
        res.json(incidentList);
    })
    .catch(error => next(error));
}
function getPendingIncidents(req, res, next) {
    // TODO Call IncidentModel.getIncidentsByEmailId by passing email id
    Department.getDepartmentByEmailId(req.params.EmailID)
        .then((department)=>{
            if(department){
                Incident.getIncidentsByDepartment(department.DepartmentName)
                .then((incidentList) => {
                    res.json(incidentList);
                })
                .catch(error => next(error));
            }
        })
    /* Incident.getIncidentsByEmailId(req.params.EmailID)
        .then((incidentList) => {
            res.json(incidentList);
        })
        .catch(error => next(error)); */
} 

function getSingleIncident(req, res, next) {
    Incident.getIncidentById(req.params.IncidentID)
    .then((incidentDetails) => {
        res.json(incidentDetails);
    })
    .catch(error => next(error));
} //Added by Arun On 29Jan2018

function getDepartments(req, res, next) {
    // TODO Call UserCredential.getUserByEmailId by passing email id
    Department.getList()
        .then((departments) => {
            let departmentsResult = [];
            _.forEach(departments,(dt,index)=>{
                let departmentItem = {};
                departmentItem.Id = index;
                departmentItem.Type = dt.DepartmentName,
                departmentItem.IsSosSupported = true;
                departmentItem.IsNonSosSupported = true;
                departmentsResult.push(departmentItem);
            });
            res.json(departmentsResult);
        })
        .catch(error => next(error))
}

function getRegistrationDetails(req, res, next) {
    // TODO Call UserCredential.getUserByEmailId by passing email id
    User.getUserByEmailId(req.params.EmailID)
        .then((existingUser) => {
            res.json(existingUser);
        })
        .catch(error => next(error))
}

function createIncident(req, res, next) {
    var incident = new Incident({
        ServiceType: req.body.ServiceType,
        DepartmentName: req.body.DepartmentName,
        Location: req.body.Location,
        EmailID: req.body.EmailID,
        Description: req.body.Description
    })
    // TODO Pass email id from access token
    incident.create(function (err, incident) {
        if (err) {
            next(err); // TODO Create apiError and pass it
        }
        Department.getEmailIdByDepartment(req.body.DepartmentName)
        .then((emailId)=>{
            if(emailId){
                //send email notification to concerned department
                var mailOptions = {
                    from: 'esim.mean@outlook.com',
                    to: emailId,
                    subject: req.body.ServiceType+' Incident Reported',
                    html: '<h3>Hello Control Room User,</h3></n><p>User has logged an incident in your department.</p></n><p><h4>Description:</h4></p>'+req.body.Description+'</n></n><h4>Regards,</h4></n><p>ESIM Team</p>'
                  };
                emailHelper.sendEmail(mailOptions);
            }
        })
        let incidentCreated = {};
        incidentCreated.res = "1";// TODO This needs to be changed in service and client both
        // Send Twitter notification as well to concerned department
        /* let tweetMessage = `User ${req.body.EmailID} has raised incident ${req.body.Description}`;
        tweetHelper.sendTweet(tweetMessage); */
        res.json(incidentCreated);
    });
}

function getAlertMessages(req,res,next){
    AlertMessages.getList()
    .then((alerts)=>{
        res.json(alerts);
    })
    .catch(error=>next(error));
}

function sendAlertMessage(req,res,next){
    // TODO Notification service call and send real time messages

    let newAlert = new AlertMessages({
        Subject: req.body.Subject,
        Message: req.body.Message,
        SenderEmailID: req.body.EmailID,
        CreatedOn: req.body.CreatedOn,
    })
    newAlert.create(function(err,alertAdded){
        let result = {};
        if(err){
            result.res = "0";
        }
        UserCredential.GetAllLoginIds()
        .then((LoginIds)=>{
            if(LoginIds){
                var emailIds = LoginIds.map(function(val) {
                    return val.LoginID;
                  }).join(',');
                var mailOptions = {
                    from: 'esim.mean@outlook.com',
                    to: req.body.EmailID,
                    bcc:emailIds,
                    subject: req.body.Subject,
                    html: '<h3>Hello User,</h3></n>'+req.body.Message+'</n></n><h4>Regards,</h4></n><p>ESIM Team</p>'
                  };
                emailHelper.sendEmail(mailOptions);
            }
        })
        result.res = "1";

        res.json(result);
    });

} 

function updateIncident(req,res,next){
    // TODO Notification service call and send real time messages

    let UpdatedDetails ={
        IncidentID: req.body.IncidentID,
        Status: req.body.Status,
        Remarks: req.body.Remarks,
        ModifiedOn: req.body.ModifiedOn,
    }
    Incident.update(UpdatedDetails)
    .then((updateincident)=>{
        let result = {};
        result.res = "1";

        res.json(result);
    })
    .catch(error=>next(error));

}

module.exports = { create, getLoggedIncidents, getRegistrationDetails, createIncident,
     getDepartments, getAlertMessages, sendAlertMessage,getPendingIncidents,getSingleIncident,updateIncident,updateIncident };
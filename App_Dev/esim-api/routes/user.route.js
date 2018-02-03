var express = require('express');
var validation = require('express-validation');

var paramValidation = require('./../config/param-validation');
var userController = require('./../controllers/user.controller');

const router = express.Router();

router.route('/incidents')

.get(userController.getLoggedIncidents)

.post(validation(paramValidation.createIncident),userController.createIncident);

router.route('/incidents/:EmailID')
.get(userController.getLoggedIncidents);//Added by Arun replace with JWT


router.route('/pendingincidents/:EmailID')
.get(userController.getPendingIncidents); //Added by Arun replace with JWT


router.route('/singleincident/:IncidentID') 
.get(userController.getSingleIncident); //Added by Arun On 29Jan2018  

router.route('/UpdateIncident') 
.put(userController.updateIncident); //Added by Arun On 29Jan2018

router.route('/registration')

.get(userController.getRegistrationDetails)

.post(validation(paramValidation.createUser),userController.create);

router.route('/registration/:EmailID')
.get(userController.getRegistrationDetails) //Added by Arun replace with JWT

router.route('/departments')

.get(userController.getDepartments)

router.route('/alerts')

.get(userController.getAlertMessages)

.post(userController.sendAlertMessage);

module.exports = router
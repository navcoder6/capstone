var Joi = require('joi');

const validation = {
    login: {
        body: {
            LoginID: Joi.string().required().email(),
            Password: Joi.string().required()// Have a regular expression here for password check
        }
    },

    adminLogin: {
        body: {
            Password: Joi.string().required()// Have a regular expression here for password check
        }
    },

    createUser: {
        body: {
            FirstName: Joi.string().required(),
            EmailID: Joi.string().required().email(),// Have a regular expression here for email id check
            MobileNum: Joi.string().required(),// Have a regular expression here for mobile check
            Password: Joi.string().required()// Have a regular expression here for password check
        }
    },

    addService: {
        body: {
            DepartmentName: Joi.string().required(),
            EmailID: Joi.string().required().email(),// Have a regular expression here for email id check
            MobileNum: Joi.string().required(),// Have a regular expression here for mobile check
        }
    },

    createIncident: {
        body: {
            ServiceType: Joi.string().required(),
            DepartmentName: Joi.string().required(),
            Location: Joi.string().required()
        }
    }

};

module.exports = validation;
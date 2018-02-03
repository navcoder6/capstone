var UserCredential = require('./../models/user-credential.model');
var Department = require('./../models/department.model');
var emailHelper = require('./../helpers/email/email');

function login(req, res, next) {
    const loggedInUser = new UserCredential({
        Password: req.body.Password
    })
    let returnValue = {}//TODO remove this
    UserCredential.getAdminUser()
        .then((existingUser) => {
            if (existingUser) {
                //if (loggedInUser.isValidPassword(existingUser.Password)) { //Commented by Arun
                if(loggedInUser.Password==existingUser.Password){//Addedby Arun
                    returnValue.res = existingUser._id; // TODO Return JWT token back to user and also type of user
                    returnValue.IsAdmin = true;
                } else {
                    returnValue.res = "2"; // TODO change this to some error code
                }
                res.json(returnValue);
            } else {
                returnValue.res = "3"; // TODO change this to some error code
                res.json(returnValue);
            }
        });
}

function addService(req, res, next) {
    const newDepartment = new Department({
        DepartmentName: req.body.DepartmentName,
        ServiceType:req.body.ServiceType,//Added by Arun On 26Jan2018
        EmailID: req.body.EmailID,
        MobileNum: req.body.MobileNum,
        CreatedOn: req.body.CreatedOn
    });

    UserCredential.getUserByEmailId(req.body.EmailID)
        .then((userFound) => {
            if (userFound) {
                newDepartment.create(function (err, department) {
                    if (err) {
                        return next(err);// TODO Change to error code 
                    }
                    //send email notification to concerned department
                    var mailOptions = {
                        from: 'esim.mean@outlook.com',
                        to: req.body.EmailID,
                        subject: 'Department Created',
                        html: '<h3>Hello User,</h3></n><p>Admin has Created a new department</p>'+req.body.DepartmentName+'</n><p> and make you a control room user.</p></n></n><h4>Regards,</h4></n><p>ESIM Team</p>'
                    };
                    emailHelper.sendEmail(mailOptions);
                    let result = {};
                    result.res = "1";
                    res.json(result);
                });
            } else {
                let result = {};
                result.res = "0";
                res.json(result);
            }
        })

}

module.exports = { login, addService };
var UserCredential = require('./../models/user-credential.model');
var Department = require('./../models/department.model');

function login(req, res, next) {
    const loggedInUser = new UserCredential({
        LoginID: req.body.LoginID,
        Password: req.body.Password
    })
    let returnValue = {}//TODO remove this
    UserCredential.getUserByEmailId(loggedInUser.LoginID)
        .then((existingUser) => {
            if (existingUser) {
                if (loggedInUser.isValidPassword(existingUser.Password)) {
                    returnValue.res = existingUser._id; // TODO Return JWT token back to user and also type of user
                    returnValue.IsAdmin = false;
                    Department.getDepartmentByEmailId(loggedInUser.LoginID)
                    .then((result)=>{
                        if(result){
                            returnValue.IsControlUser = true;
                        }
                        res.json(returnValue);
                    });
                } else {
                    returnValue.res = "2"; // TODO change this to some error code
                    res.json(returnValue);
                }
            } else {
                returnValue.res = "3"; // TODO change this to some error code
                res.json(returnValue);
            }
        });
}

function logout(req, res, next) {
   // Logic here to logout the current logged in user
   // This would mean expiring the JWT token as well or creating a blacklist of JWT tokens
}

module.exports = { login,logout };
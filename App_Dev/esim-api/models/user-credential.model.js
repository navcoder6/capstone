var mongoose = require('mongoose');
var bcryptJs = require('bcryptjs');

const SaltRound = 10;

const userCredentialSchema = new mongoose.Schema({
    LoginID: { type: String, required: true },
    Password: { type: String, required: true },
    IsAdmin: { type: String, default: false },
    IsActive: { type: String, default: true },
    CreatedOn: { type: Date, default: Date.now }
}, {
        collection: 'UserCredential'
    });

userCredentialSchema.method({
    createUser(password, callback) {
        bcryptJs.genSalt(SaltRound, function (err, salt) {
            bcryptJs.hash(password, salt, function (err, hashPassword) {
                this.Password = hashPassword;
                this.save(callback);
            }.bind(this));
        }.bind(this));
    },
    isValidPassword(password) {
        return bcryptJs.compareSync(this.Password, password);
    }
});

userCredentialSchema.statics = {
    getUserByEmailId(emailId) {
        return this.findOne({
            LoginID: emailId
        })
            .exec()
            .then((user) => {
                return user;
            })
    },
    getAdminUser() {
        return this.findOne({
            LoginID:"admin@esim.com" //Added by Arun
            //IsAdmin: true Commented by Arun
        })
            .exec()
            .then((user) => {
                return user;
            })
    },
    GetAllLoginIds() {
        return this.find({},{
            LoginID: 1,_id:0
        })
            .exec()
            .then((user) => {
                return user;
            })
    }
}
module.exports = mongoose.model('UserCredential', userCredentialSchema);
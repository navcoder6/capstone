var mongoose = require('mongoose');
var apiError = require('./../helpers/api-error');

const UserSchema = new mongoose.Schema({
    FirstName: { type: String, required: true },
    LastName: String,
    EmailID: { type: String, required: true },
    Location: String,
    MobileNum: String,
    CreatedOn: { type: Date, default: Date.now }
},
    {
        collection: 'UserProfile'
    });
    UserSchema.method({
        create(callback){
           return this.save(callback);
        }
    });
    UserSchema.statics= {
        getUserByEmailId(emailId) {
            return this.findOne({
                EmailID: emailId
            })
                .exec()
                .then((user) => {
                    return user;
                })
        }
    }
module.exports = mongoose.model('UserProfile', UserSchema);
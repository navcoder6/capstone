var mongoose = require('mongoose');

const AlertMessageSchema = mongoose.Schema({
    Subject: { type: String, required: true },
    Message: { type: String, required: true },
    SenderEmailID: { type: String, required: true },
    CreatedOn: { type: Date, default:Date.now }
},{
    collection:'AlertMessage'
});

AlertMessageSchema.method({
    create(callback){
        this.save(callback);
    }
});

AlertMessageSchema.statics = {
    getList(){
        return this.find()
        .exec()
        .then(alerts=>alerts);
    }
}

module.exports = mongoose.model('AlertMessage',AlertMessageSchema);
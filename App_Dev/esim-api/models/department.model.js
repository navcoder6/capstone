var mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    DepartmentName: { type: String, required: true },
    ServiceType: { type: String, required: true },//Added by Arun On 26Jan2018
    EmailID: { type: String, required: true },
    MobileNum: { type: String, required: true },
    CreatedOn: { type: Date, default: Date.now }
},
    {
        collection: 'Department'
    });

departmentSchema.method({
    create(callback){
        this.save(callback);
    }
});

departmentSchema.statics = {
    getDepartmentByEmailId(emailId) {
        return this.findOne({
            EmailID: emailId
        })
            .exec()
            .then((department) => {
                return department;
            })
    },
    getEmailIdByDepartment(department) {
        return this.findOne({
            DepartmentName: department
        },
    {
        EmailID:1,_id:0
    })
            .exec()
            .then((department) => {
                return department;
            })
    },
    getList(){
        return this.find()
        .exec()
        .then(departments=>departments);
    }
}

module.exports = mongoose.model('Department', departmentSchema);
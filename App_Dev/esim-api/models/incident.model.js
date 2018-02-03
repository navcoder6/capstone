var mongoose = require('mongoose');

const incidentSchema = new mongoose.Schema({
    ServiceType: { type: String, required: true },
    DepartmentName: { type: String, required: true },
    Location: { type: String, required: true },
    EmailID: { type: String, required: true },
    Status: String,
    Remarks: String,
    CreatedOn: { type: Date, default: Date.now },
    ModifiedOn: { type: Date, default: Date.now },
    Description: { type: String, required: true },
}, {
        collection: 'Incident'
    });

incidentSchema.method({
    create(callback) {
        this.Status = 'New';
        this.save(callback);
    },
    update(UpdatedDetails){
       return this.findOneAndUpdate({ _id: UpdatedDetails.IncidentID },
            { $set: { Status : UpdatedDetails.Status, Remarks : UpdatedDetails.Remarks, 
                ModifiedOn : UpdatedDetails.ModifiedOn} },
			{new: true})
    }
})

incidentSchema.statics = {
    getIncidentsByEmailId(emailId) {
        return this.find({
            EmailID: emailId
        })
            .exec()
            .then((incidentList) => {
                return incidentList;
            })
    },
    getIncidentsByDepartment(departmentName) {
        return this.find({
            DepartmentName: departmentName,
            Status:{$nin:["Reject","Resolved"]}
        })
            .exec()
            .then((incidentList) => {
                return incidentList;
            })
    },
    getIncidentById(IncidentID) {
        return this.findOne({
            _id: IncidentID
        })
            .exec()
            .then((incidentDetails) => {
                return incidentDetails;
            })
    },

}

module.exports = mongoose.model('Incident', incidentSchema)
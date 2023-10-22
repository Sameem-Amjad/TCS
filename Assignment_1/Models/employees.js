const mongoose = require( 'mongoose' );
const employeeSchema = mongoose.Schema( {
    employeeId: {
        type: mongoose.SchemaTypes.ObjectId
    },
    firstName: {
        type: String,
        required:true,
    },
    lastName: {
        type: String,
        required:true
    },
    dateCreated: {  
        type: Date,
        default: Date.now
    }
} );
module.exports = mongoose.model('employee',employeeSchema);
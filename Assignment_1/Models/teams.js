const mongoose = require( 'mongoose' );
const teamsSchema = mongoose.Schema( {
    teamsId: {
        type: mongoose.Types.ObjectId
    }
    , name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        default:Date.now
    }
} );
module.exports = mongoose.model( 'teams', teamsSchema );
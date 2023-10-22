const mongoose = require( 'mongoose' );
const database = "mongodb://127.0.0.1:27017/Assignemnt_1"
const db =async () =>
{
  await mongoose.connect( database );
  console.log( "database connected" );
} 
module.exports = db();

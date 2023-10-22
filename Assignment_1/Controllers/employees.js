const mongoose  = require( 'mongoose' );
const employeeModel = require( '../Models/employees' );
const all = async ( req, res ) =>
{
  let result = await employeeModel.find().sort({ lastName: 1 });
    res.send( result );
};
const add = async ( req, res ) =>
{
    const data = req.body;
    let result = await new employeeModel( data );
    result.save();
    res.send( result );
};
const byId = async ( req, res ) =>
{
    let { _id } = req.params;
    let result = await employeeModel.findOne( {_id} );
     if (!result) { 
         return res.send( { "message": 'Employee not found' } );
    }
    res.send( result );
}
const updatebyId = async ( req, res ) =>
{
    let {_id}  =req.params ;
    let data = req.body;
    let result = await employeeModel.findByIdAndUpdate( _id, data );
     if (!result) {
         return res.send( { "message": 'Employee not found' } );
    }
    res.send( result );
}
module.exports = {
    all,
    add,
    byId,
    updatebyId,

};
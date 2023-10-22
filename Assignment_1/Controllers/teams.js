const teamsModel = require( '../Models/teams' );
const all = async (req,res) =>
{
    let result = await teamsModel.find( ).sort({name:1});
    res.send( result );
};
const remove = async (req,res) =>
{
    let {_id} = req.param
    let result = await teamsModel.deleteOne(_id);
    res.send( result );
};
module.exports = {
    all,
    remove
}
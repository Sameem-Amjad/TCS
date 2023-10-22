var express = require( 'express' );
var router = express.Router();
const employees  = require( '../Controllers/employees' )
router.get( '/', employees.all );
router.post( '/add', employees.add );
router.get( '/:_id', employees.byId );
router.put( '/:_id', employees.updatebyId );

module.exports = router; 
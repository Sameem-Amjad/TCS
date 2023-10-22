var express = require('express');
var router = express.Router();
const team = require('../Controllers/teams')
/* GET users listing. */
router.get('/',team.all );
router.delete('/:_id',team.remove );

module.exports = router;

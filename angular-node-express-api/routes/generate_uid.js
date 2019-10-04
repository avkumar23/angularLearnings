var express = require('express');
var router = express.Router();
var uid = require('uid-safe')

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.json({users: [{name: 'Timmy'}]});
// });

// module.exports = router;


/* GET a guid. */
router.get('/', function(req, res, next)
{
	var strUid = uid.sync(18);

	res.json({guid: strUid});
});

module.exports = router;
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/getUser', function(req, res, next) {
    res.send('Respond with user');
});

router.post('/createUser', function(req, res, next) {
    res.send('POST to create user');
});

module.exports = router;
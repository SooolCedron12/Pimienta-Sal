var express = require('express');
var router = express.Router();

const {index,detail} = require('../controllers/indexController');

router.get('/', index);
router.get('/detail', detail);

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

module.exports = router;

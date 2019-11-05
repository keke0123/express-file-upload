var express = require('express');
var multer = require('multer');
var fs = require('fs');
var router = express.Router();
var upload = multer({ dest: 'uploads/' });

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile('./views/index.html', function(error, data) {
    if (error) {
      console.log(error);
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
});
router.get('/test', function(req, res, next) {
  console.log(req.query.title);
  console.log(req.header('id'));
  console.log(req.header('name'));
  res.set('haha', 'hoho');
  res.json({ bit: 'chan' });
});

router.post('/profile', upload.single('avatar'), function(req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  console.log(req.body);
});

router.post('/userinfo', function(req, res, next) {
  console.log('haha');
  console.log(req.body);
});

router.post('/test/post', function(req, res, next) {
  console.log(req.body);
  console.log(req.header('id'));
  console.log(req.header('name'));
  res.json({ bit: 'haha' });
});

module.exports = router;

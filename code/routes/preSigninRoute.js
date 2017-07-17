var express = require('express');
var router = express.Router();

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.get('/', function(req, res){
    res.render('sign-in', {title: 'This is my website'});
});
router.get('/Login', function(req, res){
    res.send('This is Login Page');
});

router.get('/Signup', function(req, res){
    res.send('This is Signup Page');
});

router.get('/Plans', function(req, res){
    res.send('This is Plans Page');
});

router.get('/AboutUs', function(req, res){
    res.send('This is AboutUs Page');
});

module.exports = router
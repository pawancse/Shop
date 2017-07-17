var express = require('express');
var router = express.Router();
var User = require('../app/models/users');

router.use(function timeLog(req, res, next) {
	console.log('Time: ', Date.now())
	next()
})

router.get('/', function (req, res) {
    res.json({ 'type': 'This is getUsers Method' });
});
router.route('/account')

	// create a user (accessed at POST http://localhost:8080/users)
	.post(function (req, res) {

		var user = new User();		// create a new instance of the User model
		user.name = req.body.name;  // set the users name (comes from the request)

		user.save(function (err) {
			if (err)
				res.send(err);

			res.json({ message: 'User created!' });
		});


	})

	// get all the users (accessed at GET http://localhost:8080/api/users)
	.get(function (req, res) {
		User.find(function (err, users) {
			if (err)
				res.send(err);

			res.json(users);
		});
	});

// on routes that end in /users/:user_id
// ----------------------------------------------------
router.route('/account/:user_id')

	// get the user with that id
	.get(function (req, res) {
		User.findById(req.params.user_id, function (err, user) {
			if (err)
				res.send(err);
			res.json(user);
		});
	})

	// update the user with this id
	.put(function (req, res) {
		User.findById(req.params.user_id, function (err, user) {

			if (err)
				res.send(err);

			user.name = req.body.name;
			user.save(function (err) {
				if (err)
					res.send(err);

				res.json({ message: 'User updated!' });
			});

		});
	})

	// delete the user with this id
	.delete(function (req, res) {
		User.remove({
			_id: req.params.user_id
		}, function (err, user) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted' });
		});
	});

module.exports = router
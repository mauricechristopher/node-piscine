//const User = require('../mongoosen/user');
const express = require('express');
const router = express.Router();
const path = require('path');

function requiresLogin(req, res, next) {
    if (req.session && req.session.userId) {
        return next();
    } else {
        var err = new Error('You must be logged in to view this page.');
        err.status = 401;
        return res.redirect('/login');
    }
}

//Route main page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/src/index.html"));
})

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/src/login.html"));
})

router.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/src/admin.html"));
})

router.get('/cart', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/src/cart.html"));
})

router.get('/create', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/src/create.html"));
})

router.get('/delete', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/src/delete.html"));
})

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/src/login.html"));
})

router.get('/men', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/src/men.html"));
})

router.get('/modif', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/src/modif.html"));
})

router.get('/sale', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/src/sale.html"));
})

router.get('/women', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/src/women.html"));
})

router.post('/login', (req, res, next) => {
    var body = req.body;

    if (req.body.password != req.body.passwordConf) {
        var err = new Error('Passwords do not match.');
        err.status == 400;
        res.send('Passwords do not match');
        return next(err);
    }

    console.log(body);
    if (body.email &&
        body.username &&
        body.password &&
        body.passwordConf) {
        var userData = {
            email: body.email,
            username: body.username,
            password: body.password,
            passwordConf: body.passwordConf
        }
        //use schema.create to insert data into the db
        User.create(userData, function(err, user) {
            if (err) {
                console.log(err);
                return res.sendFile(path.join(__dirname, "../public/src/login.html"));
            } else {
                if (req.session.userId) {
                    console.log('here');
                    return res.redirect('/');
                }
                req.session.userId = user._id;
                return res.redirect('/');
            }
        });
    } else if (req.body.logemail && req.body.logpassword) {
        console.log(req.body.logemail);
        console.log(req.body.logpassword);
        console.log(req.session);

        User.authenticate(req.body.logemail, req.body.logpassword, function(error, user) {
            if (error || !user) {
                var err = new Error('Wrong email or password.');
                err.status = 401;
                return next(err);
            } else {
                if (req.session.userId) {
                    console.log('here');
                    return res.redirect('/');
                }
                req.session.userId = user._id;
                return res.redirect('/');
            }
        });
    } else {
        var err = new Error('All fields required.');
        err.status = 400;
        return next(err);
    }
})

// GET route after registering
router.get('/cart', function(req, res, next) {
    User.findById(req.session.userId)
        .exec(function(error, user) {
            if (error) {
                return next(error);
            } else {
                if (user === null) {
                    var err = new Error('Not authorized! Go back!');
                    err.status = 400;
                    return res.redirect('/login')
                } else {
                    res.sendFile(path.join(__dirname, "../public/src/cart.html"));
                }
            }
        });
});

// GET route after registering
router.get('/profile', function(req, res, next) {
    User.findById(req.session.userId)
        .exec(function(error, user) {
            if (error) {
                return next(error);
            } else {
                if (user === null) {
                    var err = new Error('Not authorized! Go back!');
                    err.status = 400;
                    return res.redirect('/login')
                } else {
                    res.sendFile(path.join(__dirname, "../public/src/index.html"));
                }
            }
        });
});

// GET for logout logout
router.get('/logout', function(req, res, next) {
    if (req.session) {
        // delete session object
        req.session.destroy(function(err) {
            if (err) {
                return next(err);
            } else {
                return res.redirect('/login');
            }
        });
    }
});


module.exports = router;

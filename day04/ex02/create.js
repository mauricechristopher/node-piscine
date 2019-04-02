var bodyParser = require("body-parser");
var Aural = require('./aural.js')
var express = require('express');
var fs = require('fs');
var app = express();
var serialize = require('node-serialize');
var crypto = require("crypto"),
    algorithm = 'aes-256-ctr',
    password = 'd6F3Efeq';
var firstExec = true

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

var listener = app.listen(3000, () => {
    console.log('app listening on port 3000!');
});

const db = new Aural("passwd", "./private/passwd/passwd.json", {
    login: {},
    passwd: {}
})

app.post('/', (req, res) => {
    fs.readFile('index.html', (err, data) => {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(data);
        res.end();
    })
})

app.post('/post', (req, res) => {
    query = req.body
    handleLogin(query)
    fs.readFile('index.html', (err, data) => {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(data);
        res.end();
    })
})

app.get('/', (req, res) => {
    fs.readFile('index.html', (err, data) => {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(data);
        res.end();
    })
})

app.get('/forgot', (req, res) => {
    fs.readFile('forgot.html', (err, data) => {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(data);
        res.end();
    })
}) 

app.get('/post', function (req, res) {
    query = res.req.client._httpMessage.req.query
    handleLogin(query)
    fs.readFile('index.html', (err, data) => {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(data);
        res.end();
    })
});

const encrypt = (text) => {
    var cipher = crypto.createCipher(algorithm, password)
    var crypted = cipher.update(text, 'utf8', 'hex')
    crypted += cipher.final('hex');
    return crypted;
}

const decrypt = (text) => {
    var decipher = crypto.createDecipher(algorithm, password)
    var dec = decipher.update(text, 'hex', 'utf8')
    dec += decipher.final('utf8');
    return dec;
}

const checkLogin = (login, passwd) => {
    data = db.getAll().entries
    for (var name in data) {
        if (data[name].login != serialize.serialize(login))
            continue;
        else {
            console.log("Error");
            return false;
        }
    }
    return true
}

const handleLogin = (query) => {
    if (firstExec == true) {
        firstExec = false
        if (!fs.existsSync('./private')) {
            fs.mkdirSync('./private');
        }
        if (!fs.existsSync('./private/passwd')) {
            fs.mkdirSync('./private/passwd');
        }
        db.init()
    }
    if (query['login'] && query['passwd'] && query['submit'] == 'OK') {
        if (checkLogin(query['login'], query['passwd'])) {
            var login = serialize.serialize(query['login']),
                passwd = encrypt(query['passwd'])
            db.addEntry({
                login,
                passwd
            });
            console.log('OK');
        }
    }
}

const express = require('express');
const { path } = require('express/lib/application');
const app = express();

// ! set the public folder
app.use('/public', express.static(__dirname + 'public'))
// for express > 4.16
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// !web services, web API, routes
// !service returns the current server's time
app.get('/now', function (req, res) {
    // ? send server time
    res.send(new Date().toLocaleString());
})

// !login get
app.get('/login/:username/:password', function (req, res) {
    // ? http://localhost:3000/login/admin/1234

    // const username = req.params.username;
    // const password = req.params.password;
    const { username, password } = req.params;
    // ?back end use only log don't use alert
    console.log(username, password);
    // ?end : stop service
    // res.end();
    if (username == 'admin' && password == '1234') {
        // console.log('pass');
        res.status(200).send('Login success');
    } else {
        res.status(401).send('Login fail');
    }
})
// !login post
app.post('/login', function (req, res) {
    // const username = req.body.username;
    // const password = req.body.password;
    const { username, password } = req.body;
    // console.log(username,password);
    // res.end();
    if (username == 'admin' && password == '1234') {
        // console.log('pass');
        res.status(200).send('Login success');
    } else {
        res.status(401).send('Login fail');
    }

})

// !root service ต้องอยู่ล่างสุด 
app.get('/', function (req, res) {
    // res.send('Hello World');
    // ? automatic status 200  
    // res.status(200).send('Welcome to backend')
    // ? __dirname : current dir app.js
    res.status(200).sendFile(__dirname + '/views/index.html');
    // ? path join เพื่อเชื่อม path 
    // res.sendFile(path.join(__dirname + '/views/index.html'));
})




// !start server
const port = 3000;
app.listen(port, function () {
    console.log('Server is ready at ' + port);
});


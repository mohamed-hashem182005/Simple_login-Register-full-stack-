const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt')
const app = express();
const collection = require('./config');


app.set('view engine', 'ejs');
//static file
app.use(express.static("public"));
// to convert data into json format
app.use(express.json());
// to server understand the content of url that is return from FORM
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render("login");
});
app.get('/signup', (req, res) => {
    res.render("signup")
});

//Register user
app.post('/signup', async (req, res) => {
    try {
        const data = {
            username: req.body.username,
            password: req.body.pass
        }
        const existesUser = await collection.findOne({ username: data.username });
        if (existesUser) {
            res.send("User already exist. Please choose a different username.")
        } else {
            //hash password
            const salt = 10;
            const hash = await bcrypt.hash(data.password, salt);
            data.password = hash;//Repalce the hash password with orignal password
            const userdata = await collection.insertMany(data);
            res.render('login');
        }
    } catch (error) {
        res.send('you entered duplicated error ');
        console.log(error.mesage);


    }
});

app.post('/login', async (req,res) => {
    try {
        const check = await collection.findOne({ username: req.body.username });
        if (!check) {
            return res.send("you not Register. Please SignUp before")
        }
        const Ispasswordmatch = await bcrypt.compare(req.body.pass, check.password);
        if (Ispasswordmatch) {
            res.render("home");
        } else {
            res.send('username or password is not correct')
        }
    } catch (error) {
        res.send(error.message);

    }
})



app.listen(3000, () => {
    console.log('this app is listen in port 3000');

})
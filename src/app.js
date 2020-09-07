const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 3000;

const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

const calculateAge = (DOB) => { 
    var today = new Date();
    var birthDate = new Date(DOB);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }

    return age;
}

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index');
});

app.get('/resume', (req, res) => {
    res.render('resume');
});

app.get('/about', (req, res) => {
    res.render('about', {
        age: calculateAge(new Date(1997, 7, 11))
    });
});

app.get('/projects', (req, res) => {
    res.render('projects');
});

let server = app.listen(port, () => {
    console.log('Server is up on port', server.address().port);
});

const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();

const PORT = 3000;              //Port number of website

//Home page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
});
//About page
router.get('/about.html', (req, res) => {
    res.sendFile(path.join(__dirname+'/about.html'));
});
//EPL page
router.get('/epl.html', (req, res) => {
    res.sendFile(path.join(__dirname+'/epl.html'));
});
//La Liga page
router.get('/laliga.html', (req, res) => {
    res.sendFile(path.join(__dirname+'/laliga.html'));
});
//Serie A page
router.get('/serieA.html', (req, res) => {
    res.sendFile(path.join(__dirname+'/serieA.html'));
});
//Ligue 1 page
router.get('/ligue1.html', (req, res) => {
    res.sendFile(path.join(__dirname+'/ligue1.html'));
});

var axios = require('axios');

var config = {
    method: 'get',
    url: 'https://v3.football.api-sports.io/timezone',
    headers: {
        'x-rapidapi-host': 'v3.football.api-sports.io',
        'x-rapidapi-key': '0faf0093c15b42c79332d719ba6724f9'
    }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

app.use(express.static(__dirname + '/public'));

app.use('/', router);
app.listen(process.env.PORT || 3000);

console.log(`Server running on Port ${PORT}`);
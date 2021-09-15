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

var axios = require('axios').default;

var options = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/leagues',
    headers: {
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
        'x-rapidapi-key': '0faf0093c15b42c79332d719ba6724f9'
    }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});

app.use(express.static(__dirname + '/public'));

app.use('/', router);
app.listen(process.env.PORT || 3000);

console.log(`Server running on Port ${PORT}`);
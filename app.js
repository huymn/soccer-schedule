const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();

const PORT = 3000;              //Port number of website

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
})

app.use(express.static(__dirname + '/public'));

app.use('/', router);
app.listen(process.env.PORT || 3000);

console.log(`Server running on Port ${PORT}`);
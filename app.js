const express =require('express');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/', function (req, res) {
    res.send('GET request to the homepage')
})

app.post('/test', function (req, res) {
    let x = req.body.x;
    let y = req.body.y;
    let xp = parseInt(x);
    let yp = parseInt(y);
    let s = xp + yp;

    data = {
      sum: s,
   };
   
   res.send(data);
})

app.listen(port);
console.log("server is running on port " + port);
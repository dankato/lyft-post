const express =require('express');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function (req, res) {
    res.send('GET request to the homepage')
})

app.post('/test', function (req, res) {
    response = {
      sum: req.body.data.x + req.body.data.y,
   };
   res.end(JSON.stringify(response));
})

app.listen(port);
console.log("server is running on port " + port);
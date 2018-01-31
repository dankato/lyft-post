## Software Engineering Apprenticeship Tech Sample

The code in Node.

* a POST request to the route “/test”
* accepts two arguments “x” and “y” 
* returns a JSON object {“sum”: x+y}. 

### Setup
1. clone
2. npm install
3. run 'node app'
4. curl -X POST http://localhost:3000/test --data '{"x": 4, "y": 2}' -H 'Content-Type: application/json'

### Post request
```
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
```

```
url: http://localhost:3000/test
body:
    {
        "data": 	{ 
            "x": 4, 
            "y": 2
            
        }
    }
```
```
Output: {"sum":6}
```
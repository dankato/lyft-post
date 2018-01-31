## Software Engineering Apprenticeship Tech Sample

The code in Node.

* a POST request to the route “/test”
* accepts two arguments “x” and “y” 
* returns a JSON object {“sum”: x+y}. 


```
app.post('/test', function (req, res) {
    response = {
      sum: req.body.data.x + req.body.data.y,
   };
   res.end(JSON.stringify(response));
})
```

```
{"sum":6}
```
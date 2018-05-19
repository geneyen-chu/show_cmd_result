var express = require('express');
var exec = require('child_process').exec;
var app = express();

console.log('Server-side code running');
cmdStr = "pwd"

app.use(express.static('public'));

app.get('/demo.html', function (req, res) {
   res.sendFile( __dirname + "/demo.html" );
})

app.get('/trigger_cmd', function (req, res) {
   console.log("trigger cmd");
   exec(cmdStr, function(err,stdout,stderr){
    if(err) {
        console.log('get weather api error:'+stderr);
    } else {
	res.status(200).send({'result':stdout});
        console.log(stdout);
    }
});
   
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});



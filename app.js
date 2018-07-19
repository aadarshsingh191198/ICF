var express = require('express');
var app = express();
var cors = require('cors');
var morgan = require('morgan');

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(morgan('combined'));
// app.use(logger('dev'));
app.use(cors(corsOptions));


app.get('/', (req, res) => {
	var spawn = require("child_process").spawn;

    var process = spawn('python',["./evaluate.py",
                            req.query.topic] );

    process.stdout.on('data', function(data) {
        res.header("Content-Type: application/json; charset=UTF-8");
        data=data.toString()[0];
        res.send({"inappropriates":data});
    });
});


app.listen(3000, function() {
    console.log('server running on port 3000');
} )
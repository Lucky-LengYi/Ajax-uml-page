var express = require('express');
var app = express();
var ejs = require('ejs');
var bodyParser = require('body-parser');
var FormValueGetter = require('./form-value-getter');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.engine('.html', ejs.__express);
app.use(express.static('public'));
app.set('view engine', 'html');

app.get('/', function(req, res) {
    res.render('index', {
        score: 0
    });
});

app.post('/get-score', function(req, res) {
    var score = 0;
    var form = new FormValueGetter(req.body);
    form.form_value.forEach(function(item) {
        score += item.score;
    });
    res.send("" + score);
    res.end();
});

var server = app.listen(3000, function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});

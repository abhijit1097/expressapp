var express=require('express');
var path = require('path');
var bodyParser = require('body-parser');


var app=express();

app.use(express.static(path.join(__dirname,'public')));

app.set('view engine','ejs');
var routes=require('./routes');
app.use('routes',routes);
app.get('/',routes.home);
app.get('/star_wars_episode/:episode_number?',routes.movie_single);
app.get('*',routes.notfound);
app.listen(3000,function(){
    console.log("the app is running on the server");
});
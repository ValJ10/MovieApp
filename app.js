// SERVER FILE
// To Make It Run use the "Node app.js"

var express = require('express');

// THis App represents the express app

var app = express();

// Now We can use ejs has a tenplate
// Can use any template but trying this one

app.set('view engine','ejs');

// Specify the directory for the images, now when we have to access it.
// It determines that the images, stylesheets are
var path = require('path');
app.use(express.static(path.join(__dirname,'public')));


// Since we're now using the routes folder we have to:
// Routes Files
var routes = require('./routes');

// Bind the Routes
// Home Route:
app.get('/', routes.home);

// Movies Single
// localhost/star_wars_episode/:episode_number
// The /: means that we gonna pass it, from variable
app.get('/star_wars_episode/:episode_number?', routes.movie_single);

// Doesnt Exist
// Routes For things that does not exist
app.get('*', routes.notFound);


// Make THe App Listen SO We can use localhost

app.listen(3000,function(){
    console.log("Runnin On Port 3000");
});


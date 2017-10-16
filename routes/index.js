// All logic for the routes are in here

// This Variable represents the file, we can acces the name, images etc..
var moviesJson = require('../movies.json');

exports.home = function(req,res){
	// Since We Declare the title variable, we now can use it in home.ejs template

	var movies = moviesJson.movies;

	res.render('home', {
        title: "Star Wars",
        movies: movies
    });
};


// Movies Single
// localhost/star_wars_episode/:episode_number
// The /: means that we gonna pass it, from variable

exports.movie_single = function(req, res){

	var episode_number = req.params.episode_number;

	var movies = moviesJson.movies;

	if(episode_number >=1 && episode_number <=6){
		 // Take Each movie, -1 because of 0 index.
		 // Variable perspectove
		var movie = movies[episode_number-1];
		var title = movie.title;
		var main_characters = movie.main_characters;
	     
   
    res.render('movie_single', {
        movies: movies,
        movie: movie,
        title: title,
        main_characters: main_characters
       
    });

}else{
     res.render('notFound',{
     	movies:movies,
     	title:"404 Not Found"

     });
}
};


// Doesnt Exist
// Routes For things that does not exist

exports.notFound = function  (req, res) {
     var movies = moviesJson;
     res.render('notFound', {
        movies:movies,
        title: "404 Not Found"
     });
};
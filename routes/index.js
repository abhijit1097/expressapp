var moviesjson= require('../movies.json');


exports.home=function(req,res){
    var movies= moviesjson.movies;
    res.render('home',{
        title:"star wars movies",
        movies: movies
    });
};

exports.movie_single=function(req,res){
    var episode_number=req.params.episode_number;
    res.send("This is the page for" + episode_number);
};

exports.notfound=function(req,res){
    res.send("this is not the page you are looking for");
};

var movies = [
  {
    title: "Bears",
    rating: "5",
    hasWatched: true
  },
  {
    title: "F9",
    rating: "4.5",
    hasWatched: false
  },
  {
    title: "Red Notice",
    rating: "5",
    hasWatched: true
  },
  {
    title: "Cinda",
    rating: "3.5",
    hasWatched: false
  }
]

// build string:
movies.forEach(function(movie){
  var result = "You have ";
  if (movie.hasWatched){
    result += "watched ";
  }
  else {
    result += "not seen "
  }
  result += "\"" + movie.title + "\" - ";
  result += movie.rating + " " + "stars.";
  console.log(result);
})

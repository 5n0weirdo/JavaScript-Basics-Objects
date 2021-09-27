// array of posts that contains objects which coontains arrays too:
var posts = [
    {
      title: "Golang is fast and awesome!",
      author: "Dev",
      comments: ["Cool post", "Horrible post"]
    },
    {
      title: "Python is awesome for creating scripts.",
      author: "Script Kiddie",
      comments: ["Horrible post"]
    }
]
console.log(posts);
console.log(posts[0].title); //Golang is fast and awesome!
console.log(posts[1].comments); //['Horrible post']

var comments = {}
comments.data = ["Horrible", "Good work!", "Awesome"]
comments.print = function() {
  this.data.forEach(function(el) {
    console.log(el);
  });
}
comments.print();

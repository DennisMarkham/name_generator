//********************************************************
// fs is a core Node package for reading and writing files
var fs = require("fs");

var input = process.argv;
var inputSpliced = input.splice(0,2);
var newNames = "";



var i;
for (i = 0; i < input.length; i++) { 
  newNames += input[i] + ", ";
}



fs.appendFile("surnames.txt", newNames, function(err) {

  // If the code experiences any errors it will log the error to the console.
  if (err) {
    return console.log(err);
  }

  // Otherwise, it will print: "movies.txt was updated!"
  console.log("movies.txt was updated!");

});
//OH SHIT, write is not the same as append

fs.readFile("surnames.txt", "utf8", function(error, data) {

  // If the code experiences any errors it will log the error to the console.
  if (error) {
    return console.log(error);
  }

  // We will then print the contents of data
  console.log(data);

  // Then split it by commas (to make it more readable)
  var dataArr = data.split(",");

  // We will then re-display the content as an array for later use.
  console.log(dataArr);

  var rn = Math.floor(Math.random() * dataArr.length);

  console.log(dataArr[rn]);

  console.log(newNames);

});
const express = require("express");

const app = express();

app.get("/", function (request, response) {
  response.send("First route");
});

//when server is ready it calls the callback function
app.listen(3000, function () {
  console.log("Running on port 3000 and listening");
});

var express = require("express");
var app = express();

app.use(express.static(__dirname)); // Serve static files from root directory

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(process.env.PORT || 5000, function () {
  console.log("Server is running...");
});

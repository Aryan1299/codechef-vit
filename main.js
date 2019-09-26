const express = require("express");
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(__dirname + "/"));

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname + "/" });
});

app.listen(port, err => {
  if (err) throw err;
  console.log(`app running on port ${port}`);
});

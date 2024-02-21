const express = require("express");

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/",(req, res) => {
    res.render("index.ejs");
});
 


app.listen(port, () => {
    console.log("server is running on port 3000")
});
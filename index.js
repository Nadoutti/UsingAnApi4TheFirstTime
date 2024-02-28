const express = require("express");
const axios = require('axios');
const https = require("https");

const app = express();
const port = 3000;

const API_KEY = "8a99acf1fe4fd8d7e7432dfd51be8251";

app.use(express.static("public"));

app.get("/",(req, res) => {
    res.render("index.ejs");
});
 


app.listen(port, () => {
    console.log("server is running on port 3000")
});
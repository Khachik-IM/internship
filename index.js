import express from "express";
import fs from "fs";
const app = express();

app.get("/", (req, res) => {
    res.send("datark");
});
app.get("/hello", (req, res) => {
    res.send("hello");

});
app.get("/bye", (req, res) => {
    res.send('bye');
});
app.post("/bye", (req, res) => {
    req.body.name;
});
app.listen(3001);
const express = require("express");
const router = express();

router.get('/', (req, res) => {
   res.sendFile(__dirname +"/index.html")
});

router.get('/locations', (req, res) => {
    res.sendFile(__dirname +"/Locations.html")
 });

 router.get('/JobApp', (req, res) => {
    res.sendFile(__dirname +"/JobApp.html")
 });

 router.get('/ContactUs', (req, res) => {
    res.sendFile(__dirname +"/ContactUs.html")
 });


module.exports = router;
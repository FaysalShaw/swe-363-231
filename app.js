const express = require('express');
const app = express();
app.use(express.static(__dirname));


app.get('/', (req, res) => {
   res.sendFile(__dirname +"/index.html")
});

app.get('/locations', (req, res) => {
    res.sendFile(__dirname +"/Locations.html")
 });

 app.get('/JobApp', (req, res) => {
    res.sendFile(__dirname +"/JobApp.html")
 });

 app.get('/ContactUs', (req, res) => {
    res.sendFile(__dirname +"/ContactUs.html")
 });

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
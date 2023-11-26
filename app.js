const express = require('express');
const app = express();
app.use(express.static(__dirname));


app.get('/', (req, res) => {
   res.sendFile("index.html")
});

app.get('/locatiosn', (req, res) => {
    res.sendFile("Locations.html")
 });

 app.get('/JobApp', (req, res) => {
    res.sendFile("JobApp.html")
 });

 app.get('/ContactUs', (req, res) => {
    res.sendFile("ContactUs.html")
 });

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
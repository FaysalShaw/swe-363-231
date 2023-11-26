const express = require('express');
const app = express();
app.use(express.static(__dirname));
const router = require('./router')
app.use(router)

const port = 50000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
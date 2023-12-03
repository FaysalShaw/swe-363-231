const express = require('express');
const app = express();
const router = require('./router')
app.use("/Submission.html",function (req,res,next){
    console.log("Your form has been sent")
    next();
})
app.use(router)
app.use(express.static(__dirname));




const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
const express = require('express');
const routes = require('./routes/user.js')


const app = express();
const PORT = 5002;




app.use("/pizzas",routes)




app.listen(PORT , ()=> console.log("Server is running at port " + PORT));


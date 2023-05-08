require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");

const mongoose = require("mongoose");

const port = process.env.PORT ||  5000 ;

const app = express();

app.use(cors());
app.use(express.json());

app.use ( express.urlencoded ( { extended: true } ) )


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
  



mongoose.connect(`mongodb+srv://Ashu:Ashu1998@cluster0.kwidsgh.mongodb.net/test?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

  
  app.use("/api/user", userRoutes);

app.listen( port , () => {
  console.log("server started on port 5000");
});

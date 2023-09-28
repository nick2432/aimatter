const express = require("express");
const app=express();
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const user =require("./routes/user")
const product =require("./routes/product")
app.use(cors({
    origin: true,
    credentials: true
  }));
  const database = (module.exports = () => {
    const connectionParams = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    try {
      mongoose.connect(
        "mongodb+srv://nikhilanand2432:a6J3RIHJzIBh4kKK@cluster0.o0tbhui.mongodb.net/?retryWrites=true&w=majority",
        connectionParams
      );
      console.log("Database connected succesfully");
    } catch (error) {
      console.log(error);
      console.log("Database connection failed");
    }
  });
  database();
  app.use(express.json());
  app.use('/api', user);
  app.use('/api', product);
  app.use(helmet());
app.use(morgan("common"));
app.use(helmet());
app.listen(8100,()=>{
    console.log("ready");
})
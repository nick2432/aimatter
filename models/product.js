const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    productname:{
        type:String,
    },
    count:{
        type: Number,
    },
    customer:{
        type:[]
    },
});
module.exports = mongoose.model("Product", userSchema);
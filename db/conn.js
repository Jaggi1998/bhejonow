const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://0.0.0.0:27017/bhejonow").then(() => {
    console.log("Connection successful");
}).catch((e) => {
    console.log("connection denied "+ e)
})
const mongoose = require("mongoose");

const connect = mongoose.connect(
  "mongodb+srv://klabhishek16:abhishek123@cluster0.oghihoj.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);


connect.then(() => {
  console.log("MongoDB Connection Succeeded.");
}).catch(err => {
  console.log("Error in DB connection: " + err);
});

module.exports = connect;
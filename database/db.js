const mongoose = require("mongoose");
const connectToDb = () => {
  mongoose
    .connect(
      "mongodb+srv://root:admin@todolist.pdlcf.mongodb.net/?retryWrites=true&w=majority&appName=todolist",
    )
    .then(() => console.log("MongoDB Atlas conectado!"))
    .catch((err) => console.log(err));
};

module.exports = connectToDb;

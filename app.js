const express = require("express");
const cors = require("cors");
require("dotenv").config();

const sequelize = require("./config/db");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/admin", require("./routes/adminroutes"));

app.use("/api/classes", require("./routes/classroutes"));

app.use("/uploads",express.static("uploads"));

app.use("/api/registrations",require("./routes/registrationRoutes"));

sequelize.sync()
.then(() => {

  console.log("Database Connected");

  app.listen(process.env.PORT, () => {
    console.log(`Server Running on ${process.env.PORT}`);
  });

})
.catch((err) => {
  console.log(err);
});
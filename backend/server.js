require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//import routes
// const eventRoutes = require("./routes/eventRoutes");
const ticketRoutes = require("./routes/ticketRoutes");
const eventRoutes = require("./routes/eventRoutes");

//import cronJob
const cronJob = require("./cronJob");

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(cors());
app.use(bodyParser.json());

//ROUTES
// app.use("/api/events", eventRoutes);
app.use("/api/tickets", ticketRoutes);
app.use("/api/events", eventRoutes);

//Start the cron job
cronJob.start();

//start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
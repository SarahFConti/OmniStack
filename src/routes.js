const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");

const SessionController = require("./controllers/SessionController");
const SpotController = require("./controllers/SpotController");
const DashboardController = require("./controllers/DashboardController");
const BookingController = require("./controllers/BookingController");

const routes = express.Router();
//doc do multer
const upload = multer(uploadConfig);

routes.post("/sessions", SessionController.store);
routes.get("/spots", SpotController.index);
routes.get("/dashboard", DashboardController.show);

//usuario ta querendo criar uma reserva dentro desse spot
routes.post("/spots/:spot_id/bookings", BookingController.store);

//single pq vc ta recebendo uma img
routes.post("/spots", upload.single("image"), SpotController.store);
// routes.post("/sessions", upload.single("imageUser"), SessionController.store);

routes.delete("/spots/:spot_id", SpotController.destroy);

module.exports = routes;

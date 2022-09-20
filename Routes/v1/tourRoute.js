const express = require('express');
const router = express.Router()
const controller = require("../../Controllers/tourController")

router.get("/tours", controller.getTours)
router.post("/tours", controller.postTour)
router.get("/tour/:id", controller.getTour)
router.patch("/tour/:id", controller.updateTour)
router.get("/tour/trending", controller.trendingTours)
router.get("/tour/cheapest", controller.chepestTours)

module.exports = router
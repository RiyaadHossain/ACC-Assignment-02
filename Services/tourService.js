const Tour = require("../Models/tourModel")

/* ----------------- Get All Tours ----------------- */
exports.getTours = async () => {
    const result = await Tour.find({})
    return result
}


/* ----------------- Get Single Tour ----------------- */
exports.getTour = async (id) => {
    const result = await Tour.findById(id)
    return result
}

/* ----------------- Post A Tour ----------------- */
exports.postTour = async (data) => {
    const newTour = new Tour(data)
    const result = await newTour.save()
    return result
}

/* ----------------- Update A Tour ----------------- */
exports.updateTours = async () => {
    const result = await Tour.find({})
    return result
}

/* ----------------- Get Trending Tours ----------------- */
exports.trendingTours = async () => {
    const result = await Tour.find({})
    return result
}

/* ----------------- Get Cheapest Tours ----------------- */
exports.chepestTours = async () => {
    const result = await Tour.find({})
    return result
}

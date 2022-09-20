const Tour = require("../Models/tourModel")

/* ----------------- Get All Tours ----------------- */
exports.getTours = async () => {
    const result = await Tour.find({})
    return result
}


/* ----------------- Get Single Tour ----------------- */

/* ----------------- Post A Tour ----------------- */
exports.postTour = async (data) => {
    const newTour = new Tour(data)
    const result = await newTour.save()
    return result
}

/* ----------------- Update A Tour ----------------- */

/* ----------------- Get Trending Tours ----------------- */

/* ----------------- Get Cheapest Tours ----------------- */

const service = require("../Services/tourService")



/* ----------------- Get All Tours ----------------- */
exports.getTours = async (req, res) => {
    res.send("hello, can you hear me?")
}

/* ----------------- Get Single Tour ----------------- */
exports.getTour = async (req, res) => {
    res.send("hello, can you hear me?")
}

/* ----------------- Post A Tour ----------------- */
exports.postTour = async (req, res) => {
    const data = req.body

    try {
        const result = await service.postTour(data)
        res.status(500).json({
            status: 'Success',
            message: "Tour Info added Successfully!",
            data: result
        })

    } catch (error) {
        res.status(500).json({
            status: 'Fail',
            error: error.message
        })
    }

}

/* ----------------- Update A Tour ----------------- */
exports.updateTour = async (req, res) => {
    res.send("hello, can you hear me?")
}

/* ----------------- Get Trending Tours ----------------- */
exports.trendingTours = async (req, res) => {
    res.send("hello, can you hear me?")
}

/* ----------------- Get Cheapest Tours ----------------- */
exports.chepestTours = async (req, res) => {
    res.send("hello, can you hear me?")
}
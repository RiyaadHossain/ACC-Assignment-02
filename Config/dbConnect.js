const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://${process.env.MONGO_NAME}:${process.env.MONGO_PASS}@cluster0.pedkpsn.mongodb.net/tour-management?retryWrites=true&w=majority`)
    .then(() => console.log("Database Connected"))
    .catch(err => console.log(err))
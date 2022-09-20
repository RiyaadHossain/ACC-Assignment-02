const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/tour-management')
    .then(() => console.log("Database Connected"))
    .catch(err => console.log(err))
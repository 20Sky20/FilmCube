const { default: mongoose } = require("mongoose");

const ratingSchema = new mongoose.Schema({
    mediaID: {
        type: Number,
    },
    // userID: {

    // },
    rating: {
        type: Number,
        'default': 0,
        min: 0,
        max: 5
    },
    comment: {
        type: String,
    },
});


mongoose.model('Rating', ratingSchema);
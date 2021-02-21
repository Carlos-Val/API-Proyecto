const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

let filmSchema = new Schema({

    id: {
        type: ObjectId
    },
    title: {
        type: String,
        required: true,

    },
    year: {
        type: Number
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    genre: {
        type: String,
        class: {
            "Action": 01,
            "Adventure": 02,
            "Animation": 03,
            "Comedy": 04,
            "Crime": 05,
            "Drama": 06,
            "Family": 07,
            "Fantasy": 08,
            "History": 09,
            "Horror": 10,
            "Music": 11,
            "Mystery": 12,
            "Romance": 13,
            "Science Fiction": 14,
            "Thriller": 15,
            "War": 16,
            "Western": 17
        },

    },
    adult: {
        type: Boolean,
        default: true
    },
})




const film = mongoose.model("film", filmSchema);

module.exports = film;
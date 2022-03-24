const mongoose = require('mongoose');
const connection = require('../util/database');
const User = require('./user.schema');

// const movieId = new mongoose.Schema({
//     movie_id: {
//         trakt: Number,
//         slug: String,
//         imdb: String,
//         tmdb: Number
//     }
// });

const movieList = new mongoose.Schema({
    title: { type: String, required: true },
    user_id: { type: mongoose.Schema.ObjectId, ref: User, required: true },
    trakt_id: { type: Number, required: true }
});

const MovieList = connection.model('MovieList', movieList);
module.exports = MovieList;

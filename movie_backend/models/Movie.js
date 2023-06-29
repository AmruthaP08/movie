const mongoose = require('mongoose');

// Define the movie schema
const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  actor: {
    type: String,
    required: true
  },
  actress: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  camera: {
    type: String,
    required: true
  },
  producer: {
    type: String,
    required: true
  },
  language: {
    type: String,
    required: true
  }
});

// Create the movie model
const Movie = mongoose.model('Movie', movieSchema);

// Export the movie model
module.exports = Movie;

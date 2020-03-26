const mongoose = require('mongoose');
const tourSchema = new mongoose.Schema({});
const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;

const mongoose = require('../connection');
const Schema = mongoose.Schema;

const schema = new Schema({
    user: String,
    title: String,
    data: String,
    created: Date
})

const model = mongoose.model('videos', schema);

module.exports = model;
const { Schema, model } = require('mongoose');

const fruitSchema = new Schema({
    title: String,
    image: String,
    link: String,
    description: String
});

const Fruit = model('Fruit', fruitSchema);

module.exports = Fruit;

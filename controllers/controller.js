const Fruit = require('../models/fruits');

async function addCard(req, res) {
    try {
        const newCard = req.body;
        const fruit = new Fruit(newCard);
        await fruit.save();
        console.log("New card added:", newCard);
        res.json({ success: true, message: 'Card added successfully' });
    } catch (error) {
        console.error("Error adding card:", error);
        res.status(500).json({ success: false, message: 'Failed to add card' });
    }
}

async function getCards(req, res) {
    try {
        const cards = await Fruit.find({});
        res.json({ success: true, data: cards });
    } catch (error) {
        console.error("Error fetching cards:", error);
        res.status(500).json({ success: false, message: 'Failed to fetch cards' });
    }
}

module.exports = { addCard, getCards };

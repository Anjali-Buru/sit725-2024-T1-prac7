const { MongoClient } = require('mongodb');

// MongoDB connection URI
const uri = "mongodb+srv://s223671346:URWpYJTDM2V7zu9h@cluster1.1ktvqaj.mongodb.net/?retryWrites=true&w=majority";

// MongoDB client instance and collection
let client;
let collection;

// Function to connect to the MongoDB database
const connectDB = async () => {
    try {
        // Connect to MongoDB
        client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");

        // Set the collection
        collection = client.db().collection('fruits'); 

        // Check if the collection is empty and insert initial data if it is
        const count = await collection.countDocuments();
        if (count === 0) {
            await collection.insertMany([
                {
                    title: "fruit 2",
                    image: "images/image 2.png",
                    link: "About image 2",
                    description: "I am pomegranate"
                },
                {
                    title: "fruit 3",
                    image: "images/image 3.png",
                    link: "About image 3",
                    description: "I am kiwi"
                }
            ]);
            console.log("Initial fruit data inserted into MongoDB");
        }
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error; // Throw error to handle it in the calling code
    }
};

// Function to get the MongoDB client instance
const getClient = () => {
    if (!client) {
        throw new Error('MongoDB connection not established');
    }
    return client;
};

module.exports = { connectDB, getClient };
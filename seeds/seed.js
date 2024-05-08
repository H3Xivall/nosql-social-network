require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');
const Thought = require('../models/Thought');
const { faker } = require('@faker-js/faker');

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('MongoDB connected');

    // Seed data
    seedData()
    .then(() => {
        console.log('Seed data created successfully');
        mongoose.disconnect();
    })
    .catch((error) => {
        console.error('Error seeding data: ', error);
        mongoose.disconnect();
    });
})
.catch((error) => {
    console.error('Error connecting to MongoDB: ', error);
});

// Seed data function

const seedData = async () => {
    try {
        // Seed 50 random users
        const users = [];
        for (let i = 0; i < 50; i++) {
            const user = new User({
                username: faker.internet.userName() + (i + 1).toString(),
                email: faker.internet.email(),
            });
            users.push(user);
        }
        await User.insertMany(users);

        const allUsers = await User.find();

        // Seed 100 random thoughts
        const thoughts = [];
        for (let i = 0; i < 100; i++) {
            const thought = new Thought({
                thoughtText: faker.lorem.sentence(),
                username: allUsers[Math.floor(Math.random() * allUsers.length)]._id,
            });
            thoughts.push(thought);
        }
        await Thought.insertMany(thoughts);
    } catch (error) {
        console.error('Error seeding data: ', error);
    }
};
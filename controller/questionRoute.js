const express = require("express");
const questionRoute = express.Router();
const Question = require("../model/questions");

questionRoute.post('/add', async (req, res) => {
    try {
        // Assuming req.body has a 'question' property with the question data
        const { text, options, correctAnswer } = req.body;

        // Find the question document or create a new one
        const existingQuestion = await Question.findOne({});
        if (existingQuestion) {
            // If there is an existing question, add the new question to the array
            existingQuestion.questions.push({ text, options, correctAnswer });
            await existingQuestion.save();
            res.json(existingQuestion);
        } else {
            // If there is no existing question, create a new document with the question
            const newQuestion = new Question({
                questions: [{ text, options, correctAnswer }],
            });
            const savedQuestion = await newQuestion.save();
            res.json(savedQuestion);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

questionRoute.get('/get', async (req, res) => {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (error) {
        console.error('Error fetching questions:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = questionRoute;

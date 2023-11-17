const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    questions: [
      {
        text: { type: String, required: true },
        options: [{ type: String, required: true }],
        correctAnswer: { type: String, required: true },
      },
    ],
  },
  {
    collection: "questions",
  }
);

module.exports = mongoose.model("Question", questionSchema);

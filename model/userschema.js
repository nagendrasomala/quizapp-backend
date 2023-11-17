const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  phoneNumber: { type: String },
  marks: { type: Number },
  score: { type: Number },
  startTime: { type: String }, 
  endTime: { type: String },  
  answers: []
}, {
  collection: "users"
});

module.exports = mongoose.model("User", userSchema);

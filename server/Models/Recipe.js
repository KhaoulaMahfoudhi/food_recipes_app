const mongoose = require('mongoose');
const recipeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  title: { type: String },
  FirstName: { type: String },
  image: { type: String },
  time: { type: String },
  serving: { type: String },
  ingredients: [String],
  description: [String],
  likes: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
      },
    },
  ],
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
      },
      text: {
        type: String,
        required: true,
      },
      FirstName: { type: String },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = recipe = mongoose.model('recipe', recipeSchema);

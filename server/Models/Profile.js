const mongoose = require('mongoose');
const ProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  FirstName: { type: String },
  LastName: { type: String },
  PhoneNumber: { type: Number },
  image: { type: String },
  bio: { type: String },
  social: {
    youtube: { type: String },
    instagram: { type: String },
    facebook: { type: String },
  },
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);

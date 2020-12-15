const mongoose = require('mongoose');
const adminSchema = new mongoose.Schema({
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});
module.exports = admin = mongoose.model('admin', adminSchema);

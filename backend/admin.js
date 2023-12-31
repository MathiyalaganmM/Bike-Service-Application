const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true
  },
}, { timestamps: true });

const admin = mongoose.model('Admin', AdminSchema);
module.exports = admin;
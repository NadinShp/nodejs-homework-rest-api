const { Schema } = require('mongoose');

const contactSchema = Schema(
  {
    name: {
      type: String,
      minlength: [2, 'The minimum name length must be two letters'],
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
      unique: true,
    },
    phone: {
      type: String,
      unique: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true },
);

module.exports = contactSchema;

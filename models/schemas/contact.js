const { Schema } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

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
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  { versionKey: false, timestamps: true },
);

contactSchema.plugin(mongoosePaginate);

module.exports = contactSchema;

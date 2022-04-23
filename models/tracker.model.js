const mongoose = require('mongoose');

const { Schema } = mongoose;

const trackerSchema = new Schema(
  {
    opened: {
      type: Boolean,
      default: false,
    },
    openedAt: {
      type: [Date],
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Tracker', trackerSchema);

const { Schema, model, Mongoose } = require("mongoose");

const rentalSchema = new Schema(
  {
    customer: {
      type: Schema.Types.ObjectId,
      ref: 'Customers',
      required: true
    },
    vehicle: {
      type: Schema.Types.ObjectId,
      ref: 'Vehicles',
      required: true
    },
    pickupLocation: {
      type: String,
      required: true
    },
    dropoffLocation: {
      type: String,
      required: true
    },
    pickupDate: {
      type: Date,
      required: false
    },
    dropoffDate: {
      type: Date,
      required: false
    },
    totalAmount: {
      type: String,
      required: true
    },
    isPaid: {
      type: String,
      default: false
    }
  },
  {
    timestamps: true,
  }
);

const Rental = model("Rentals", rentalSchema);

module.exports = Rental;

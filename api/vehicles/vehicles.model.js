const { Schema, model } = require("mongoose");

const vehiclesSchema = new Schema(
  {
    carName: {
      type: String,
      trim: true,
      required: true,
    },
    carColor: {
      type: String,
      trim: true,
      required: false,
    },
    carModel: {
      type: String,
      required: true,
      lowercase: true,
    },
    engine: {
      type: String,
      required: true,
    },
    horsepower: {
      type: String,
      required: false,
    },
    transmission: {
      type: String,
      enum: ['manual', 'automatic'],
      required: false,
    },
    fuelType: {
      type: String,
      required: true,
    },
    mileage: {
      type: String,
      required: false,
    },
    rentalPrice: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Car = model("Vehicles", vehiclesSchema);

module.exports = Car;

const express = require("express");
const router = express.Router();
const Car = require("./vehicles.model");
const mongoose = require('mongoose');
const bcryptjs = require("bcryptjs");
const saltRounds = 10;

// insert product
router.post('/', (req, res) => {
  const product = new Car({
      _id: new mongoose.Types.ObjectId,
      carName: req.body.carName,
      carColor: req.body.carColor,
      carModel: req.body.carModel,
      engine: req.body.engine,
      horsepower: req.body.horsepower,
      transmission: req.body.transmission,
      fuelType: req.body.fuelType,
      mileage: req.body.mileage,
      rentalPrice: req.body.rentalPrice,
  })
  product.save().then(results => {
    res.status(200).json({
        product:results
    });
  }).catch(err => {
    res.status(500).json({
      error: err
    });
  })
})

// get all products
router.get('/', async (req, res) => {
  await Car.find().then(result => {
      res.status(200).json({
          products: result
      });
  }).catch(err => {
      res.status(500).json({
          error: err
      })
  })
})

// update product
router.put('/:id',async (req, res) => {
  await Car.findByIdAndUpdate({ _id: req.params.id }, req.body).then(results => {
      res.status(200).json({
          updated_product: results
      })
  }).catch(err => {
      res.status(500).json({
          error: err
      })
  })
})

// get specific product by id
router.get('/:id',async (req, res) => {
  await Car.findById({_id: req.params.id}).then(result => {
      res.status(200).json({
          product: result
      });
  }).catch(err => {
      res.status(500).json({
          error: err
      })
  })
})

// delete request from database
router.delete('/:id', async (req, res) => {
  await Car.findOneAndDelete({ _id: req.params.id }).then(results => {
      res.status(200).json({
          message: 'Car deleted',
          results: results
      })
  }).catch(err => {
      res.status(500).json({
          error: err
      })
  })
})

module.exports = router;

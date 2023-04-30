const express = require("express");
const router = express.Router();
const Rental = require("./rentals.model");
const mongoose = require('mongoose');
const bcryptjs = require("bcryptjs");
const saltRounds = 10;

// insert rental info
router.post('/', (req, res) => {
  const rental = new Rental({
      _id: new mongoose.Types.ObjectId,
      customer: req.body.customer,
      vehicle: req.body.vehicle,
      pickupLocation: req.body.pickupLocation,
      dropoffLocation: req.body.dropoffLocation,
      pickupDate: req.body.pickupDate,
      dropoffDate: req.body.dropoffDate,
      totalAmount: req.body.totalAmount,
      isPaid: req.body.isPaid,
  })
  rental.save().then(results => {
    res.status(200).json({
        rental: results
    })
  }).catch(err => {
    res.status(500).json({
      error: err
    })
  })
})

// get all rentals
router.get('/', async (req, res) => {
  await Rental.find().then(result => {
      res.status(200).json({
          rental: result
      });
  }).catch(err => {
      res.status(500).json({
          error: err
      })
  })
})

// update rental
router.put('/:id',async (req, res) => {
  await Rental.findByIdAndUpdate({ _id: req.params.id }, req.body).then(results => {
      res.status(200).json({
        rental: results
      })
  }).catch(err => {
      res.status(500).json({
          error: err
      })
  })
})

// get specific rental by id
router.get('/:id',async (req, res) => {
  await Rental.findById({_id: req.params.id}).populate(
    'customer', 'firstName lastName email phone'
  ).populate(
    'vehicle'
  ).then(result => {
      res.status(200).json({
           record: result
      });
  }).catch(err => {
    console.log('err: ', err);
      res.status(500).json({
          error: err
      })
  })
})

// delete request from database
router.delete('/:id', async (req, res) => {
  await Rental.findOneAndDelete({ _id: req.params.id }).then(results => {
      res.status(200).json({
          message: 'rental deleted',
          results: results
      })
  }).catch(err => {
      res.status(500).json({
          error: err
      })
  })
})

module.exports = router;

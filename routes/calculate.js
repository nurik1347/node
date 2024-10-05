// routes/calculate.js
const express = require('express');
const router = express.Router();

// POST /api/calculate
// This route adds two numbers and returns the result
router.post('/', (req, res) => {
  const { num1, num2 } = req.body;

  // Check if num1 and num2 are provided
  if (num1 === undefined || num2 === undefined) {
    return res.status(400).json({ message: 'Both num1 and num2 are required' });
  }

  // Calculate the sum
  const sum = num1 + num2;

  // Return the result
  res.json({ sum });
});

module.exports = router;

const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const maxAge = 24 * 60 * 60 * 10;
  const token = 'cookie practice'

  res.cookie('jwt', token, { httpOnly: true, sameSite: true, maxAge: maxAge * 1000 })
  res.status(200).send('respond with a resource');
});

module.exports = router;

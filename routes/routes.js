const express = require('express');
const controllers = require('./../controllers/controllers');

const router = express.Router();

router.get('/countries', controllers.getCountries);
router.get('/countries/:country(*)', controllers.getCountryData);
router.get('*', controllers.pageNotFound);

module.exports = router;
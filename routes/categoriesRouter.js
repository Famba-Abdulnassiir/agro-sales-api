const express = require('express');
const categoriesController = require('../controllers/categoryController')
const router = express.Router();

router.get('/', categoriesController)


module.exports =router;
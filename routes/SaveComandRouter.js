const express = require('express');
const SaveComandsController = require('../controllers/SaveComandsController');

const CMDRoute = express.Router();


//CMDRoute.route('/').get(SaveComandsController.getComands());

CMDRoute.get('/', SaveComandsController.getComands());


module.exports = CMDRoute;
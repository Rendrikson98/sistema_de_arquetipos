const express = require('express');

const ExamController = require('./controllers/ExamController');
const BreathController = require("./controllers/BreathController");
const FamilyController = require('./controllers/FamilyController');


const routes = express.Router();

routes.get('/exam', ExamController.index);
routes.post('/exam', ExamController.create);

routes.get('/breath', BreathController.index);
routes.post('/breath', BreathController.create);

routes.get('/family', FamilyController.index);
routes.post('/family', FamilyController.create);

module.exports = routes;
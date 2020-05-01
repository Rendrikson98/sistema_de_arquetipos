const express = require('express');

const ExamController = require('./controllers/ExamController');
const BreathController = require("./controllers/BreathController");
const FamilyController = require('./controllers/FamilyController');
const BloodPressure = require('./controllers/BloodPressure');
const AdmissionController = require('./controllers/AdmissionController');
const Listcontroller = require('./controllers/ListController');
const ExamUpdateController = require('./controllers/examUpdateController');


const routes = express.Router();

routes.get('/exam', ExamController.index);
routes.post('/exam', ExamController.create);

routes.get('/breath', BreathController.index);
routes.post('/breath', BreathController.create);

routes.get('/family', FamilyController.index);
routes.post('/family', FamilyController.create);

routes.get('/bloodPressure', BloodPressure.index);
routes.post('/bloodPressure', BloodPressure.create);

routes.get('/admission', AdmissionController.index);
routes.post('/admission', AdmissionController.create);


routes.get('/examUpdate/:id', ExamUpdateController.index);
routes.put('/examUpdate/:id', ExamUpdateController.update);

module.exports = routes;
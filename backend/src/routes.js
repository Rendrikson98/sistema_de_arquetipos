const express = require('express');

const ExamController = require('./controllers/ExamController');

const routes = express.Router();

routes.get('/exam', ExamController.index);
routes.post('/exam', ExamController.create);

module.exports = routes;
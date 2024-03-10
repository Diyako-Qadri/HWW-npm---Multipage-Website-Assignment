import express from 'express';
import { push, pull, hinge, squat } from '../data/movements.js';

const exerciseRouter = express.Router();
exerciseRouter.use(express.static('public'));

exerciseRouter.get('/push', (req, res) => {
  res.render('pages/content.ejs', {
    pagetitle: 'Push Exercises',
    exercises: push,
    url: req.url,
  });
});

exerciseRouter.get('/pull', (req, res) => {
  res.render('pages/content.ejs', {
    pagetitle: 'Pull Exercises',
    exercises: pull,
    url: req.url,
  });
});

exerciseRouter.get('/Hinge', (req, res) => {
  res.render('pages/content.ejs', {
    pagetitle: 'Hinge Exercises',
    exercises: hinge,
    url: req.url,
  });
});

exerciseRouter.get('/squat', (req, res) => {
  res.render('pages/content.ejs', {
    pagetitle: 'Squat Exercises',
    exercises: squat,
    url: req.url,
  });
});

export default exerciseRouter;

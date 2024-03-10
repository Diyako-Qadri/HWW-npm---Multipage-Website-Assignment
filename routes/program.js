import express from 'express';
import { hww_60, hww_Elite, hww_Lift, hww_Sweat } from '../data/programs.js';

const programRouter = express.Router();
programRouter.use(express.static('public'));


programRouter.get('/hww60', (req, res) => {
  res.render('pages/content.ejs', {
    pagetitle: 'HWW 60',
    programs: hww_60,
    url: req.url,
  });
});

programRouter.get('/hwwElite', (req, res) => {
  res.render('pages/content.ejs', {
    pagetitle: 'HWW Elite',
    programs: hww_Elite,
    url: req.url,
  });
});

programRouter.get('/hwwLift', (req, res) => {
  res.render('pages/content.ejs', {
    pagetitle: 'HWW Lift',
    programs: hww_Lift,
    url: req.url,
  });
});

programRouter.get('/hwwSweat', (req, res) => {
  res.render('pages/content.ejs', {
    pagetitle: 'HWW Sweat',
    programs: hww_Sweat,
    url: req.url,
  });
});

export default programRouter;

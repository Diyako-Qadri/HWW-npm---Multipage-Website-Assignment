import express from 'express';

const aboutRouter = express.Router();
aboutRouter.use(express.static('public'));

aboutRouter.get('/', (req, res) => {
  res.render('pages/content.ejs', {
    pagetitle: 'HARD WORK WORKS',
    url: req.url,
    about: true,
  });
});

export default aboutRouter;

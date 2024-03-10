import express from 'express';
import * as path from 'path';
import programRouter from './routes/program.js';
import exerciseRouter from './routes/exercise.js';
import aboutRouter from './routes/about.js';

const app = express();
const port = process.env.PORT || 1010;
const __dirname = path.resolve();

app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('pages/content.ejs', {
    pagetitle: 'HARD WORK WORKS',
  });
});

app.use('/exercise/', exerciseRouter);
app.use('/programs', programRouter);
app.use('/about', aboutRouter);

app.use(express.static('public'));

app.listen(port, () => console.log(`That's no moon, listening on ${port}`));

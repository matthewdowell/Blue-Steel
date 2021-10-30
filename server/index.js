const path = require('path');
const express = require('express'); // npm installed
const productsRouter = require('./controllers/productsController');
const questionsRouter = require('./controllers/questionsController');
const cartRouter = require('./controllers/cartController');
const reviewsRouter = require('./controllers/reviewsController');
const interactionsRouter = require('./controllers/interactionsController');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/products', productsRouter);

app.use('/reviews', reviewsRouter);

app.use('/questions', questionsRouter);

app.use('/cart', cartRouter);

app.use('/interactions', interactionsRouter);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

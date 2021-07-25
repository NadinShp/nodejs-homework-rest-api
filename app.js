const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const logger = require('morgan');
const cors = require('cors');
require('./configs/passport-config');

const routes = require('./routes/api');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
// app.use(express.json());

app.use('/api/contacts', routes.contactsRouter);
app.use('/api/users', routes.usersRouter);

app.use((_, res) => {
  res.status(404).json({
    status: 'error',
    code: 404,
    message: 'Not found',
  });
});

app.use((error, _, res, __) => {
  const { code = 500, message = 'Server error' } = error;
  res.status(code).json({
    status: 'fail',
    code,
    message,
  });
});

const { DB_HOST, PORT = process.env.port || 3000 } = process.env;

mongoose
  .connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
    console.log('Database connection successful');
  })
  .catch(error => console.log(error));

module.exports = app;

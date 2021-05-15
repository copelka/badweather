const mongoose = require('mongoose');
const db = 'weather';

mongoose.connect(`mongodb://localhost/${db}`, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('db is connected!'))
  .catch(err => console.error('Error while trying to connect', err));

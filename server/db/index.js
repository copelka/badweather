const mongoose = require('mongoose');
const db = 'weather';

mongoose.connect(`mongodb://localhost/${db}`, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.info('db is connected!'))
  .catch(err => console.error('Error while trying to connect', err));

const forecastSchema = new mongoose.Schema({
  city: String,
  temp: Number,
});

const Forecast = mongoose.model('Forecast', forecastSchema);

const celsiusToFahrenheit = (celsius) => celsius * (9 / 5) + 32;

const saveForecast = (forecastObj) => {
  const forecast = ({
    city: forecastObj.city_name,
    temp: celsiusToFahrenheit(forecastObj.temp),
  });
  return Forecast.updateOne({city: forecastObj.city_name}, forecast, {upsert: true})
    .then((data) => res.status(200).send(data))
    .catch((err) => res.sendStatus(500));;
};

const findForecast = () => {
  return Forecast.find().limit(1)
    .then((data) => res.status(200).send(data))
    .catch((err) => res.sendStatus(500));
}

module.exports = {
  saveForecast,
  findForecast
};

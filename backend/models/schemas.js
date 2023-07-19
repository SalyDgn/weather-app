const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.pluralize(null);

const predictionsSchema = new Schema({
  timestamp: { type: String },
  temperature: { type: String },
  region: { type: String },
});

const weatherSchema = new Schema({
  dew_point: { type: String },
  feels_like: { type: String },
  humidity: { type: String },
  pressure: { type: String },
  sunrise: { type: String },
  sunset: { type: String },
  temp: { type: String },
  uvi: { type: String },
  visibility: { type: String },
  description: { type: String },
  main: { type: String },
  wind_deg: { type: String },
  wind_gust: { type: String },
  wind_speed: { type: String },
  lat: { type: String },
  lon: { type: String },
  region: { type: String },
  timezone: { type: String },
  timestamp: { type: String },
});

const Predictions = mongoose.model("predictions", predictionsSchema);

const Weather = mongoose.model("weather", weatherSchema);

const mySchemas = { Predictions: Predictions, Weather: Weather };

module.exports = mySchemas;

const express = require("express");
const router = express.Router();
const schemas = require("../models/schemas");

router.get("/predictions", async (req, res) => {
  try {
    const predictions = await schemas.Predictions.find({});
    res.json(predictions);
  } catch (err) {
    console.error("Erreur lors de la lecture des predictions", err);
    res.status(500).send("Erreur du serveur");
  }
});

router.get("/weather", async (req, res) => {
  try {
    const weathers = await schemas.Weather.find({});
    res.json(weathers);
  } catch (err) {
    console.error("Erreur lors de la lecture des données climatiques", err);
    res.status(500).send("Erreur du serveur");
  }
});

module.exports = router;

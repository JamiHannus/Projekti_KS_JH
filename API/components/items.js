const express = require("express");
const db = require("../db");
const router = express.Router();

//return product details
router.get('/', (req, res) => {
    db.query('SELECT * FROM charge_station_data').then(results => {
        res.json({items: results})
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

module.exports = router;

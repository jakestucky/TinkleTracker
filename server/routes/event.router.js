const Router = require('express').Router;
const router = Router();
const upload = require('../middleware/upload');
const pool = require('../modules/pool');

router.post('/', (req, res) => {
  // We can receive other data from the client, too
  console.log('req.body for event POST', req.body);
  //query to db
  const queryText = `INSERT INTO "event_data" 
    ("event_type", "child_ID", "date","time")
    VALUES ($1, $2, $3, $4);`;
  pool
    .query(queryText, [
      req.body.eventType,
      req.body.childId,
      req.body.date,
      req.body.time,
    ])
    .catch((err) => {
      console.error('Error completing child info post query', err);
      res.sendStatus(500);
    });
  res.sendStatus(201);
});

module.exports = router;

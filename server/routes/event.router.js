const Router = require('express').Router;
const router = Router();
const upload = require('../middleware/upload');
const pool = require('../modules/pool');

router.post('/', (req, res) => {
  //post to send created evnt data to the database
  console.log('req.body for event POST', req.body);
  //query to db
  const queryText = `INSERT INTO "event_data" 
    ("event_type", "child_ID", "date","time","user_ID")
    VALUES ($1, $2, $3, $4, $5);`;
  pool
    .query(queryText, [
      req.body.eventType,
      req.body.childId,
      req.body.date,
      req.body.time,
      req.user.id,
    ])
    .catch((err) => {
      console.error('Error completing child info post query', err);
      res.sendStatus(500);
    });
  res.sendStatus(201);
});

router.get('/', (req, res) => {
  console.log('making a event GET request');

  let queryString = ` SELECT * FROM "event_data"
   JOIN "child_data" on "event_data"."user_ID" = "child_data"."user_ID"
    WHERE "event_data"."user_ID"  = $1
    LIMIT 10;
   `;
  pool
    .query(queryString, [req.user.id])
    .then((result) => {
      console.log('results from get', result.rows);

      res.send(result.rows);
    })
    .catch((error) => {
      console.log('We have an error in events GET', error);
      res.sendStatus(500);
    });
});

module.exports = router;

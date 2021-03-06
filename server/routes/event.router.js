const Router = require('express').Router;
const router = Router();
const upload = require('../middleware/upload');
const pool = require('../modules/pool');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.post('/', rejectUnauthenticated, (req, res) => {
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
//Get request to DB to grab all events that match userID
router.get('/', rejectUnauthenticated, (req, res) => {
  console.log('making a event GET request');

  let queryString = ` SELECT "name","image","child_data"."user_ID", "event_type", "date", "time", "event_data"."id" FROM "child_data"
   JOIN "event_data" on "event_data"."user_ID" = "child_data"."user_ID"

    WHERE "event_data"."user_ID"  = $1
    ORDER BY "id" DESC
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
//Get request by specific ID to be edited later
router.get('/:id', rejectUnauthenticated, (req, res) => {
  console.log('making a event GET request');

  let queryString = ` SELECT * FROM "event_data"
    WHERE "id"  = $1;
   `;
  pool
    .query(queryString, [req.params.id])
    .then((result) => {
      console.log('results from get', result.rows[0]);

      res.send(result.rows[0]);
    })
    .catch((error) => {
      console.log('We have an error in events GET', error);
      res.sendStatus(500);
    });
});
//put request for event edit
router.put('/:id', rejectUnauthenticated, (req, res) => {
  console.log('making a event PUT request', req.body);

  let queryString = ` UPDATE "event_data"
  SET "event_type" = $1,
  "date" = $2,
  "time" = $3
WHERE "id" = $4;
   `;
  pool
    .query(queryString, [
      req.body.eventType,
      req.body.date,
      req.body.time,
      req.params.id,
    ])
    .then((result) => {
      console.log('results from get', result.rows[0]);

      res.send(result.rows[0]);
    })
    .catch((error) => {
      console.log('We have an error in events PUT', error);
      res.sendStatus(500);
    });
});

//delete by ID from DB request
router.delete('/:id', rejectUnauthenticated, (req, res) => {
  console.log('making a event DELETE request');
  console.log('params are', req.params);

  let queryString = `  DELETE FROM "event_data" WHERE "id" = $1;
   `;
  pool
    .query(queryString, [req.params.id])
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

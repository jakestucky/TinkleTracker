const Router = require('express').Router;
const router = Router();
const pool = require('../modules/pool');

router.get('/:id', (req, res) => {
  console.log('making a goal GET request', req.params.id);

  let queryString = `SELECT * FROM "goal_data" WHERE "child_ID" = $1 ORDER BY "timestamp" DESC FETCH FIRST ROW ONLY;
   `;
  pool
    .query(queryString, [req.params.id])
    .then((result) => {
      // console.log('results from get', result.rows);

      res.send(result.rows);
    })
    .catch((error) => {
      console.log('We have an error in events GET', error);
      res.sendStatus(500);
    });
});

router.get('/count/:id', (req, res) => {
  console.log('making a goal count GET request', req.params.id);
  //Nested query allows us to select the most recent goal, then make a query with
  //it's timestamp for all events that happened after it's creation date!
  let queryString = `SELECT * FROM "goal_data" WHERE "child_ID" = $1 ORDER BY "timestamp" DESC FETCH FIRST ROW ONLY;
   `;
  let secondQueryString = `SELECT COUNT(*) FROM "event_data" where "timestamp" > $1;`;
  pool
    .query(queryString, [req.params.id])
    .then((SelectResult) => {
      console.log('results from goal counter get', SelectResult.rows);
      let goal = SelectResult.rows[0];
      pool
        .query(secondQueryString, [goal.timestamp])
        .then((result) => {
          console.log('count of events after goal is:', result.rows);

          res.send(result.rows[0]);
        })
        .catch((error) => {
          console.log('We have an error in Goals GET', error);
          res.sendStatus(500);
        });
    })
    .catch((error) => {
      console.log('We have an error in Goals GET', error);
      res.sendStatus(500);
    });
});

module.exports = router;

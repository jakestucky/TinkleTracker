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
      console.log('results from get', result.rows);

      res.send(result.rows);
    })
    .catch((error) => {
      console.log('We have an error in events GET', error);
      res.sendStatus(500);
    });
});

// router.get('/count/:id', (req, res) => {
//   console.log('making a goal count GET request', req.params.id);

//   let queryString = `SELECT COUNT(*) FROM "event_data" WHERE "child_ID" = $1 AND "date" <= $2 AND "time" > $3;`;
//   pool
//     .query(queryString, [req.params.id, req.body.date, req.body.time])
//     .then((result) => {
//       console.log('results from goal counter get', result.rows[0]);

//       res.send(result.rows[0]);
//     })
//     .catch((error) => {
//       console.log('We have an error in events GET', error);
//       res.sendStatus(500);
//     });
// });

module.exports = router;

const Router = require('express').Router;
const router = Router();
const pool = require('../modules/pool');

router.get('/:id', (req, res) => {
  console.log('making a goal GET request', req.params.id);

  let queryString = `SELECT * FROM "goal_data" WHERE "child_ID" = $1 ORDER BY "timestamp" DESC;
   `;
  pool
    .query(queryString, [req.params.id])
    .then((result) => {
      console.log('results from get', result.rows[0]);

      res.send(result.rows);
    })
    .catch((error) => {
      console.log('We have an error in events GET', error);
      res.sendStatus(500);
    });
});

module.exports = router;

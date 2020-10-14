const Router = require('express').Router;
const router = Router();
const upload = require('../middleware/upload');
const pool = require('../modules/pool');

router.get('/', (req, res) => {
  console.log('user', req.user.id);

  const queryText = `SELECT * FROM "child_data" WHERE "user_ID" = $1;
    `;
  pool
    .query(queryText, [req.user.id])
    .then((result) => {
      res.send(result.rows);
      console.log('results', result.rows);
    })
    .catch((err) => {
      console.error('Error completing child info GET query', err);
      res.sendStatus(500);
    });
});

module.exports = router;

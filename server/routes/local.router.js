/**
 * API endpoints to handle uploads to local server
 * Uploaded files will be saved to /public/uploads.
 *
 * See /src/FileUploader.js for client-side example
 */
const Router = require('express').Router;
const router = Router();
const upload = require('../middleware/upload');
const pool = require('../modules/pool');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

// Keep images in an array
// (could be a DB, IRL)
// const imagesDB = [];

router.post('/', rejectUnauthenticated, upload.any(), (req, res) => {
  console.log('req.files', req.files);

  // We can receive other data from the client, too
  console.log('req.body', req.body);

  // Save image paths to the "DB"
  req.files.forEach((file) => {
    console.log('req.files.path', req.files.path);

    //query to db
    const queryText = `INSERT INTO "child_data" 
    ("name", "image", "age","user_ID")
    VALUES ($1, $2, $3, $4);`;
    pool
      .query(queryText, [
        req.body.childName,
        file.filename,
        req.body.Age,
        req.body.UserId,
      ])
      //   .then((result) => {
      //     res.send(result.rows);
      //   })
      .catch((err) => {
        console.error('Error completing child info post query', err);
        res.sendStatus(500);
      });
  });

  res.sendStatus(201);
});

module.exports = router;

/**
 * API endpoints to handle uploads to local server
 * Uploaded files will be saved to /public/uploads.
 *
 * See /src/FileUploader.js for client-side example
 */
const Router = require('express').Router;
const router = Router();
const upload = require('../middleware/upload');

// Keep images in an array
// (could be a DB, IRL)
const imagesDB = [];

router.post('/upload', upload.any(), (req, res) => {
  console.log('req.files', req.files);

  // We can receive other data from the client, too
  console.log('req.body.food', req.body.food);

  // Save image paths to the "DB"
  req.files.forEach((file) => {
    //
    /*
    IRL, this would be something like
    
      INSERT INTO "images" ("filename")
      VALUES (file.filename)
    */
    imagesDB.push(file.filename);
  });

  res.sendStatus(201);
});

router.get('/images', (req, res) => {
  res.send(imagesDB);
});

module.exports = router;

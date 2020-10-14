const multer = require('multer');

/**
 * Configure multer, to handle file uploads
 * https://github.com/expressjs/multer
 */
const upload = multer({
  storage: multer.diskStorage({
    // Upload files to public/uploads
    destination: (req, file, cb) => {
      let uploadDirectory = 'public/upload/';
      cb(null, uploadDirectory);
    },

    // Give each uploaded file a unique name,
    // so we don't accidentally overwrite existing files
    filename: (req, file, cb) => {
      const filename = `${Date.now()}-${file.originalname}`;
      cb(null, filename);
    },
  }),
});

module.exports = upload;

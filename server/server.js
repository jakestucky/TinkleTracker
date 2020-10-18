const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const localUploadRouter = require('./routes/local.router');
const childRouter = require('./routes/child.router');
const eventRouter = require('./routes/event.router');
const localPrizeRouter = require('./routes/prize.router');
const goalRouter = require('./routes/goal.router');
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public/upload'));
// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/upload', localUploadRouter);
app.use('/prize', localPrizeRouter);
app.use('/child', childRouter);
app.use('/event', eventRouter);
app.use('/goal', goalRouter);
// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

/// everything her below is for the pic upload TODO refactor and make this look good

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var petRepository = require('./db/pets');
var eventRepository = require('./db/events');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testAPIRouter = require('./routes/testAPI');
var petsRouter = require('./routes/pets');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/testAPI', testAPIRouter);
//app.use('/pets', petsRouter);
//app.use(express.static('public'));

// PETS

app.post('/pets', async (req, res) => {
    const results = await petRepository.createPet(req.body);
    res.status(201).json(results[0]);
});

app.get('/pets/:id', async (req, res) => {
    const { id } = req.params;
    // const id = req.params.id; same ^^^
    const pet = await petRepository.getPet(id);
    res.status(200).json(pet[0]);
});

app.get('/pets', async (req, res) => {
    const results = await petRepository.getAllPets();
    res.status(200).json(results);
});

// EVENTS

app.post('/events', async (req, res) => {
    const results = await eventRepository.createEvent(req.body);
    res.status(201).json(results[0]);
});

app.get('/pets/:petId/events', async (req, res) => {
    const results = await eventRepository.getAllPetEvents(req.params.petId);
    res.status(200).json(results);
});

app.get('/events/:eventId', async (req, res) => {
    // deconstructed assignment
    const { eventId } = req.params;
    const results = await eventRepository.getEvent(eventId);
    res.status(200).json(results[0]);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// CRUD pupptab-db
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

module.exports = app;

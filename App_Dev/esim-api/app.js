var express = require('express');
var mongoose = require('mongoose');
var favicon = require('serve-favicon');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
var httpStatus = require('http-status');
var expressValidation = require('express-validation');

var routes = require('./routes/index.route');
var apiError = require('./helpers/api-error');

var app = new express();

mongoose.Promise = global.Promise;
const mongoDbHost = 'localhost:27017/ESIM';
mongoose.connect('mongodb://'+mongoDbHost);
mongoose.connection.on('error',()=>{
    throw new Error(`unable to connect to mongo db: ${mongoDbHost}`);
});

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// Concise output colored by response status for development use. 
// The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes
app.use(logger('dev'));

// A new body object containing the parsed data is populated on the request object 
// after the middleware (i.e. req.body)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

app.use('/', routes);

app.use((err, req, res, next) => {
    if (err instanceof expressValidation.ValidationError) {
        // Use custom error handler here
        // res.status(err.status).json(err);
        const combinedErrorMessages = err.errors.map(errorItem =>
            errorItem.messages)
            .join(' and ');

        const finalError = new apiError(combinedErrorMessages, err.status);
        return next(finalError);
    } else {
        // Use custom error handler here
        const finalError = new apiError(err.message, err.status);
        return next(finalError);
    }
});

app.use((req, res, next) => {
    var err = new apiError('API not found', httpStatus.NOT_FOUND);
    return next(err);
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status).json({
        message: err.message,
        stack: req.app.get('env') === 'development' ? err.stack : {}
    })
})

module.exports = app;


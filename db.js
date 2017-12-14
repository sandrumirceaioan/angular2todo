var mongoose = require("mongoose");
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://pretenash:rappac33!@ds139436.mlab.com:39436/tododb');
var db = mongoose.connection;
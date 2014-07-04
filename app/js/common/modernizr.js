// pick what tests you need
require('browsernizr/test/css/rgba');
require('browsernizr/test/file/filesystem');
require('browsernizr/test/websockets');
require('browsernizr/test/touchevents');
require('browsernizr/test/svg');

//// make sure to do this _after_ importing the tests
//require('browsernizr');
//
// or if you need access to the modernizr instance:
//module.export = require('browsernizr');
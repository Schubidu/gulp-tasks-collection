var $ = require('jquery');
var greetings = require('./common/greetings');
require('./common/modernizr');
var Modernizr = require('browsernizr');

$(function (xfoo, xbar) {
    $('body').append(greetings('fosff'));
    $('body').append('<p>has svg: ' + Modernizr.svg + '</p>');
});

function hello () {
    return 'hello worldxxx';
}

hello();
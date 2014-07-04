var config = {};

config.app = './app/';
config.app_js = config.app + 'js/';
config.app_jsIndex = config.app_js + 'index.js';
config.app_scss = config.app + 'scss';

config.tmp = './tmp/';
config.tmp_js = config.tmp + 'js';


config.dist = './dist/';
config.dist_jsBundle = 'bundle.js';
config.dist_js = config.dist + 'js';
config.dist_css = config.dist + 'css';

module.exports = config;
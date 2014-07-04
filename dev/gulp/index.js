var fs = require('fs');
var onlyScripts = require(__dirname + '/util/scriptFilter');
var tasks = fs.readdirSync(__dirname + '/tasks/').filter(onlyScripts);
tasks.forEach(function (task) {
    require(__dirname + '/tasks/' + task);
});
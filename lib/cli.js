var fs = require('fs');
var path = require('path');

Cli = (function() {

  var CliObject = function(params) {
    this.args = params.args;
  };

  CliObject.prototype.parseCommandLineArgs = function() {
    if (this.args.length === 0) {
      this.haltProcessWithUsage();
    } else if (this.args.slice(2) === undefined || this.args.slice(2).toString().trim().length === 0) {
      this.haltProcessWithUsage();
    } else {
      return this.generateFileObject();
    }
  };

  CliObject.prototype.generateFileObject = function() {
    var filename = this.args.slice(2);
    var extensionRegex = /.handlebars|.hbs/gi;
    var templateName = filename.toString().split(path.sep + 'templates' + path.sep).reverse()[0].replace(extensionRegex, '');
    templateName = templateName.replace(path.sep, '/');
    var template = fs.readFileSync(filename.toString(), 'utf8');
    return {'name': templateName, 'content': template};
  };

  CliObject.prototype.haltProcessWithUsage = function() {
    console.log("\nUSAGE: node django-ember-precompile filepath\n");
    process.exit(code=1);
  };

  return CliObject;

})();

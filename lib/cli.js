var fs = require('fs');

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
    var templateName = filename.toString().split('/').reverse()[0].replace('.handlebars', '');
    var template = fs.readFileSync(filename.toString(), 'utf8');
    return {'name': templateName, 'content': template};
  };

  CliObject.prototype.haltProcessWithUsage = function() {
    console.log("\nUSAGE: node django-ember-precompile filepath\n");
    process.exit(code=1);
  };

  return CliObject;

})();

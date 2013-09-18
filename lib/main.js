(function() {

  require('./cli');

  var compiler = require('ember-template-compiler');
  var template = new Cli({args: process.argv}).parseCommandLineArgs();

  var input = compiler.precompile(template['content']).toString();
  var output = "Ember.TEMPLATES['" + template['name'] + "'] = Ember.Handlebars.template(" + input + ");";

  console.log(output);

}).call(this);

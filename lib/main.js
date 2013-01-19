(function() {

  require('./cli');
  require('./window');

  var template = new Cli({args: process.argv}).parseCommandLineArgs();
  var window = new Window().generateWindowWithEmber();

  var input = window.Ember.Handlebars.precompile(template['content']).toString();
  var output = "Ember.TEMPLATES['" + template['name'] + "'] = Ember.Handlebars.template(" + input + ");";

  console.log(output);

}).call(this)

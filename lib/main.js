(function() {

  var fs = require('fs');
  var filename = process.argv.slice(2);
  var templateName = filename.toString().split('/').reverse()[0].replace('.handlebars', '');
  var template = fs.readFileSync(filename.toString(), 'utf8');

  var jsdom = require('jsdom');
  this.window = jsdom.jsdom().createWindow();

  var jquery = this.window.run(fs.readFileSync('node_modules/django-ember-precompile/vendor/jquery-1.7.2.js', 'utf8'));
  var handlebars = this.window.run(fs.readFileSync('node_modules/django-ember-precompile/vendor/handlebars-1.0.rc.1.js', 'utf8'));
  var ember = this.window.run(fs.readFileSync('node_modules/django-ember-precompile/vendor/ember.js', 'utf8'));

  var content = this.window.Ember.Handlebars.precompile(template).toString();
  var output = "Ember.TEMPLATES['" + templateName + "'] = Ember.Handlebars.template(" + content + ");";

  console.log(output);

}).call(this)

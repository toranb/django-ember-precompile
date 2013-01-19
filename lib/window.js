var fs = require('fs')
, jsdom = require('jsdom');

Window = (function() {

  var WindowObject = function() {
  };

  WindowObject.prototype.generateWindowWithEmber = function() {
    var window = jsdom.jsdom().createWindow();

    var jquery = window.run(fs.readFileSync('node_modules/django-ember-precompile/vendor/jquery-1.7.2.js', 'utf8'));
    var handlebars = window.run(fs.readFileSync('node_modules/django-ember-precompile/vendor/handlebars-1.0.rc.2.js', 'utf8'));
    var ember = window.run(fs.readFileSync('node_modules/django-ember-precompile/vendor/ember.js', 'utf8'));

    return window;
  };

  return WindowObject;

})();

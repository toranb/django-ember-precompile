var fs = require('fs')
, path = require('path')
, jsdom = require('jsdom');

Window = (function() {

  var WindowObject = function() {
  };

  WindowObject.prototype.generateWindowWithEmber = function() {
    var window = jsdom.jsdom().createWindow();

    var vendor = path.join(path.dirname(fs.realpathSync(__filename)), '../vendor');
    var jquery = window.run(fs.readFileSync(vendor + '/jquery-1.9.1.js', 'utf8'));
    var handlebars = window.run(fs.readFileSync(vendor + '/handlebars-1.0.0-rc.3.js', 'utf8'));
    var ember = window.run(fs.readFileSync(vendor + '/ember-1.0.0-rc.2.js', 'utf8'));

    return window;
  };

  return WindowObject;

})();

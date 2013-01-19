require('../lib/cli');

describe("CommandLineParser Tests", function() {

  it("halt invoked when no arguments found", function() {
    var haltSpy = spyOn(Cli.prototype, 'haltProcessWithUsage');
    var sut = new Cli({args:[]});
    sut.parseCommandLineArgs();
    expect(haltSpy).toHaveBeenCalledWith();
  });

  it("halt invoked when no valid filepath found", function() {
    var haltSpy = spyOn(Cli.prototype, 'haltProcessWithUsage');
    var sut = new Cli({args:['node', 'node_modules/django-ember-precompile/bin/django-ember-precompile', '']});
    sut.parseCommandLineArgs();
    expect(haltSpy).toHaveBeenCalledWith();
  });

  it("halt invoked when filepath is empty string", function() {
    var haltSpy = spyOn(Cli.prototype, 'haltProcessWithUsage');
    var sut = new Cli({args:['node', 'node_modules/django-ember-precompile/bin/django-ember-precompile', '  ']});
    sut.parseCommandLineArgs();
    expect(haltSpy).toHaveBeenCalledWith();
  });

  it("halt not invoked when valid filepath passed in", function() {
    var haltSpy = spyOn(Cli.prototype, 'haltProcessWithUsage');
    var sut = new Cli({args:['node', 'node_modules/django-ember-precompile/bin/django-ember-precompile', 'file-system/foo/bar.handlebars']});
    sut.parseCommandLineArgs();
    expect(haltSpy).not.toHaveBeenCalledWith();
  });

  it("returns templateName without handlebars extension when valid filepath passed in", function() {
    var sut = new Cli({args:['node', 'node_modules/django-ember-precompile/bin/django-ember-precompile', 'file-system/foo/bar.handlebars']});
    result = sut.parseCommandLineArgs();
    expect(result['name']).toEqual('bar');
  });

  it("returns template when valid filepath passed in and it exists on the filesystem", function() {
    var sut = new Cli({args:['node', 'node_modules/django-ember-precompile/bin/django-ember-precompile', 'file-system/foo/bar.handlebars']});
    result = sut.parseCommandLineArgs();
    expect(result['content']).toEqual('{{outlet}}\n');
  });

});

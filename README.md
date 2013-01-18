
An ember.js precompiler for projects that use the django compressor

##Why did you write another precompiler npm module?

1. django projects have a quick hook to execute code with django compressor
2. I prefer precompile my handlebars templates for ember.js when possible
3. I honestly couldn't find an existing module that would do this for django

##How do I get started then?

First you need to install node.js if you have not already

http://nodejs.org/download/

You need to add django compressor to your project

    pip install -r django_compressor

Next you need to register a type to have the compressor fire off the precompile step

    COMPRESS_PRECOMPILERS = (
        ('text/x-handlebars', 'node node_modules/django-ember-precompile/bin/django-ember-precompile {infile}'),
    )

Next you need to use the compressor to add the uncompiled handlebars templates in your html

    {% load staticfiles %}
    {% load compress %}

    {% compress js %}
    <script src="{% static 'script/app/templates/foo.handlebars' %}" type="text/x-handlebars"></script>
    {% endcompress %}

Notice that the templates file extension above is "handlebars" -this is required to use this npm module

##So what is missing from this test project today?

1. Tech debt cleanup / basic unit testing to show how the project works with input from a web app

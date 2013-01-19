
ember.js precompiler for projects that use the django compressor

##Why did you write another precompiler npm module?

1. django projects have a quick hook to execute code with django compressor
2. I prefer to precompile my handlebars templates for ember.js when possible
3. I couldn't find an existing npm module that was built to work with django compressor and ember.js

##How do I get started then?

First you need to install node.js if you have not already

http://nodejs.org/download/

Add django compressor to your django web project

    pip install -r django_compressor

Register a type to have the compressor fire off the precompile step (in your settings.py)

    COMPRESS_PRECOMPILERS = (
        ('text/x-handlebars', 'node node_modules/django-ember-precompile/bin/django-ember-precompile {infile}'),
    )

Finally in your html you need to reference the uncompiled handlebars templates

    {% load staticfiles %}
    {% load compress %}

    {% compress js %}
    <script src="{% static 'script/app/templates/foo.handlebars' %}" type="text/x-handlebars"></script>
    {% endcompress %}

Notice the above template has a file extension of "handlebars" -this is required to use this npm module

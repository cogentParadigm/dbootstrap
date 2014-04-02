##############
Dojo Bootstrap
##############

Bootstrap theme for Dojo.

.. image:: https://raw.github.com/thesociable/dbootstrap/master/resource/preview.png

************
Get The Code
************

    $ git clone --recursive git://github.com/thesociable/dbootstrap.git

***********
Integration
***********

Want to use the theme in your own project? Here's a short guide to integrating
it successfully.

Standalone Package
==================

#. Copy (or link) this package *dbootstrap*
   into the appropriate location in your project and ensure you notify Dojo
   about the location. One way to do this is through the Dojo config::

    'packages': [
        ...,
        {
            location: '/path/to/dbootstrap',
            name: 'dbootstrap'
        }
    ]

#. Add a require call for dbootstrap. You must require dbootstrap
   before any Dijit widgets are loaded for the icons to work correctly::

    require(['dbootstrap', ...], function(dbootstrap) {
        // Start application.
    });

#. Add *dbootstrap* as a css class to your <body> element::

    <body class='dbootstrap'>

#. View your project as normal.

Integrated Build
================

#. Copy or link the *dbootstrap* folder into your project
   (typically so that it is a sibling to your Dojo and Dijit packages). You
   will also need to link the *xstyle* and *nib* packages if you don't already
   have them.

   .. note::

       Only tested with Dojo 1.8+

#. Add the following to your build profile.js to include dbootstrap as a
   package and separate build layer::

    packages: [
        ...
        'dbootstrap',
        'xstyle'
    ],

    layers: {
        ...
        'dbootstrap/main': {
            include: [
                'dbootstrap/main',
                'xstyle/load-css'
            ],
        }
    }

   .. note::

        If you have placed your dbootstrap package somewhere that isn't
        directly accessible as a child directory of your *basePath* then you
        must use the fuller package syntax in the packages list::

            {
                location: '/path/to/dbootstrap',
                name: 'dbootstrap'
            }

#. In your main application entry point (or index.html) require the dbootstrap
   package before any Dijit widgets are loaded::

    require(['dbootstrap', ...], function(dbootstrap) {
        // Start application.
    });

#. Add *dbootstrap* as a css class to your <body> element::

    <body class='dbootstrap'>

#. Build your project and view as normal.


*********************
Copyright and license
*********************

Copyright (c) 2014 Ali Gangji

Available under *either* the terms of the modified BSD license *or* the
Apache License, Version 2.0. As a recipient of dbootstrap, you may choose
which license to receive this code under.

The text of the BSD and Apache License, Version 2.0 licenses is available in
the LICENSE.txt file.

Font-Awesome
============

The icons are provided by the excellent Font-Awesome team at
http://fortawesome.github.com/Font-Awesome/


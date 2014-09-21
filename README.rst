##############
Dojo Bootstrap
##############

Bootstrap theme for Dojo.

This is a rewrite of the original project by Martin Pengelly-Phillips at
https://github.com/thesociable/dbootstrap, written in LESS and targeted at
Bootstrap 3.

.. image:: https://raw.github.com/thesociable/dbootstrap/master/resource/preview.png

************
Get The Code
************

    $ git clone git://github.com/cogentParadigm/dbootstrap.git

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

#. include /path/to/dbootstrap/theme/dbootstrap/index.less in your LESS files,
   or compile it to CSS.

#. View your project as normal.

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

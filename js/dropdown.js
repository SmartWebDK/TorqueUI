/* ========================================================================
 * Some parts are borrowed from Twitter Bootstrap and modified for our
 * usage, those parts are copyrighted by Twitter.
 * ========================================================================
 * Bootstrap: dropdown.js v3.0.3
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


//
// Dropdown Javascript file
// --------------------------------------------------------------------------

(function($, document, undefined) {
    'use strict';


    // ==========================================================================
    // Prototype definition
    // ==========================================================================

    var backdrop = '.dropdown-backdrop',
        toggle   = '[data-toggle=dropdown]';

    var Dropdown = function (element) {
        $(element).on('click.ui.dropdown', this.toggle);
    };

    //
    // Toggle dropdown
    //

    Dropdown.prototype.toggle = function (e) {
        var $this = $(this);

        // if button is disabled return
        if ( $this.is('.disabled, .is-disabled, :disabled')) return;

        // get parent and find out if active
        var $parent  = getParent($this),
            isActive = $parent.hasClass('open');

        // close all menues
        clearMenus();

        // if not active setup click events
        if ( !isActive ) {
            // if mobile we use a backdrop because click events don't delegate
            if ( 'ontouchstart' in document.documentElement ) {
                $('<div class="dropdown-backdrop" />').insertAfter($(this)).on('click', clearMenus);
            }

            if ( e.isDefaultPrevented() ) return;

            $parent.toggleClass('open');
            $this.focus();
        }

        return false;
    };

    // ==========================================================================
    // Helpers
    // ==========================================================================

    //
    // ClearMenu closes all menues
    //

    var clearMenus = function (e) {
        $(backdrop).remove();
        $(toggle).each(function () {
            var $parent = getParent($(this));

            if ( !$parent.hasClass('open') ) return;
            $parent.removeClass('open');
        });
    };

    //
    // GetParent find a
    //

    function getParent($this) {
        var selector = $this.attr('data-target');

        if ( !selector ) {
            selector = $this.attr('href');
            selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, ''); //strip for ie7
        }

        var $parent = selector && $(selector);
        return $parent && $parent.length ? $parent : $this.parent();
    }


    // ==========================================================================
    // Dropdown plugin definition
    // ==========================================================================

    $.fn.dropdown = function (option) {
        return this.each( function () {
            var $this = $(this),
                data  = $this.data("ui.dropdown");

            // convert dropdown to a prototype of dropdown
            if ( !data ) $this.data("ui.dropdown", (data = new Dropdown(this)));

            // option could be 'toggle'
            if ( typeof option == 'string' ) data[option].call($this);
        });
    };

    $.fn.dropdown.Construct = Dropdown;


    // ==========================================================================
    // Dropdown no conflict mode
    // ==========================================================================

    $.fn.dropdown.noConflict = function () {
        $.fn.dropdown = old;
        return this;
    };


    // ==========================================================================
    // Listener
    // ==========================================================================

    $(document)
        .on('click.ui.dropdown', clearMenus)
        .on('click.ui.dropdown', '.dropdown form', function (e) { e.stopPropagation(); })
        .on('click.ui.dropdown', toggle, Dropdown.prototype.toggle);

})(jQuery, document);


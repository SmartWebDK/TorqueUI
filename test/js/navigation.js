//
// Navigation
// -----------------------------------------------------------------------------

/*! ost */
(function($, document, undefined) {
    'use strict';


    // ==========================================================================
    // Prototype definition
    // ==========================================================================

    var backdrop = '.dropdown-backdrop',
        toggle   = '[data-toggle="navigation"]';

    var Nav = function (element) {
        $(element).on('click.ui.navigation', this.toggle);
    };

    //
    // Toggle nav
    //

    Nav.prototype.toggle = function (e) {
        var $this = $(this);

        // if button is disabled return
        if ( $this.is('.disabled, .is-disabled, :disabled')) return;

        // get parent and find out if active
        var $parent  = getParent($this),
            isActive = $parent.hasClass('open');

        // close all menues
        if ( isActive ) {
            closeMenu($this);
        } else {
            // if mobile we use a backdrop because click events don't delegate
            if ( 'ontouchstart' in document.documentElement ) {
                $('<div class="dropdown-backdrop" />').insertAfter($(this)).on('click', closeMenu($this));
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

    var closeMenu = function ($this) {
        $this.find(backdrop).remove();
        var $parent = getParent($this);
        $parent.removeClass('open');
    };

    //
    // GetParent find a
    //

    var getParent = function ($this) {
        return $this.parents(".dropdown").first();
    };

    // ==========================================================================
    // Dropdown plugin definition
    // ==========================================================================

    $.fn.nav = function (option) {
        return this.each( function () {
            var $this = $(this),
                data  = $this.data("ui.nav");

            // convert dropdown to a prototype of dropdown
            if ( !data ) $this.data("ui.nav", (data = new Nav(this)));

            // option could be 'toggle'
            if ( typeof option == 'string' ) data[option].call($this);
        });
    };

    $.fn.dropdown.Construct = Nav;


    // ==========================================================================
    // Dropdown no conflict mode
    // ==========================================================================

    $.fn.nav.noConflict = function () {
        $.fn.nav = old;
        return this;
    };


    // ==========================================================================
    // Listener
    // ==========================================================================

    $(document)
        .on('click.ui.navigation', '.dropdown form', function (e) { e.stopPropagation(); })
        .on('click.ui.navigation', toggle, Nav.prototype.toggle);

})(jQuery, document);

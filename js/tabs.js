/* ========================================================================
 * Some parts are borrowed from Twitter Bootstrap and modified for our
 * usage, these parts are copyrighted by Twitter.
 * ========================================================================
 * Bootstrap: dropdown.js v3.0.3
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


//
// Tabs javascript file
// --------------------------------------------------------------------------

(function($, document, undefined) {
    'use strict';


    // ==========================================================================
    // Prototype decfinition
    // ==========================================================================

    var Tab = function(element) {
        this.$element = $(element);
    };

    //
    // Show the tab
    //

    Tab.prototype.show = function (e) {
        var
            $this    = this.$element,
            $ul      = $this.closest("ul.nav"),
            $li      = $this.parent('li'),
            selector = $this.data("target");

        // if button is disabled return
        if ( $this.is('.disabled, .is-disabled, :disabled')) return;

        if ( !selector ) {
            selector = $this.attr('href');
            selector = selector && selector.replace(/.*(?=#[^\s]*$)/, ''); //strip for ie7
        }

        if ( $li.length && $li.hasClass('active') ) return;

        var $target = $(selector);

        if ( !$li.length ) {
            var $tab = $(".nav [data-toggle='content'][data-target='"+selector+"'], .nav [data-toggle='content'][href='"+selector+"']");
            $li = $tab.parent('li');
            $ul = $tab.closest("ul.nav");
        }

        this.activate($li, $ul);
        this.activate($target, $target.parent(".toggle-content"));
    };

    //
    // Activate the tab
    //

    Tab.prototype.activate = function (element, container) {
        var $active = container.find("> .active");
        $active.removeClass('active');
        element.addClass("active");
    };

    // ==========================================================================
    // Tab plugin definition
    // ==========================================================================

    $.fn.tab = function (option) {
        return this.each(function () {
            var $this   = $(this),
                data    = $this.data("ui.tab");

            // convert to selected tab to prototype of tab
            if (!data) $this.data('ui.tab', (data = new Tab(this)));

            // option could be 'show' or 'activate'
            if (typeof option == 'string') data[option]();
        });
    };

    $.fn.tab.Constructor = Tab;

    // ==========================================================================
    // Tab no conflict
    // ==========================================================================

    $.fn.tab.noConflict = function () {
        $.fn.tab = old;
        return this;
    };

    // ==========================================================================
    // Listener
    // ==========================================================================

    $(document).on("click.ui.tabs", '[data-toggle="content"]', function (e) {
        e.preventDefault();
        $(this).tab("show");
    });

})(jQuery, document);


//
// Collapseable Javascript file
// --------------------------------------------------------------------------

(function($, document, undefined) {
    'use strict';


    // ==========================================================================
    // Prototype definition
    // ==========================================================================

    var toggle   = '[data-toggle=collapse]';

    var Collapsable = function (element) {
        this.$element = $(element);
    };

    //
    // Init collapse
    //

    Collapsable.prototype.init = function () {

        // recall state of element if available
        var state = this.state();
        if (state) {
            this[ state ]();
        }
    }

    //
    // Toggle collapse
    //

    Collapsable.prototype.toggle = function (e) {
        var $this       = this.$element,
            selector    = $this.data("target"),
            css         = $this.data("class") || "is-collapsed";

        // if button is disabled return
        if ( $this.is('.disabled, .is-disabled, :disabled')) return;

        // if no selector specified
        if ( !selector ) return;

        var $target = $("[data-group="+selector+"]"),
            isOpen = getIsOpen($target, css);

        // if not active setup click events
        if ( isOpen ) {
            this.open($target, css);
        } else {
            this.close($target, css);
        }

        return false;
    };

    //
    // Open collapse
    //

    Collapsable.prototype.open = function () {
        var $this       = this.$element,
            selector    = $this.data("target"),
            css         = $this.data("class") || "is-collapsed",
            $target = $("[data-group="+selector+"]");

        $this.is("button") && $this.removeClass("is-closed");
        $target.removeClass(css);

        this.state('open');
    };

    //
    // Close collapse
    //

    Collapsable.prototype.close = function () {
        var $this       = this.$element,
            selector    = $this.data("target"),
            css         = $this.data("class") || "is-collapsed",
            $target = $("[data-group="+selector+"]");

        $this.is("button") && $this.addClass("is-closed");
        $target.addClass(css);

        this.state('close');
    };

    //
    // State collapse
    //

    Collapsable.prototype.state = function (state) {

        // Validate WebStorage
        if (typeof Storage !== 'undefined') {

            // Unique id
            var id = this.$element.data('target');

            if (id !== undefined) {

                // Get mode
                if (!state) {
                    state = sessionStorage[id];
                    return state ? state : false;
                }

                // Set mode
                else {
                    sessionStorage[id] = state;
                    return state;
                }
            }
        }

        return false;
    }


    // ==========================================================================
    // Helpers
    // ==========================================================================

    var getIsOpen = function (target, css) {
        return target.first().hasClass(css);
    };


    // ==========================================================================
    // Dropdown plugin definition
    // ==========================================================================

    $.fn.collapse = function (option) {
        return this.each( function () {
            var $this   = $(this),
                data    = $this.data("ui.collapse");

            // convert collapse to a prototype of dropdown
            if ( !data ) $this.data("ui.collapse", (data = new Collapsable(this)));

            if ( !option ) option = "init";

            // option could be 'init', 'open' or 'close'
            data[ option ]();
        });
    };

    $.fn.collapse.Construct = Collapsable;


    // ==========================================================================
    // Dropdown no conflict mode
    // ==========================================================================

    $.fn.collapse.noConflict = function () {
        $.fn.dropdown = old;
        return this;
    };


    // ==========================================================================
    // Listener
    // ==========================================================================

    $(document).on('click.ui.collapse', '[data-toggle="collapse"]', function (e) {
        e.stopPropagation();
        $(this).collapse("toggle");
    });

    $(toggle).collapse();

})(jQuery, document);


/*!
 * framework v0.1.0 (http://www.smartweb.dk)
 * Copyright 2014 SmartWeb
 * Licensed under http://www.apache.org/licenses/LICENSE-2.0
 */


/*! ========================================================================
 * Some parts are borrowed from Twitter Bootstrap and modified for our
 * usage, those parts are copyrighted by Twitter.
 * ========================================================================
 * Bootstrap: dropdown.js v3.0.3
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
!function(a,b){"use strict";function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.ui.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, .is-disabled, :disabled")){var f=c(e),h=f.hasClass("open");if(g(),!h){if("ontouchstart"in b.documentElement&&a('<div class="dropdown-backdrop" />').insertAfter(a(this)).on("click",g),d.isDefaultPrevented())return;f.toggleClass("open"),e.focus()}return!1}};var g=function(){a(d).remove(),a(e).each(function(){var b=c(a(this));b.hasClass("open")&&b.removeClass("open")})};a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("ui.dropdown");d||c.data("ui.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Construct=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=old,this},a(b).on("click.ui.dropdown",g).on("click.ui.dropdown",".dropdown form",function(a){a.stopPropagation()}).on("click.ui.dropdown",e,f.prototype.toggle)}(jQuery,document),/*! ========================================================================
 * Some parts are borrowed from Twitter Bootstrap and modified for our
 * usage, these parts are copyrighted by Twitter.
 * ========================================================================
 * Bootstrap: dropdown.js v3.0.3
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
function(a,b){"use strict";var c=function(b){this.$element=a(b)};c.prototype.show=function(){var b=this.$element,c=b.closest("ul.nav"),d=b.parent("li"),e=b.data("target");if(!b.is(".disabled, .is-disabled, :disabled")&&(e||(e=b.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,"")),!d.length||!d.hasClass("active"))){var f=a(e);if(!d.length){var g=a(".nav [data-toggle='content'][data-target='"+e+"'], .nav [data-toggle='content'][href='"+e+"']");d=g.parent("li"),c=g.closest("ul.nav")}this.activate(d,c),this.activate(f,f.parent(".toggle-content"))}},c.prototype.activate=function(a,b){var c=b.find("> .active");c.removeClass("active"),a.addClass("active")},a.fn.tab=function(b){return this.each(function(){var d=a(this),e=d.data("ui.tab");e||d.data("ui.tab",e=new c(this)),"string"==typeof b&&e[b]()})},a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=old,this},a(b).on("click.ui.tabs",'[data-toggle="content"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery,document);
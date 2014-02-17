/*!
 * framework v0.1.0 (http://www.smartweb.dk)
 * Copyright 2014 SmartWeb
 * Licensed under http://www.apache.org/licenses/LICENSE-2.0
 */


!function(a,b){"use strict";var c=function(b){this.$element=a(b)};c.prototype.toggle=function(){var b=this.$element,c=b.data("target"),e=b.data("class")||"is-collapsed";if(!b.is(".disabled, .is-disabled, :disabled")&&c){var f=a("[data-group="+c+"]"),g=d(f,e);return g?this.open(f,e):this.close(f,e),!1}},c.prototype.open=function(){var b=this.$element,c=b.data("target"),d=b.data("class")||"is-collapsed",e=a("[data-group="+c+"]");e.removeClass(d)},c.prototype.close=function(){var b=this.$element,c=b.data("target"),d=b.data("class")||"is-collapsed",e=a("[data-group="+c+"]");e.addClass(d)};var d=function(a,b){return a.first().hasClass(b)};a.fn.collapse=function(b){return this.each(function(){var d=a(this),e=d.data("ui.collapse");e||d.data("ui.collapse",e=new c(this)),"string"==typeof b&&e[b]()})},a.fn.collapse.Construct=c,a.fn.collapse.noConflict=function(){return a.fn.dropdown=old,this},a(b).on("click.ui.collapse",'[data-toggle="collapse"]',function(b){b.stopPropagation(),a(this).collapse("toggle")})}(jQuery,document),/*! ========================================================================
 * Some parts are borrowed from Twitter Bootstrap and modified for our
 * usage, those parts are copyrighted by Twitter.
 * ========================================================================
 * Bootstrap: dropdown.js v3.0.3
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
function(a,b){"use strict";var c=".dropdown-backdrop",d="[data-toggle=dropdown]",e=function(b){a(b).on("click.ui.dropdown",this.toggle)};e.prototype.toggle=function(c){var d=a(this);if(!d.is(".disabled, .is-disabled, :disabled")){var e=g(d),h=e.hasClass("open");if(f(),!h){if("ontouchstart"in b.documentElement&&a('<div class="dropdown-backdrop" />').insertAfter(a(this)).on("click",f),c.isDefaultPrevented())return;e.toggleClass("open"),d.focus()}return!1}};var f=function(){a(c).remove(),a(d).each(function(){var b=g(a(this));b.hasClass("open")&&b.removeClass("open")})},g=function(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()};a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("ui.dropdown");d||c.data("ui.dropdown",d=new e(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Construct=e,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=old,this},a(b).on("click.ui.dropdown",f).on("click.ui.dropdown",".dropdown form",function(a){a.stopPropagation()}).on("click.ui.dropdown",d,e.prototype.toggle)}(jQuery,document),/*! ost */
function(a,b){"use strict";var c=".dropdown-backdrop",d='[data-toggle="navigation"]',e=function(b){a(b).on("click.ui.navigation",this.toggle)};e.prototype.toggle=function(c){var d=a(this);if(!d.is(".disabled, .is-disabled, :disabled")){var e=g(d),h=e.hasClass("open");if(h)f(d);else{if("ontouchstart"in b.documentElement&&a('<div class="dropdown-backdrop" />').insertAfter(a(this)).on("click",f(d)),c.isDefaultPrevented())return;e.toggleClass("open"),d.focus()}return!1}};var f=function(a){a.find(c).remove();var b=g(a);b.removeClass("open")},g=function(a){return a.parents(".dropdown").first()};a.fn.nav=function(b){return this.each(function(){var c=a(this),d=c.data("ui.nav");d||c.data("ui.nav",d=new e(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Construct=e,a.fn.nav.noConflict=function(){return a.fn.nav=old,this},a(b).on("click.ui.navigation",".dropdown form",function(a){a.stopPropagation()}).on("click.ui.navigation",d,e.prototype.toggle)}(jQuery,document),/*! ========================================================================
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
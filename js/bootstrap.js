/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */ if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");(function(b){"use strict";var a=b.fn.jquery.split(" ")[0].split(".");if(a[0]<2&&a[1]<9||1==a[0]&&9==a[1]&&a[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")})(jQuery),function(a){"use strict";a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;return a(this).one("bsTransitionEnd",function(){c=!0}),setTimeout(function(){c||a(d).trigger(a.support.transition.end)},b),this},a(function(){a.support.transition=function(){var c=document.createElement("bootstrap"),a={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var b in a)if(void 0!==c.style[b])return{end:a[b]};return!1}(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),function(a){"use strict";var c='[data-dismiss="alert"]',b=function(b){a(b).on("click",c,this.close)};b.VERSION="3.3.5",b.TRANSITION_DURATION=150,b.prototype.close=function(e){function g(){c.detach().trigger("closed.bs.alert").remove()}var f=a(this),d=f.attr("data-target");d||(d=(d=f.attr("href"))&&d.replace(/.*(?=#[^\s]*$)/,""));var c=a(d);e&&e.preventDefault(),c.length||(c=f.closest(".alert")),c.trigger(e=a.Event("close.bs.alert")),e.isDefaultPrevented()||(c.removeClass("in"),a.support.transition&&c.hasClass("fade")?c.one("bsTransitionEnd",g).emulateTransitionEnd(b.TRANSITION_DURATION):g())};var d=a.fn.alert;a.fn.alert=function(c){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new b(this)),"string"==typeof c&&e[c].call(d)})},a.fn.alert.Constructor=b,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",c,b.prototype.close)}(jQuery),function(a){"use strict";function c(c){return this.each(function(){var e=a(this),d=e.data("bs.button");d||e.data("bs.button",d=new b(this,"object"==typeof c&&c)),"toggle"==c?d.toggle():c&&d.setState(c)})}var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.isLoading=!1};b.VERSION="3.3.5",b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(c){var f="disabled",b=this.$element,d=b.is("input")?"val":"html",e=b.data();c+="Text",null==e.resetText&&b.data("resetText",b[d]()),setTimeout(a.proxy(function(){b[d](null==e[c]?this.options[c]:e[c]),"loadingText"==c?(this.isLoading=!0,b.addClass(f).attr(f,f)):this.isLoading&&(this.isLoading=!1,b.removeClass(f).removeAttr(f))},this),0)},b.prototype.toggle=function(){var b=!0,c=this.$element.closest('[data-toggle="buttons"]');if(c.length){var a=this.$element.find("input");"radio"==a.prop("type")?(a.prop("checked")&&(b=!1),c.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==a.prop("type")&&(a.prop("checked")!==this.$element.hasClass("active")&&(b=!1),this.$element.toggleClass("active")),a.prop("checked",this.$element.hasClass("active")),b&&a.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=c,a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(b){var d=a(b.target);d.hasClass("btn")||(d=d.closest(".btn")),c.call(d,"toggle"),a(b.target).is('input[type="radio"]')||a(b.target).is('input[type="checkbox"]')||b.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),function(b){"use strict";function d(c){return this.each(function(){var e=b(this),d=e.data("bs.carousel"),f=b.extend({},a.DEFAULTS,e.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;d||e.data("bs.carousel",d=new a(this,f)),"number"==typeof c?d.to(c):g?d[g]():f.interval&&d.pause().cycle()})}var a=function(a,c){this.$element=b(a),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",b.proxy(this.keydown,this)),"hover"!=this.options.pause||"ontouchstart"in document.documentElement||this.$element.on("mouseenter.bs.carousel",b.proxy(this.pause,this)).on("mouseleave.bs.carousel",b.proxy(this.cycle,this))};a.VERSION="3.3.5",a.TRANSITION_DURATION=600,a.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},a.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},a.prototype.cycle=function(a){return a||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(b.proxy(this.next,this),this.options.interval)),this},a.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},a.prototype.getItemForDirection=function(a,c){var b=this.getItemIndex(c);if(("prev"==a&&0===b||"next"==a&&b==this.$items.length-1)&&!this.options.wrap)return c;var d=(b+("prev"==a?-1:1))%this.$items.length;return this.$items.eq(d)},a.prototype.to=function(a){var c=this,b=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(a)}):b==a?this.pause().cycle():this.slide(a>b?"next":"prev",this.$items.eq(a))},a.prototype.pause=function(a){return a||(this.paused=!0),this.$element.find(".next, .prev").length&&b.support.transition&&(this.$element.trigger(b.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},a.prototype.next=function(){return this.sliding?void 0:this.slide("next")},a.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},a.prototype.slide=function(f,k){var d=this.$element.find(".item.active"),c=k||this.getItemForDirection(f,d),g=this.interval,e="next"==f?"left":"right",m=this;if(c.hasClass("active"))return this.sliding=!1;var h=c[0],i=b.Event("slide.bs.carousel",{relatedTarget:h,direction:e});if(this.$element.trigger(i),!i.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var j=b(this.$indicators.children()[this.getItemIndex(c)]);j&&j.addClass("active")}var l=b.Event("slid.bs.carousel",{relatedTarget:h,direction:e});return b.support.transition&&this.$element.hasClass("slide")?(c.addClass(f),c[0].offsetWidth,d.addClass(e),c.addClass(e),d.one("bsTransitionEnd",function(){c.removeClass([f,e].join(" ")).addClass("active"),d.removeClass(["active",e].join(" ")),m.sliding=!1,setTimeout(function(){m.$element.trigger(l)},0)}).emulateTransitionEnd(a.TRANSITION_DURATION)):(d.removeClass("active"),c.addClass("active"),this.sliding=!1,this.$element.trigger(l)),g&&this.cycle(),this}};var e=b.fn.carousel;b.fn.carousel=d,b.fn.carousel.Constructor=a,b.fn.carousel.noConflict=function(){return b.fn.carousel=e,this};var c=function(h){var f,a=b(this),c=b(a.attr("data-target")||(f=a.attr("href"))&&f.replace(/.*(?=#[^\s]+$)/,""));if(c.hasClass("carousel")){var g=b.extend({},c.data(),a.data()),e=a.attr("data-slide-to");e&&(g.interval=!1),d.call(c,g),e&&c.data("bs.carousel").to(e),h.preventDefault()}};b(document).on("click.bs.carousel.data-api","[data-slide]",c).on("click.bs.carousel.data-api","[data-slide-to]",c),b(window).on("load",function(){b('[data-ride="carousel"]').each(function(){var a=b(this);d.call(a,a.data())})})}(jQuery),function(b){"use strict";function d(a){var c;return b(a.attr("data-target")||(c=a.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""))}function c(c){return this.each(function(){var e=b(this),d=e.data("bs.collapse"),f=b.extend({},a.DEFAULTS,e.data(),"object"==typeof c&&c);!d&&f.toggle&&/show|hide/.test(c)&&(f.toggle=!1),d||e.data("bs.collapse",d=new a(this,f)),"string"==typeof c&&d[c]()})}var a=function(c,d){this.$element=b(c),this.options=b.extend({},a.DEFAULTS,d),this.$trigger=b('[data-toggle="collapse"][href="#'+c.id+'"],[data-toggle="collapse"][data-target="#'+c.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};a.VERSION="3.3.5",a.TRANSITION_DURATION=350,a.DEFAULTS={toggle:!0},a.prototype.dimension=function(){return this.$element.hasClass("width")?"width":"height"},a.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e,d=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(d&&d.length&&(e=d.data("bs.collapse"))&&e.transitioning)){var g=b.Event("show.bs.collapse");if(this.$element.trigger(g),!g.isDefaultPrevented()){d&&d.length&&(c.call(d,"hide"),e||d.data("bs.collapse",null));var f=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[f](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[f](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!b.support.transition)return h.call(this);var i=b.camelCase(["scroll",f].join("-"));this.$element.one("bsTransitionEnd",b.proxy(h,this)).emulateTransitionEnd(a.TRANSITION_DURATION)[f](this.$element[0][i])}}}},a.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var d=b.Event("hide.bs.collapse");if(this.$element.trigger(d),!d.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return b.support.transition?void this.$element[c](0).one("bsTransitionEnd",b.proxy(e,this)).emulateTransitionEnd(a.TRANSITION_DURATION):e.call(this)}}},a.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},a.prototype.getParent=function(){return b(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(b.proxy(function(e,c){var a=b(c);this.addAriaAndCollapsedClass(d(a),a)},this)).end()},a.prototype.addAriaAndCollapsedClass=function(b,c){var a=b.hasClass("in");b.attr("aria-expanded",a),c.toggleClass("collapsed",!a).attr("aria-expanded",a)};var e=b.fn.collapse;b.fn.collapse=c,b.fn.collapse.Constructor=a,b.fn.collapse.noConflict=function(){return b.fn.collapse=e,this},b(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(f){var a=b(this);a.attr("data-target")||f.preventDefault();var e=d(a),g=e.data("bs.collapse")?"toggle":a.data();c.call(e,g)})}(jQuery),function(b){"use strict";function e(c){var a=c.attr("data-target");a||(a=(a=c.attr("href"))&&/#[A-Za-z]/.test(a)&&a.replace(/.*(?=#[^\s]*$)/,""));var d=a&&b(a);return d&&d.length?d:c.parent()}function d(a){a&&3===a.which||(b(f).remove(),b(c).each(function(){var d=b(this),c=e(d),f={relatedTarget:this};c.hasClass("open")&&(a&&"click"==a.type&&/input|textarea/i.test(a.target.tagName)&&b.contains(c[0],a.target)||(c.trigger(a=b.Event("hide.bs.dropdown",f)),a.isDefaultPrevented()||(d.attr("aria-expanded","false"),c.removeClass("open").trigger("hidden.bs.dropdown",f))))}))}var f=".dropdown-backdrop",c='[data-toggle="dropdown"]',a=function(a){b(a).on("click.bs.dropdown",this.toggle)};a.VERSION="3.3.5",a.prototype.toggle=function(f){var c=b(this);if(!c.is(".disabled, :disabled")){var a=e(c),h=a.hasClass("open");if(d(),!h){"ontouchstart"in document.documentElement&&!a.closest(".navbar-nav").length&&b(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(b(this)).on("click",d);var g={relatedTarget:this};if(a.trigger(f=b.Event("show.bs.dropdown",g)),f.isDefaultPrevented())return;c.trigger("focus").attr("aria-expanded","true"),a.toggleClass("open").trigger("shown.bs.dropdown",g)}return!1}},a.prototype.keydown=function(a){if(/(38|40|27|32)/.test(a.which)&&!/input|textarea/i.test(a.target.tagName)){var g=b(this);if(a.preventDefault(),a.stopPropagation(),!g.is(".disabled, :disabled")){var h=e(g),i=h.hasClass("open");if(!i&&27!=a.which||i&&27==a.which)return 27==a.which&&h.find(c).trigger("focus"),g.trigger("click");var j=" li:not(.disabled):visible a",f=h.find(".dropdown-menu"+j);if(f.length){var d=f.index(a.target);38==a.which&&d>0&&d--,40==a.which&&d<f.length-1&&d++,~d||(d=0),f.eq(d).trigger("focus")}}}};var g=b.fn.dropdown;b.fn.dropdown=function(c){return this.each(function(){var d=b(this),e=d.data("bs.dropdown");e||d.data("bs.dropdown",e=new a(this)),"string"==typeof c&&e[c].call(d)})},b.fn.dropdown.Constructor=a,b.fn.dropdown.noConflict=function(){return b.fn.dropdown=g,this},b(document).on("click.bs.dropdown.data-api",d).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",c,a.prototype.toggle).on("keydown.bs.dropdown.data-api",c,a.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",a.prototype.keydown)}(jQuery),function(b){"use strict";function c(c,d){return this.each(function(){var f=b(this),e=f.data("bs.modal"),g=b.extend({},a.DEFAULTS,f.data(),"object"==typeof c&&c);e||f.data("bs.modal",e=new a(this,g)),"string"==typeof c?e[c](d):g.show&&e.show(d)})}var a=function(a,c){this.options=c,this.$body=b(document.body),this.$element=b(a),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,b.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};a.VERSION="3.3.5",a.TRANSITION_DURATION=300,a.BACKDROP_TRANSITION_DURATION=150,a.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},a.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},a.prototype.show=function(d){var e=this,c=b.Event("show.bs.modal",{relatedTarget:d});this.$element.trigger(c),this.isShown||c.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',b.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){e.$element.one("mouseup.dismiss.bs.modal",function(a){b(a.target).is(e.$element)&&(e.ignoreBackdropClick=!0)})}),this.backdrop(function(){var c=b.support.transition&&e.$element.hasClass("fade");e.$element.parent().length||e.$element.appendTo(e.$body),e.$element.show().scrollTop(0),e.adjustDialog(),c&&e.$element[0].offsetWidth,e.$element.addClass("in"),e.enforceFocus();var f=b.Event("shown.bs.modal",{relatedTarget:d});c?e.$dialog.one("bsTransitionEnd",function(){e.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(a.TRANSITION_DURATION):e.$element.trigger("focus").trigger(f)}))},a.prototype.hide=function(c){c&&c.preventDefault(),c=b.Event("hide.bs.modal"),this.$element.trigger(c),this.isShown&&!c.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),b(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),b.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",b.proxy(this.hideModal,this)).emulateTransitionEnd(a.TRANSITION_DURATION):this.hideModal())},a.prototype.enforceFocus=function(){b(document).off("focusin.bs.modal").on("focusin.bs.modal",b.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},a.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",b.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},a.prototype.resize=function(){this.isShown?b(window).on("resize.bs.modal",b.proxy(this.handleUpdate,this)):b(window).off("resize.bs.modal")},a.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},a.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},a.prototype.backdrop=function(c){var g=this,d=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var e=b.support.transition&&d;if(this.$backdrop=b(document.createElement("div")).addClass("modal-backdrop "+d).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",b.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),e&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!c)return;e?this.$backdrop.one("bsTransitionEnd",c).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION):c()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var f=function(){g.removeBackdrop(),c&&c()};b.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",f).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION):f()}else c&&c()},a.prototype.handleUpdate=function(){this.adjustDialog()},a.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},a.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},a.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},a.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},a.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},a.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=b.fn.modal;b.fn.modal=c,b.fn.modal.Constructor=a,b.fn.modal.noConflict=function(){return b.fn.modal=d,this},b(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(f){var a=b(this),d=a.attr("href"),e=b(a.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),g=e.data("bs.modal")?"toggle":b.extend({remote:!/#/.test(d)&&d},e.data(),a.data());a.is("a")&&f.preventDefault(),e.one("show.bs.modal",function(b){b.isDefaultPrevented()||e.one("hidden.bs.modal",function(){a.is(":visible")&&a.trigger("focus")})}),c.call(e,g,this)})}(jQuery),function(b){"use strict";var a=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};a.VERSION="3.3.5",a.TRANSITION_DURATION=150,a.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},a.prototype.init=function(e,f,g){if(this.enabled=!0,this.type=e,this.$element=b(f),this.options=this.getOptions(g),this.$viewport=this.options.viewport&&b(b.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var c=this.options.trigger.split(" "),d=c.length;d--;){var a=c[d];if("click"==a)this.$element.on("click."+this.type,this.options.selector,b.proxy(this.toggle,this));else if("manual"!=a){var h="hover"==a?"mouseenter":"focusin",i="hover"==a?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,b.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,b.proxy(this.leave,this))}}this.options.selector?this._options=b.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},a.prototype.getDefaults=function(){return a.DEFAULTS},a.prototype.getOptions=function(a){return(a=b.extend({},this.getDefaults(),this.$element.data(),a)).delay&&"number"==typeof a.delay&&(a.delay={show:a.delay,hide:a.delay}),a},a.prototype.getDelegateOptions=function(){var a={},c=this.getDefaults();return this._options&&b.each(this._options,function(b,d){c[b]!=d&&(a[b]=d)}),a},a.prototype.enter=function(c){var a=c instanceof this.constructor?c:b(c.currentTarget).data("bs."+this.type);return a||(a=new this.constructor(c.currentTarget,this.getDelegateOptions()),b(c.currentTarget).data("bs."+this.type,a)),c instanceof b.Event&&(a.inState["focusin"==c.type?"focus":"hover"]=!0),a.tip().hasClass("in")||"in"==a.hoverState?void(a.hoverState="in"):(clearTimeout(a.timeout),a.hoverState="in",a.options.delay&&a.options.delay.show?void(a.timeout=setTimeout(function(){"in"==a.hoverState&&a.show()},a.options.delay.show)):a.show())},a.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},a.prototype.leave=function(c){var a=c instanceof this.constructor?c:b(c.currentTarget).data("bs."+this.type);return a||(a=new this.constructor(c.currentTarget,this.getDelegateOptions()),b(c.currentTarget).data("bs."+this.type,a)),c instanceof b.Event&&(a.inState["focusout"==c.type?"focus":"hover"]=!1),a.isInStateTrue()?void 0:(clearTimeout(a.timeout),a.hoverState="out",a.options.delay&&a.options.delay.hide?void(a.timeout=setTimeout(function(){"out"==a.hoverState&&a.hide()},a.options.delay.hide)):a.hide())},a.prototype.show=function(){var i=b.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(i);var n=b.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(i.isDefaultPrevented()||!n)return;var q=this,d=this.tip(),j=this.getUID(this.type);this.setContent(),d.attr("id",j),this.$element.attr("aria-describedby",j),this.options.animation&&d.addClass("fade");var c="function"==typeof this.options.placement?this.options.placement.call(this,d[0],this.$element[0]):this.options.placement,k=/\s?auto?\s?/i,l=k.test(c);l&&(c=c.replace(k,"")||"top"),d.detach().css({top:0,left:0,display:"block"}).addClass(c).data("bs."+this.type,this),this.options.container?d.appendTo(this.options.container):d.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var e=this.getPosition(),g=d[0].offsetWidth,h=d[0].offsetHeight;if(l){var o=c,f=this.getPosition(this.$viewport);c="bottom"==c&&e.bottom+h>f.bottom?"top":"top"==c&&e.top-h<f.top?"bottom":"right"==c&&e.right+g>f.width?"left":"left"==c&&e.left-g<f.left?"right":c,d.removeClass(o).addClass(c)}var p=this.getCalculatedOffset(c,e,g,h);this.applyPlacement(p,c);var m=function(){var a=q.hoverState;q.$element.trigger("shown.bs."+q.type),q.hoverState=null,"out"==a&&q.leave(q)};b.support.transition&&this.$tip.hasClass("fade")?d.one("bsTransitionEnd",m).emulateTransitionEnd(a.TRANSITION_DURATION):m()}},a.prototype.applyPlacement=function(c,f){var a=this.tip(),l=a[0].offsetWidth,g=a[0].offsetHeight,h=parseInt(a.css("margin-top"),10),i=parseInt(a.css("margin-left"),10);isNaN(h)&&(h=0),isNaN(i)&&(i=0),c.top+=h,c.left+=i,b.offset.setOffset(a[0],b.extend({using:function(b){a.css({top:Math.round(b.top),left:Math.round(b.left)})}},c),0),a.addClass("in");var k=a[0].offsetWidth,e=a[0].offsetHeight;"top"==f&&e!=g&&(c.top=c.top+g-e);var d=this.getViewportAdjustedDelta(f,c,k,e);d.left?c.left+=d.left:c.top+=d.top;var j=/top|bottom/.test(f),m=j?2*d.left-l+k:2*d.top-g+e;a.offset(c),this.replaceArrow(m,a[0][j?"offsetWidth":"offsetHeight"],j)},a.prototype.replaceArrow=function(b,c,a){this.arrow().css(a?"left":"top",50*(1-b/c)+"%").css(a?"top":"left","")},a.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},a.prototype.hide=function(f){function d(){"in"!=g.hoverState&&c.detach(),g.$element.removeAttr("aria-describedby").trigger("hidden.bs."+g.type),f&&f()}var g=this,c=b(this.$tip),e=b.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(c.removeClass("in"),b.support.transition&&c.hasClass("fade")?c.one("bsTransitionEnd",d).emulateTransitionEnd(a.TRANSITION_DURATION):d(),this.hoverState=null,this)},a.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},a.prototype.hasContent=function(){return this.getTitle()},a.prototype.getPosition=function(c){var e=(c=c||this.$element)[0],d="BODY"==e.tagName,a=e.getBoundingClientRect();null==a.width&&(a=b.extend({},a,{width:a.right-a.left,height:a.bottom-a.top}));var f=d?{top:0,left:0}:c.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:c.scrollTop()},h=d?{width:b(window).width(),height:b(window).height()}:null;return b.extend({},a,g,h,f)},a.prototype.getCalculatedOffset=function(b,a,c,d){return"bottom"==b?{top:a.top+a.height,left:a.left+a.width/2-c/2}:"top"==b?{top:a.top-d,left:a.left+a.width/2-c/2}:"left"==b?{top:a.top+a.height/2-d/2,left:a.left-c}:{top:a.top+a.height/2-d/2,left:a.left+a.width}},a.prototype.getViewportAdjustedDelta=function(i,c,j,k){var b={top:0,left:0};if(!this.$viewport)return b;var d=this.options.viewport&&this.options.viewport.padding||0,a=this.getPosition(this.$viewport);if(/right|left/.test(i)){var e=c.top-d-a.scroll,f=c.top+d-a.scroll+k;e<a.top?b.top=a.top-e:f>a.top+a.height&&(b.top=a.top+a.height-f)}else{var g=c.left-d,h=c.left+d+j;g<a.left?b.left=a.left-g:h>a.right&&(b.left=a.left+a.width-h)}return b},a.prototype.getTitle=function(){var b=this.$element,a=this.options;return b.attr("data-original-title")||("function"==typeof a.title?a.title.call(b[0]):a.title)},a.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a))return a},a.prototype.tip=function(){if(!this.$tip&&(this.$tip=b(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},a.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},a.prototype.enable=function(){this.enabled=!0},a.prototype.disable=function(){this.enabled=!1},a.prototype.toggleEnabled=function(){this.enabled=!this.enabled},a.prototype.toggle=function(c){var a=this;c&&((a=b(c.currentTarget).data("bs."+this.type))||(a=new this.constructor(c.currentTarget,this.getDelegateOptions()),b(c.currentTarget).data("bs."+this.type,a))),c?(a.inState.click=!a.inState.click,a.isInStateTrue()?a.enter(a):a.leave(a)):a.tip().hasClass("in")?a.leave(a):a.enter(a)},a.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var c=b.fn.tooltip;b.fn.tooltip=function(c){return this.each(function(){var e=b(this),d=e.data("bs.tooltip");(d||!/destroy|hide/.test(c))&&(d||e.data("bs.tooltip",d=new a(this,"object"==typeof c&&c)),"string"==typeof c&&d[c]())})},b.fn.tooltip.Constructor=a,b.fn.tooltip.noConflict=function(){return b.fn.tooltip=c,this}}(jQuery),function(b){"use strict";var a=function(a,b){this.init("popover",a,b)};if(!b.fn.tooltip)throw new Error("Popover requires tooltip.js");a.VERSION="3.3.5",a.DEFAULTS=b.extend({},b.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),a.prototype=b.extend({},b.fn.tooltip.Constructor.prototype),a.prototype.constructor=a,a.prototype.getDefaults=function(){return a.DEFAULTS},a.prototype.setContent=function(){var a=this.tip(),c=this.getTitle(),b=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](c),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof b?"html":"append":"text"](b),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},a.prototype.hasContent=function(){return this.getTitle()||this.getContent()},a.prototype.getContent=function(){var b=this.$element,a=this.options;return b.attr("data-content")||("function"==typeof a.content?a.content.call(b[0]):a.content)},a.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var c=b.fn.popover;b.fn.popover=function(c){return this.each(function(){var e=b(this),d=e.data("bs.popover");(d||!/destroy|hide/.test(c))&&(d||e.data("bs.popover",d=new a(this,"object"==typeof c&&c)),"string"==typeof c&&d[c]())})},b.fn.popover.Constructor=a,b.fn.popover.noConflict=function(){return b.fn.popover=c,this}}(jQuery),function(b){"use strict";function a(c,d){this.$body=b(document.body),this.$scrollElement=b(b(c).is(document.body)?window:c),this.options=b.extend({},a.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",b.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var e=b(this),d=e.data("bs.scrollspy");d||e.data("bs.scrollspy",d=new a(this,"object"==typeof c&&c)),"string"==typeof c&&d[c]()})}a.VERSION="3.3.5",a.DEFAULTS={offset:10},a.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},a.prototype.refresh=function(){var d=this,a="offset",c=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),b.isWindow(this.$scrollElement[0])||(a="position",c=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var f=b(this),e=f.data("target")||f.attr("href"),d=/^#./.test(e)&&b(e);return d&&d.length&&d.is(":visible")&&[[d[a]().top+c,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){d.offsets.push(this[0]),d.targets.push(this[1])})},a.prototype.process=function(){var a,c=this.$scrollElement.scrollTop()+this.options.offset,f=this.getScrollHeight(),g=this.options.offset+f-this.$scrollElement.height(),b=this.offsets,d=this.targets,e=this.activeTarget;if(this.scrollHeight!=f&&this.refresh(),c>=g)return e!=(a=d[d.length-1])&&this.activate(a);if(e&&c<b[0])return this.activeTarget=null,this.clear();for(a=b.length;a--;)e!=d[a]&&c>=b[a]&&(void 0===b[a+1]||c<b[a+1])&&this.activate(d[a])},a.prototype.activate=function(c){this.activeTarget=c,this.clear();var a=b(this.selector+'[data-target="'+c+'"],'+this.selector+'[href="'+c+'"]').parents("li").addClass("active");a.parent(".dropdown-menu").length&&(a=a.closest("li.dropdown").addClass("active")),a.trigger("activate.bs.scrollspy")},a.prototype.clear=function(){b(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=b.fn.scrollspy;b.fn.scrollspy=c,b.fn.scrollspy.Constructor=a,b.fn.scrollspy.noConflict=function(){return b.fn.scrollspy=d,this},b(window).on("load.bs.scrollspy.data-api",function(){b('[data-spy="scroll"]').each(function(){var a=b(this);c.call(a,a.data())})})}(jQuery),function(a){"use strict";function d(c){return this.each(function(){var e=a(this),d=e.data("bs.tab");d||e.data("bs.tab",d=new b(this)),"string"==typeof c&&d[c]()})}var b=function(b){this.element=a(b)};b.VERSION="3.3.5",b.TRANSITION_DURATION=150,b.prototype.show=function(){var b=this.element,d=b.closest("ul:not(.dropdown-menu)"),c=b.data("target");if(c||(c=(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=d.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(c);this.activate(b.closest("li"),d),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},b.prototype.activate=function(h,d,f){function e(){c.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),h.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),g?(h[0].offsetWidth,h.addClass("in")):h.removeClass("fade"),h.parent(".dropdown-menu").length&&h.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),f&&f()}var c=d.find("> .active"),g=f&&a.support.transition&&(c.length&&c.hasClass("fade")||!!d.find("> .fade").length);c.length&&g?c.one("bsTransitionEnd",e).emulateTransitionEnd(b.TRANSITION_DURATION):e(),c.removeClass("in")};var e=a.fn.tab;a.fn.tab=d,a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=e,this};var c=function(b){b.preventDefault(),d.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',c).on("click.bs.tab.data-api",'[data-toggle="pill"]',c)}(jQuery),function(b){"use strict";function c(c){return this.each(function(){var e=b(this),d=e.data("bs.affix");d||e.data("bs.affix",d=new a(this,"object"==typeof c&&c)),"string"==typeof c&&d[c]()})}var a=function(c,d){this.options=b.extend({},a.DEFAULTS,d),this.$target=b(this.options.target).on("scroll.bs.affix.data-api",b.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",b.proxy(this.checkPositionWithEventLoop,this)),this.$element=b(c),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};a.VERSION="3.3.5",a.RESET="affix affix-top affix-bottom",a.DEFAULTS={offset:0,target:window},a.prototype.getState=function(d,h,a,c){var b=this.$target.scrollTop(),e=this.$element.offset(),f=this.$target.height();if(null!=a&&"top"==this.affixed)return a>b&&"top";if("bottom"==this.affixed)return null!=a?!(b+this.unpin<=e.top)&&"bottom":!(d-c>=b+f)&&"bottom";var g=null==this.affixed,i=g?b:e.top,j=g?f:h;return null!=a&&a>=b?"top":null!=c&&i+j>=d-c&&"bottom"},a.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(a.RESET).addClass("affix");var b=this.$target.scrollTop(),c=this.$element.offset();return this.pinnedOffset=c.top-b},a.prototype.checkPositionWithEventLoop=function(){setTimeout(b.proxy(this.checkPosition,this),1)},a.prototype.checkPosition=function(){if(this.$element.is(":visible")){var h=this.$element.height(),c=this.options.offset,f=c.top,e=c.bottom,i=Math.max(b(document).height(),b(document.body).height());"object"!=typeof c&&(e=f=c),"function"==typeof f&&(f=c.top(this.$element)),"function"==typeof e&&(e=c.bottom(this.$element));var d=this.getState(i,h,f,e);if(this.affixed!=d){null!=this.unpin&&this.$element.css("top","");var g="affix"+(d?"-"+d:""),j=b.Event(g+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=d,this.unpin="bottom"==d?this.getPinnedOffset():null,this.$element.removeClass(a.RESET).addClass(g).trigger(g.replace("affix","affixed")+".bs.affix")}"bottom"==d&&this.$element.offset({top:i-h-e})}};var d=b.fn.affix;b.fn.affix=c,b.fn.affix.Constructor=a,b.fn.affix.noConflict=function(){return b.fn.affix=d,this},b(window).on("load",function(){b('[data-spy="affix"]').each(function(){var d=b(this),a=d.data();a.offset=a.offset||{},null!=a.offsetBottom&&(a.offset.bottom=a.offsetBottom),null!=a.offsetTop&&(a.offset.top=a.offsetTop),c.call(d,a)})})}(jQuery)

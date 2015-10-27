/**
* Responsive Messages
* Deps: modal
*/

/* start-amd-strip-block */
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function($) {
/* end-amd-strip-block */

  $.fn.message = function(options) {

    // Settings and Options
    var defaults = {
          title: 'Message Title', //Title text or content shown in the message
          isError: false, //Show Title as an Error with an Icon
          message: 'Message Summary', //The message content or text
          width: 'auto',  //specify a given width or fit to content with auto
          buttons: null, //Passed through to modal
          cssClass: null,
          returnFocus: null //Element to focus on return
        },
        settings = $.extend({}, defaults, options);

    // Plugin Constructor
    function Plugin(element) {
      this.element = $(element);
      this.init();
    }

    // Actual Plugin Code
    Plugin.prototype = {
      init: function() {
        var self = this,
          content;

        //Create the Markup
        this.message = $('<div class="modal"></div>');
        this.messageContent = $('<div class="modal-content"></div>');
        this.title = $('<h1 class="modal-title" id="message-title">' + settings.title + '</h1>').appendTo(this.messageContent);
        this.content = $('<div class="modal-body"><p class="message" id="message-text">'+ settings.message +'</p></div>').appendTo(this.messageContent);

        //Append The Content if Passed in
        if (!this.element.is('body')) {
          content = this.element;
          this.content.empty().append(content.show());
        }

        this.message.append(this.messageContent).appendTo('body');
        this.message.modal({trigger: 'immediate', buttons: settings.buttons,
          resizable: settings.resizable, close: settings.close, isAlert: true});

        //Adjust Width if Set as a Setting
        if (settings.width !== 'auto') {
          this.content.closest('.modal').css({'max-width': 'none', 'width': settings.width});
        }

        if (settings.cssClass) {
          this.message.addClass(settings.cssClass);
        }

        //Setup the destroy event to fire on close.  Needs to fire after the "close" event on the modal.
        this.message.on('beforeClose', function () {
          var ok = self.element.triggerHandler('beforeclose');
          return ok;
        });
        this.message.on('beforeOpen', function () {
          var ok = self.element.triggerHandler('beforeopen');
          return ok;
        });
        this.message.on('open', function () {
          self.element.trigger('open');
        });
        this.message.data('modal').element.on('afterClose', function() {
          self.destroy();

          if (settings.returnFocus) {
            settings.returnFocus.focus();
          }
        });

        if (settings.isError) {
          this.title.addClass('is-error').prepend('<svg class="icon icon-error" focusable="false" aria-hidden="true" role="presentation"><use xlink:href="#icon-error"></svg>');
        } else {
          this.title.removeClass('is-error').find('svg').remove();
        }
      },
      destroy: function() {
        this.message.remove();
        $('body').off('beforeclose close beforeopen open afterclose');
      }
    };

    // Support Chaining and Init the Control or Set Settings
    return this.each(function() {
      new Plugin(this, settings);
    });
  };

/* start-amd-strip-block */
}));
/* end-amd-strip-block */

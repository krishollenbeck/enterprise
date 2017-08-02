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

  $.fn.tag = function(options) {
    'use strict';

    // Settings and Options
    var pluginName = 'tag',
        defaults = {
        },
        settings = $.extend({}, defaults, options);

    /**
     * @constructor
     * @param {Object} element
     */
    function Tag(element) {
      this.settings = $.extend({}, settings);
      this.element = $(element);
      Soho.logTimeStart(pluginName);
      this.init();
      Soho.logTimeEnd(pluginName);
    }

    // Tag Methods
    Tag.prototype = {

      /**
       * @private
       */
      init: function() {
        this.element.hideFocus();
        this.handleEvents();
      },

      /**
       * Remove the tag from the DOM
       */
      remove: function(event, el) {
        el = el instanceof jQuery ? el : $(el);
        var parent = el.parent();
        this.element.triggerHandler('beforetagremove', {event: event, element: el});
        el.remove();
        parent.triggerHandler('aftertagremove', {event: event});
      },

      /**
       * Destroy this component instance and remove the link from its base element.
       */
      destroy: function() {
        this.element.off('keydown.tag');
        $('.dismissable-btn, .dismissible-btn', this.element).off('click.tag').remove();

        $.removeData(this.element[0], pluginName);
      },

      /**
       *  This component fires the following events.
       *
       * @fires Tag#events
       * @param {Object} click  &nbsp;-&nbsp; Fires when the tag is clicked (if enabled).
       * @param {Object} keydown  &nbsp;-&nbsp; Fires when the tag is focused.
       */
      handleEvents: function() {
        var self = this,
          btnDismissable = $(
            '<span class="dismissible-btn">' +
              $.createIcon('close') +
              '<span class="audible"> '+ Locale.translate('Close') +'</span>' +
            '</span>'),
          dismissibleClass = '.is-dismissable, .is-dismissible';

        // EPC: Deprecating "dismissable" in favor of "dismissible" as of 4.3.0
        if (self.element.is(dismissibleClass)) {
          self.element.append(btnDismissable);

          // Handle Click
          btnDismissable.on('click.tag', function(event) {
            self.remove(event, self.element);
          });

          // Handle Keyboard
          self.element.on('keydown.tag', function(event) {
            var e = event || window.event;
            if (e.keyCode === 8) { // Backspace
              self.remove(event, this);
            }
          });
        }
      }
    };

    // Initialize the plugin (Once)
    return this.each(function() {
      var instance = $.data(this, pluginName);
      if (instance) {
        instance.settings = $.extend({}, instance.settings, options);
        instance.updated();
      } else {
        instance = $.data(this, pluginName, new Tag(this, settings));
      }
    });
  };

/* start-amd-strip-block */
}));
/* end-amd-strip-block */
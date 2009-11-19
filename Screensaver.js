/**
 * Script:
 *   Screensaver.js - Screensaver functionality written in MooTools.
 *
 * License:
 *   MIT-style license.
 * 
 * Author:
 *   Jose Prado
 *
 * Copyright:
 *   Copyright (©) 2009 [Jose Prado](http://pradador.com/).
 *
 */
(function() {
	Screensaver = new Class({
		Implements: [Options, Events],
		options: {/*
			onActive: $empty,
			onIdle: $empty,*/
			events: ['click', 'keypress', 'mousemove', 'resize', 'scroll'],
			target: window,
			ttl: 10000
		},

		initialize: function(options) {
			this.setOptions(options);
			this.enabled = false;

			var target = document.id(this.options.target);
			this.options.events.each(function(ev) {
				target.addEvent(ev, this.reset.bind(this));
			}, this);

			this.monitor();
		},

		monitor: function() {
			this.timer = this.display.delay(this.options.ttl, this);
		},

		reset: function() {
			$clear(this.timer);
			if (this.enabled) {
				this.fireEvent('active');
				this.enabled = false;
			}
			this.monitor();
		},

		display: function() {
			this.fireEvent('idle');
			this.enabled = true;
		}
	});
	
	Element.implement({
		screensave: function(options) {
			options.target = this;
			return new Screensaver(options)
		}
	});
})();
Screensaver.js - Screensaver functionality written in MooTools.
---------------------------------------------------------------

Screensaver.js is a free MooTools class which simulates your computer's screensaver behavior on your website. All the script really does is fire two events; It fires an idle and an active event which you attach your "screensaver" to. This could be starting and stopping a slideshow, or displaying/hiding a div with content.

I use it on a couple of websites to start/stop a slideshow when the user idles and figured I'd make the small script available to the world.


### Basic Usage: ###

Simply create a new Screensaver object and in the options set the functions you want fired when the user goes idle and when the user is active. Other options include the idle time using the "ttl" option and the events to listen for to test if user is active using the "events" option. Last is the target option which lets you attach the monitor events to a different object other than the default of "window". For example:

	var moosaver = new Screensaver({
		onActive: hideScreensaver,
		onIdle:   showScreensaver,
		ttl:      15000
	});


### Options: ###

* events   - (*array*: defaults to ['click', 'keypress', 'mousemove', 'resize', 'scroll']) The events to listen for which indicate a user is active.
* target   - (*element*: defaults to window) The element to monitor for user activity.
* ttl      - (*integer*: defaults to 10000ms) The time which the user must spend idle before the idle event is fired.
* onIdle   - (*function*) Function to call when user goes idle. Use this to start your slideshow for example.
* onActive - (*function*) Functino to call when user returns from idling. Stop the slideshow with this for example.


### License: ###

Lighter.js is licensed under the MIT License. Use it, modify it, have fun with it... in any circumstance.
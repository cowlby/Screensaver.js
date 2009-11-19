Class: Screensaver {#Screensaver}
=================================

Creates and returns a new Screensaver object using the supplied objects.


### Implements:

Options, Events



Screensaver Method: constructor {#Screensaver:constructor}
----------------------------------------------------------

### Syntax:

	var myScreensaver = new Screensaver(options);

### Arguments:

1. options - (*object*) The options object.

### Options:

* events - (*array*: defaults to ['click', 'keypress', 'mousemove', 'resize', 'scroll']) The events to listen for which indicate a user is active.
* target - (*element*: defaults to window) The element to monitor for user activity.
* ttl    - (*integer*: defaults to 10000ms) The time which the user must spend idle before the idle event is fired.

### Events:

* idle:   - (*function*) The function to execute when the user has gone idle.
* active: - (*function*) The function to execute when the user returns from idling.


Screensaver Method: monitor {#Screensaver:monitor}
--------------------------------------------------

Helper method to call the display function with a delay of the ttl option.



Screensaver Method: reset {#Screensaver:reset}
----------------------------------------------

Resets the idle period by first clearing the timeout stored by the monitor function. If the idle event was previously fired (I.e. the screensaver was displayed) it fires the active event to hide the screensaver. Finally it calls the monitor function to start checking for idling again.



Screensaver Method: display {#Screensaver:display}
--------------------------------------------------

Displays the screensaver by firing the active event.
/*global Polymer */
(function() {
    'use strict';
    Polymer({
      is: 'microbe-card',
	properties: {
	    microbe: {
		type: Object,
		notify: true
	    },
            foo: {
		type: String,
		value: 'microbe-card',
		notify: true
            }
	},
	_image: function(microbe){
	    return microbe.image();
	}
    });
}());

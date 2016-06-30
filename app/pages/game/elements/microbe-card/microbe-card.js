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
            size: {
		type: Number,
		value: 10,
		notify: true
            }
	},
	_image: function(microbe){
	    return microbe.image();
	},
	image_size: function(size){
	    return size*10;
	}
	
    });
}());

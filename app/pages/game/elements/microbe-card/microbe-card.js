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
		value: 100,
		notify: true
            },
            margin: {
		type: Number,
		value: 40,
		notify: true
            }
	},
	_image: function(microbe){
	    return "/" + microbe.image();
	},
	_points: function(size,margin,which){
	    var cs = this._csize(margin);
	    switch( which) {
	    case 0:
		return "0,0,0," + cs + "," + cs + ",0";
            case 1:
		return " " + size + ",0"  + "," + size + "," + cs + "," + (size-cs) + ",0";
            case 2:
 		return "0," + size +  ",0"  + "," + (size-cs) + "," + cs + "," + size ;
	    }
	},
	_image_x: function(size,margin){
	    return (size/2) - this._image_size(size,margin)/2;
	},
	_csize: function(margin){
	    return margin/2;
	},
	_ccolor: function(microbe,which){
	    return microbe.color(which);
	},
	_circle_x: function(size,margin,which){
	    if (which == 0 || which == 2) {
		return margin / 2 - this._csize(margin) ; 
	    }
	    return size - margin / 2 + this._csize(margin);
	},
	_circle_y: function(size,margin,which){
	    if (which == 0 || which == 1) {
		return margin / 2  - this._csize(margin) ; 
	    }
	    return size - margin / 2 + this._csize(margin);
	},
	_image_y: function(size,margin){
	    return (size/2) - this._image_size(size,margin)/2;
	},
	_size: function(size){
	    return size;
	},
	_image_size: function(size,margin){
	    return size-margin / 2;
	}
	
    });
}());

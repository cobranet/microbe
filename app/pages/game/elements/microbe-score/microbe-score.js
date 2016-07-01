/*global Polymer */
(function() {
    'use strict';
    Polymer({
      is: 'microbe-score',
	properties: {
	    scores: {
		type: Array,
		notify: true
	    },
	    images: {
		type: Array,
		notify: true
	    },
	    size: {
		type: Number,
		value: 30,
		notify: true
	    }
	},
	_score: function(scores,which){
	    if(scores){
		return scores[which];
	    }
	},
	_image: function(images,which){
	    if (images) {
		return "/" + images[which];
	    }
	},
	_image_size: function(size){
	    return size;
	}
    });
}());

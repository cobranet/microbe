/*global Polymer */
(function() {
    'use strict';
    Polymer({
      is: 'microbe-rack',
	properties: {
	    rack: {
		type: Object,
		notify: true
	    }
	},
	_get_microbe:function(rack,x){
	    return rack.cell(x);
	}
	
    });
}());

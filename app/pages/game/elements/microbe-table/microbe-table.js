/*global Polymer */
(function() {
    'use strict';
    Polymer({
      is: 'microbe-table',
	properties: {
	    table: {
		type: Object,
		notify: true
	    }
	},
	_get_microbe:function(table,x,y){
	    return table.cell(x,y);
	}
	
    });
}());

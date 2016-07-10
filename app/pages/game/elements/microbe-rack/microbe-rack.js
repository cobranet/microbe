/*global Polymer, alert */
(function() {
    'use strict';
    Polymer({
      is: 'microbe-rack',
	properties: {
	    rack: {
		type: Object,
		notify: true
	    },
	    sel: {
		type: String,
		notify: true
	    },
	    trig: {
		type: Number,
		notify: true,
		value: 1
	    }
	},
	_msize: function(sel,which){
	    if (sel==which){
		return 130;
	    }
	    return 100;
	},
	_select: function(e){
	    var clickedId = e.currentTarget.id;
	    var x = e.detail.x,
		y = e.detail.y; 
	    var bounds = e.currentTarget.getBoundingClientRect();

	    x = x - bounds.left;
	    y = y - bounds.top;
	    var microbe;
	    if (this.sel !=  clickedId) {
		this.sel = clickedId;
	    } else {
		if (x < bounds.width / 2  ){
		    microbe = this.rack.cell(clickedId.substr(1,1));
	            microbe.rotate(false);
		    this.trig = - this.trig;
		    this.notifyPath('rack.trig',this.rack.trig);
		} else  {
		    microbe = this.rack.cell(clickedId.substr(1,1));
		    microbe.rotate(true);
		    this.trig = - this.trig;
		    this.notifyPath('rack.trig',this.rack.trig);
		   
		}
	    }
	    
	},
	_get_microbe: function(rack,x,trig){
	    return rack.cell(x);
	}
	
    });
}());

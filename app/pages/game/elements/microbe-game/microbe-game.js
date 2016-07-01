/*global Polymer, Microbe, alert */
(function() {
    'use strict';
    Polymer({
      is: 'microbe-game',
	properties: {
	    game: {
		type: Object,
		notify: true
	    },
            userimage: {
		type: String,
		value: 'microbe-game',
		notify: true
            }
	},
	item_image: function(item){
	    return item.image();
	},
	_images: function(game){
	    return game.microbe_images();
	},
	_scores: function(table){
	    return table.assign_values();
	},
	ready: function(){
	    var self=this;
	    self.game =  new Microbe.Game();
	}
    });
}());

var Microbe;
(function (Microbe) {
    var Rack = (function () {
        function Rack() {
            this.microbes = new Array();
            for (var i = 0; i < 3; i++) {
                this.microbes[i] = null;
            }
        }
        Rack.prototype.cell = function (x) {
            return this.microbes[x];
        };
        Rack.prototype.set_cell = function (x, val) {
            this.microbes[x] = val;
        };
        return Rack;
    }());
    Microbe.Rack = Rack;
    var Player = (function () {
        function Player(name, image, id) {
            this.name = name;
            this.image = image;
            this.id = id;
            this.rack = new Rack();
        }
        Player.prototype.add_card = function (x, card) {
            this.rack.set_cell(x, card);
        };
        return Player;
    }());
    Microbe.Player = Player;
    var Table = (function () {
        function Table() {
            this.scores = [0, 0, 0, 0];
            this.microbes = new Array();
            for (var i = 0; i < 3; i++) {
                this.microbes[i] = new Array();
                for (var k = 0; k < 3; k++) {
                    this.microbes[i][k] = null;
                }
            }
        }
        Table.prototype.cell = function (x, y) {
            return this.microbes[x][y];
        };
        Table.prototype.assign_values = function () {
            var max = new Array();
            var min = new Array();
            var cmin = 10;
            var cmax = 0;
            var values = [1, 1, 1, 1];
            for (var i = 0; i < 4; i++) {
                if (this.scores[i] < cmin) {
                    min = [i];
                    cmin = this.scores[i];
                }
                else {
                    if (this.scores[i] == cmin) {
                        min.push(i);
                    }
                }
                if (this.scores[i] > cmax) {
                    max = [i];
                    cmax = this.scores[i];
                }
                else {
                    if (this.scores[i] == cmax) {
                        max.push(i);
                    }
                }
            }
            for (var i = 0; i < max.length; i++) {
                values[max[i]] = -1;
            }
            for (var i = 0; i < min.length; i++) {
                values[min[i]] = 2;
            }
            return values;
        };
        Table.prototype.set_cell = function (x, y, val) {
            if (this.microbes[x][y] != null) {
                this.scores[this.microbes[x][y].mtype] = this.scores[this.microbes[x][y].mtype];
            }
            this.scores[val.mtype] = this.scores[val.mtype] + 1;
            this.microbes[x][y] = val;
            this.values = this.assign_values();
        };
        return Table;
    }());
    Microbe.Table = Table;
    var Game = (function () {
        function Game() {
            this.game_id = 1;
            this.cards = new Array();
            this.deck = new Array();
            for (var i = 0; i < Game.all_cards.length; i++) {
                this.cards.push(new MicrobeCard(Game.all_cards[i].mtype, Game.all_cards[i].arr));
                this.deck.push(i);
            }
            this.shuffle(this.deck);
            this.table = new Table();
            for (var i = 0; i < 3; i++) {
                for (var k = 0; k < 3; k++) {
                    this.table.set_cell(i, k, this.cards[this.deck.pop()]);
                }
            }
            this.player = new Player("bratislav", "none", "e12434324");
            for (var i = 0; i < 3; i++) {
                this.player.add_card(i, this.cards[this.deck.pop()]);
            }
        }
        Game.prototype.shuffle = function (a) {
            var j, i;
            var x;
            for (i = a.length; i; i -= 1) {
                j = Math.floor(Math.random() * i);
                x = a[i - 1];
                a[i - 1] = a[j];
                a[j] = x;
            }
        };
        Game.prototype.microbe_images = function () {
            return Game.microbeImages;
        };
        Game.prototype.microbes = function (which) {
            return this.cards[which];
        };
        Game.microbeImages = ["blue.png", "red.png", "yellow.png", "green.png"];
        Game.all_cards = [
            { mtype: 0, arr: [0, 1, 2, 3] },
            { mtype: 1, arr: [3, 1, 0, 2] },
            { mtype: 2, arr: [3, 2, 1, 0] },
            { mtype: 3, arr: [3, 1, 0, 0] },
            { mtype: 1, arr: [0, 2, 0, 3] },
            { mtype: 2, arr: [2, 0, 2, 1] },
            { mtype: 0, arr: [0, 1, 3, 0] },
            { mtype: 0, arr: [2, 1, 3, 2] },
            { mtype: 1, arr: [3, 2, 3, 1] },
            { mtype: 3, arr: [2, 3, 0, 1] },
            { mtype: 3, arr: [1, 1, 2, 3] },
            { mtype: 2, arr: [2, 3, 1, 3] },
            { mtype: 0, arr: [2, 1, 2, 3] },
            { mtype: 1, arr: [1, 3, 0, 1] },
            { mtype: 2, arr: [1, 0, 2, 0] },
            { mtype: 3, arr: [3, 0, 0, 1] },
            { mtype: 1, arr: [0, 2, 3, 1] },
            { mtype: 2, arr: [3, 0, 3, 1] },
            { mtype: 0, arr: [0, 0, 3, 1] },
            { mtype: 0, arr: [2, 0, 3, 2] },
            { mtype: 1, arr: [3, 3, 3, 1] },
            { mtype: 3, arr: [2, 3, 3, 1] },
            { mtype: 3, arr: [1, 2, 3, 2] },
            { mtype: 2, arr: [1, 3, 1, 0] },
            { mtype: 0, arr: [3, 0, 0, 2] },
            { mtype: 1, arr: [0, 1, 2, 0] },
            { mtype: 2, arr: [0, 1, 2, 0] },
            { mtype: 3, arr: [2, 1, 0, 0] },
            { mtype: 1, arr: [1, 3, 0, 0] },
            { mtype: 2, arr: [1, 3, 0, 0] },
            { mtype: 0, arr: [0, 0, 1, 0] },
            { mtype: 0, arr: [3, 0, 0, 2] },
            { mtype: 1, arr: [0, 0, 3, 0] },
            { mtype: 3, arr: [3, 0, 0, 3] },
            { mtype: 3, arr: [0, 1, 0, 0] },
            { mtype: 2, arr: [2, 0, 0, 0] },
            { mtype: 0, arr: [1, 0, 0, 1] },
            { mtype: 1, arr: [0, 2, 2, 0] },
            { mtype: 2, arr: [0, 3, 1, 0] },
            { mtype: 3, arr: [0, 3, 3, 0] },
            { mtype: 1, arr: [1, 1, 3, 3] },
            { mtype: 2, arr: [3, 2, 2, 1] },
            { mtype: 0, arr: [2, 2, 1, 0] },
            { mtype: 0, arr: [2, 2, 1, 1] },
            { mtype: 1, arr: [1, 3, 3, 0] },
            { mtype: 3, arr: [3, 1, 2, 3] },
            { mtype: 3, arr: [3, 3, 0, 2] },
            { mtype: 2, arr: [2, 2, 1, 0] },
            { mtype: 0, arr: [0, 2, 0, 3] },
            { mtype: 1, arr: [0, 2, 1, 0] },
            { mtype: 3, arr: [1, 2, 0, 0] },
            { mtype: 2, arr: [3, 1, 0, 0] } // 52
        ];
        return Game;
    }());
    Microbe.Game = Game;
    var MicrobeCard = (function () {
        function MicrobeCard(mtype, dots, pos) {
            if (pos === void 0) { pos = 1; }
            this.mtype = mtype;
            this.dots = dots;
            this.pos = pos;
        }
        MicrobeCard.prototype.color = function (which) {
            return MicrobeCard.colors[this.dots[which]];
        };
        MicrobeCard.prototype.rotate = function (clockwise) {
            if (clockwise) {
                this.dots = [this.dots[1], this.dots[2], this.dots[3], this.dots[0]];
            }
            else {
                this.dots = [this.dots[3], this.dots[0], this.dots[1], this.dots[2]];
            }
        };
        MicrobeCard.prototype.image = function () {
            return MicrobeCard.microbeImages[this.mtype];
        };
        MicrobeCard.colors = ["white", "navy", "gold", "red"];
        MicrobeCard.microbeImages = ["blue.png", "red.png", "yellow.png", "green.png"];
        return MicrobeCard;
    }());
    Microbe.MicrobeCard = MicrobeCard;
})(Microbe || (Microbe = {}));

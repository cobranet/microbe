var Microbe;
(function (Microbe) {
    var Game = (function () {
        function Game() {
            this.game_id = 1;
            this.cards = new Array();
            this.cards.push(new MicrobeCard(0, [0, 1, 2, 1]));
            this.cards.push(new MicrobeCard(0, [0, 1, 2, 1]));
            this.cards.push(new MicrobeCard(0, [0, 1, 2, 1]));
        }
        Game.prototype.microbes = function (which) {
            return this.cards[which];
        };
        return Game;
    }());
    Microbe.Game = Game;
    var MicrobeCard = (function () {
        function MicrobeCard(mtype, dots) {
            this.mtype = mtype;
            this.dots = dots;
        }
        ;
        MicrobeCard.prototype.image = function () {
            return MicrobeCard.microbeImages[this.mtype];
        };
        MicrobeCard.colors = ["navy", "gold", "red"];
        MicrobeCard.microbeImages = ["blue.png", "red.png", "yellow.png", "green.png"];
        return MicrobeCard;
    }());
    Microbe.MicrobeCard = MicrobeCard;
})(Microbe || (Microbe = {}));

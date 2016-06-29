module Microbe {
    export class Game {
        public cards: Array<MicrobeCard>;
        public game_id: number = 1;
        constructor() {
            this.cards = new Array<MicrobeCard>();
            this.cards.push(new MicrobeCard(0, [0, 1, 2, 1]));
            this.cards.push(new MicrobeCard(0, [0, 1, 2, 1]));
            this.cards.push(new MicrobeCard(0, [0, 1, 2, 1]));

        }
        microbes(which: number) {
            return this.cards[which];
        }
    }
    export class MicrobeCard {
        static colors: Array<String> = ["navy", "gold", "red"];
        static microbeImages: Array<String> = ["blue.png", "red.png", "yellow.png", "green.png"];
        constructor(public mtype: number, public dots: Array<number>) {
        };

        image() {
            return MicrobeCard.microbeImages[this.mtype];
        }
    }
}

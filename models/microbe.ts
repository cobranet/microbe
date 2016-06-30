module Microbe {
    export class Rack {
        private microbes: Array<MicrobeCard>;
        constructor() {
            this.microbes = new Array<MicrobeCard>();
            for (var i: number = 0; i < 3; i++) {
                this.microbes[i] = null;
            }
        }
        cell(x: number): MicrobeCard {
            return this.microbes[x];
        }
        set_cell(x: number, val: MicrobeCard) {
            this.microbes[x] = val;
        }
    }
    export class Player {
        public rack: Rack;
        constructor(public name: string, public image: string) {
            this.rack = new Rack();
        }
        add_card(x: number, card: MicrobeCard) {
            this.rack.set_cell(x, card);
        }
    }
    export class Table {
        private microbes: Array<Array<MicrobeCard>>;
        private scores: Array<number>;
        public values: Array<number>;
        constructor() {
            this.scores = [0, 0, 0, 0];
            this.microbes = new Array<Array<MicrobeCard>>();
            for (var i: number = 0; i < 3; i++) {
                this.microbes[i] = new Array<MicrobeCard>();
                for (var k: number = 0; k < 3; k++) {
                    this.microbes[i][k] = null;
                }
            }
        }
        cell(x: number, y: number): MicrobeCard {
            return this.microbes[x][y];
        }

        assign_values() {
            var max = new Array<number>();
            var min = new Array<number>();
            var cmin = 10;
            var cmax = 0;
            var values = [1, 1, 1, 1];
            for (var i = 0; i < 4; i++) {
                if (this.scores[i] < cmin) {
                    min = [i];
                    cmin = this.scores[i];
                } else {
                    if (this.scores[i] == cmin) {
                        min.push(i);
                    }
                }
                if (this.scores[i] > cmax) {
                    max = [i];
                    cmax = this.scores[i];
                } else {
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
        }

        set_cell(x: number, y: number, val: MicrobeCard) {
            if (this.microbes[x][y] != null) {
                this.scores[this.microbes[x][y].mtype] = this.scores[this.microbes[x][y].mtype];
            }
            this.scores[val.mtype] = this.scores[val.mtype] + 1;
            this.microbes[x][y] = val;
            this.values = this.assign_values();
        }
    }

    export class Game {
        public cards: Array<MicrobeCard>;
        public game_id: number = 1;
        public table: Table;
        public deck: Array<number>;
        public player: Player;
        static all_cards = [
            { mtype: 0, arr: [0, 1, 2, 3] }, // 1
            { mtype: 1, arr: [3, 1, 0, 2] }, // 2
            { mtype: 2, arr: [3, 2, 1, 0] }, // 3
            { mtype: 3, arr: [3, 1, 0, 0] }, // 4
            { mtype: 1, arr: [0, 2, 0, 3] }, // 5
            { mtype: 2, arr: [2, 0, 2, 1] }, // 6
            { mtype: 0, arr: [0, 1, 3, 0] }, // 7
            { mtype: 0, arr: [2, 1, 3, 2] }, // 8
            { mtype: 1, arr: [3, 2, 3, 1] }, // 9
            { mtype: 3, arr: [2, 3, 0, 1] }, // 10
            { mtype: 3, arr: [1, 1, 2, 3] }, // 11
            { mtype: 2, arr: [2, 3, 1, 3] }, // 12

            { mtype: 0, arr: [2, 1, 2, 3] }, // 13
            { mtype: 1, arr: [1, 3, 0, 1] }, // 14
            { mtype: 2, arr: [1, 0, 2, 0] }, // 15
            { mtype: 3, arr: [3, 0, 0, 1] }, // 16
            { mtype: 1, arr: [0, 2, 3, 1] }, // 17
            { mtype: 2, arr: [3, 0, 3, 1] }, // 18
            { mtype: 0, arr: [0, 0, 3, 1] }, // 19
            { mtype: 0, arr: [2, 0, 3, 2] }, // 20
            { mtype: 1, arr: [3, 3, 3, 1] }, // 21
            { mtype: 3, arr: [2, 3, 3, 1] }, // 22
            { mtype: 3, arr: [1, 2, 3, 2] }, // 23
            { mtype: 2, arr: [1, 3, 1, 0] }, // 24

            { mtype: 0, arr: [3, 0, 0, 2] }, // 25
            { mtype: 1, arr: [0, 1, 2, 0] }, // 26
            { mtype: 2, arr: [0, 1, 2, 0] }, // 27
            { mtype: 3, arr: [2, 1, 0, 0] }, // 28
            { mtype: 1, arr: [1, 3, 0, 0] }, // 29
            { mtype: 2, arr: [1, 3, 0, 0] }, // 30
            { mtype: 0, arr: [0, 0, 1, 0] }, // 31
            { mtype: 0, arr: [3, 0, 0, 2] }, // 32
            { mtype: 1, arr: [0, 0, 3, 0] }, // 33
            { mtype: 3, arr: [3, 0, 0, 3] }, // 34
            { mtype: 3, arr: [0, 1, 0, 0] }, // 35
            { mtype: 2, arr: [2, 0, 0, 0] }, // 36

            { mtype: 0, arr: [1, 0, 0, 1] }, //37
            { mtype: 1, arr: [0, 2, 2, 0] }, // 38
            { mtype: 2, arr: [0, 3, 1, 0] }, // 39
            { mtype: 3, arr: [0, 3, 3, 0] }, // 40
            { mtype: 1, arr: [1, 1, 3, 3] }, // 41
            { mtype: 2, arr: [3, 2, 2, 1] }, // 42
            { mtype: 0, arr: [2, 2, 1, 0] }, // 43
            { mtype: 0, arr: [2, 2, 1, 1] }, // 44
            { mtype: 1, arr: [1, 3, 3, 0] }, // 45
            { mtype: 3, arr: [3, 1, 2, 3] }, // 46
            { mtype: 3, arr: [3, 3, 0, 2] }, // 47
            { mtype: 2, arr: [2, 2, 1, 0] }, // 48

            { mtype: 0, arr: [0, 2, 0, 3] }, // 49
            { mtype: 1, arr: [0, 2, 1, 0] }, // 50
            { mtype: 3, arr: [1, 2, 0, 0] }, // 51
            { mtype: 2, arr: [3, 1, 0, 0] }  // 52
        ];
        constructor() {
            this.cards = new Array<MicrobeCard>();
            this.deck = new Array<number>();

            for (var i: number = 0; i < Game.all_cards.length; i++) {
                this.cards.push(new MicrobeCard(Game.all_cards[i].mtype, Game.all_cards[i].arr));
                this.deck.push(i);
            }
            this.shuffle(this.deck);
            this.table = new Table();
            for (var i: number = 0; i < 3; i++) {
                for (var k: number = 0; k < 3; k++) {
                    this.table.set_cell(i, k, this.cards[this.deck.pop()]);
                }
            }
            this.player = new Player("bratislav", "none");
            for (var i: number = 0; i < 3; i++) {
                this.player.add_card(i, this.cards[this.deck.pop()]);
            }

        }
        shuffle(a: Array<any>) {
            var j: number, i: number;
            var x: any;
            for (i = a.length; i; i -= 1) {
                j = Math.floor(Math.random() * i);
                x = a[i - 1];
                a[i - 1] = a[j];
                a[j] = x;
            }
        }

        microbes(which: number) {
            return this.cards[which];
        }
    }
    export class MicrobeCard {
        static colors: Array<String> = ["white", "navy", "gold", "red"];
        static microbeImages: Array<String> = ["blue.png", "red.png", "yellow.png", "green.png"];
        constructor(public mtype: number, public dots: Array<number>, public pos: number = 1) {
        }
        color(which: number): String {
            return MicrobeCard.colors[this.dots[which]];
        }
        rotate(clockwise: boolean) {
            if (clockwise) {
                this.dots = [this.dots[1], this.dots[2], this.dots[3], this.dots[0]];
            } else {
                this.dots = [this.dots[3], this.dots[0], this.dots[1], this.dots[2]];
            }
        }
        image() {
            return MicrobeCard.microbeImages[this.mtype];
        }
    }
}

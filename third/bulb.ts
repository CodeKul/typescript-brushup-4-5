export interface Bulb {
    watt: number;
    glow(): void;
}
export class Room implements Bulb {
    watt: number = 40;
    glow(): void {
        console.log(`room is glowing with ${this.watt}s`);
    }
}

let room: Room = new Room();
room.glow()

let roomOne: Room = {
    watt: 40,
    glow() {

    }
}

let jsObj = {
    watt: 40,
    glow() {

    }
}

roomOne = jsObj;
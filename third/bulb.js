"use strict";
exports.__esModule = true;
var Room = (function () {
    function Room() {
        this.watt = 40;
    }
    Room.prototype.glow = function () {
        console.log("room is glowing with " + this.watt + "s");
    };
    return Room;
}());
exports.Room = Room;
var room = new Room();
room.glow();
var roomOne = {
    watt: 40,
    glow: function () {
    }
};
var jsObj = {
    and: 40,
    fn: function () {
    },
    fn2: function () {
    }
};
roomOne = jsObj;

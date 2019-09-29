"use strict";

function startGame() {

  this.lives = 0;
  var that = this;
  this.addLives = function () {
    var _this = this;

    this.oneUp = setTimeout(function () {
      console.log(++_this.lives);
    }, 1000);
  };
}

var mario = new startGame();
mario.addLives();
function startGame(){

  this.lives = 0;
  var that = this;
  this.addLives = function(){

  this.oneUp=setTimeout(()=>
                          {
                            console.log(++this.lives);
                          },1000);
      }
}

var mario = new startGame();
mario.addLives();

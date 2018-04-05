
// Place all enemy objects in an array called allEnemies
var allEnemies = [ ];

// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
		this.locX = x;
		this.locY = y;
		this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
		//push enemy to allEnemies array
		allEnemies.push(this);
};
Enemy.prototype.checkCollisions = function() {
	for (let i = 0; i < allEnemies.length; i++) {
		if ((allEnemies[i].locX === player.locX) || (allEnemies[i].locY = player.locY)) {
			return console.log('game over');
		} else {
			console.log('still alive');
		}
	}; //end forloop
} // end checkCollisions
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
// You should multiply any movement by the dt parameter
 	this.locX *= dt;
	this.locY *= dt;
		// which will ensure the game runs at the same speed for
    // all computers.
		//check if encountered enemy
     Enemy.prototype.checkCollisions();
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';
		this.locX = 2;
		this.locY = 0;
		// Variables applied to each of our instances go here,
		// we've provided one for you to get started

};

// Update the player's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function(dt) {
    //var locX = 2;
	 // var locY = 0;
		// You should multiply any movement by the dt parameter
		//this.locX = (this.locX + ***input*** ) * dt);
		//this.locY = (this.locY + ***input*** ) * dt);

		// which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


Player.prototype.handleInput = function(e) {
	if (e === 37) {
   //move left
   return this.locX -= 1;
 } else if (e === 38) {
   //move up
   return this.locY += 1;
 } else if (e === 39) {
   //move right
   return this.locX += 1;
 } else if (e === 40) {
   //move down
   return this.locY -= 1;
  } else {
   //don't move;
   return;
   }
};


// Now instantiate your objects.
//enemy (x, y, speed)
var enemy1 = new Enemy (1, 1, 3);
var enemy2 = new Enemy (2, 1, 5);
var enemy3 = new Enemy (3, 1, 2);
var enemy4 = new Enemy (4, 2, 4);
// Place the player object in a variable called player
var player = new Player ();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

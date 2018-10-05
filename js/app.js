// Hero class
    // Constructor
        // Properties
            // x position
            // y position
            // Sprite image
        // Methods
            // Update position
                // Check collision here
                    // Did player x and y collide with enemy?
                // Check win here?
                    // Did player x and y reach final tile?
            // Render
                // Draw player sprite on current x and y coordinate position.
            // Handle keyboard input
                // Update player's x and y property according to input
            // Reset Hero
                // Set x and y to starting x and y position

class Hero {
    constructor(){
        this.sprite = 'images/char-boy.png'; 
        this.step = 101;
        this.jump = 83; 
        this.startX = this.step * 2;
        this.startY = (this.jump * 4) + 55; 
        this.x = this.startX; 
        this.y = this.startY; 
        this.victory = false;
    }

    update(){
        // Check collision here
        for(let enemy of allEnemies){
            // Did player x and y collide with enemy?
            if(this.y === enemy.y && (enemy.x + enemy.step/2 > this.x && 
        enemy.x < this.x + this.step/2)){
                this.reset();
            }
        }
        // Check win here?
            // Did player x and y reach final tile?
        if(this.y == 55){
            this.victory = true; // we change this property to equal “true” when our hero object reaches the river.
        }
    }

    // Render method: Draw hero sprite on current x and y coord position
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    /*
        ctx is our 2-Dimensional canvas object with a few arguments.
        The first argument is a get method of the Resources object, this'll return a cached image of our sprite.
        The last two arguments call for the current property values of the x & y coord.
    */
    handleInput(input){
        switch(input){ 
        //We check the value of the player's input and match it to the correct direction
            case 'left':
                if(this.x > 0) {
                    this.x -= this.step;
                }
                // Checks if the hero's x property is greater than 0 (left side of the canvas)
                break;
            case 'up':
                if (this.y > this.jump) {
                    this.y -= this.jump;
                }
                /*
                    Checks if the hero's y property is greater than the jump property.
                    NOTE: We would set this at 0, but then the hero would be going into the water. We don't want this.
                    Instead we compare it with the jump property so as to pad it by 1 block.
                */
                break;
            case 'right':
                if (this.x < this.step * 4) {
                    this.x += this.step;
                }
                /*
                    Checks if the hero's x property is less than the step property (101) * 4 = 404, which represents four blocks.
                    NOTE: left most block or the first block starts at 0, the next block at 1, and so on. 
                    Therefore, 4 steps would put us at the right side of the canvas. 
                */
                break;
            case 'down':
                if (this.y < this.jump * 4){
                    this.y += this.jump;
                }
                /*Similar to the how we did with the right side.
                    Checks if the hero's y property is less than the jump property (83) * 4 = 332, which represents four blocks.
                    NOTE: To be honest, we would need 5 jumps, since the height is 1 block higher than the width, but we added 20px 
                    of padding earlier, it throws off the final conditional check. So we use 4 blocks to reach the boundary.
                */
                break;
        }
    }
    // Reset Hero
    reset(){
        // Set x and y to starting x and y positions
        this.x = this.startX;
        this.y = this.startY;
    }
}

// Enemies our player must avoid
var Enemy = function(x,y, speed) {
    this.x = x; 
    // property for the x-axis position of the enemies, set to x.

    this.y = y + 55; 
    // property for the y-axis position of the enemies, set to y + 55.

    this.speed = speed;
    // speed property for the pace of our enemies as that move along the game board.

    this.sprite = 'images/enemy-bug.png'; 
    // sprite property for our enemies, this uses a helper we've provided to easily load images.

    this.step = 101;
    // step property set at 101 (width of each block).

    this.boundary = this.step * 5;
    // boundary property is set at 505px on the game board, which is off screen by 1 title.

    this.resetPosition = -this.step;
    // resetPosition property is set -1 step or one block off screen.
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    if (this.x < this.boundary) { // If-stament that checks if the enemy isn’t pass the boundary
        // Move forward
        // Increment x by speed * dt.
        this.x += this.speed * dt; 
        //multiplying by dt will give the enemy a constant speed across the gameboard
    }
    else {
        // Reset position to the starting position along the x-axis. helps give it the looping effect.
        this.x = this.resetPosition;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

/*OBJECTS & ARRAY*/
const player = new Hero(); 
// player is a constant variable, set to a new object called Hero.

const bug1 = new Enemy(-101, 0, 200);
const bug2 = new Enemy(-101, 83, 300); 
const bug3 = new Enemy((-101*2.5), 83, 300);
// bugs 1-3 are constant variables set to new Enemy objects
// with unique values for the x, y paramaters
// and values for the speed paramater.

const allEnemies = [];
// allEnemies is an array that stores all our enemies

allEnemies.push(bug1,bug2,bug3); 
// push bug1, bug2, and bug3 into the array, allEnemies.
console.log(allEnemies);

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

// New Hero Object
// Initialize allEnemies array
// For each enemy, create and push new Enemy object into above array.
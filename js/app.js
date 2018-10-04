class Hero {
    constructor() {
        this.sprite = 'images/char-boy.png';
        // The image/sprite for our hero, this uses a helper we've provided to easily load images

        this.step = 101;
        // step property will be the distance from one block to another along the x-axis (101 is the width of each block)

        this.jump = 83;
        // block property will be the distance from one block to another along the y-axis (83 is the height of each block)

        this.startX = this.step * 2;
        // this property places the hero at the middle block on the x-axis

        this.startY = (this.jump * 5) - 20;
        // this property places the hero 5 blocks down from the top row, we subtract by 20 to fix its position.

        this.x = this.startX;
        //this property references the starting position on the x-axis

        this.y = this.startY;
        //this property references the starting position on the y-axis
    }

    // Render method: Draw hero sprite on current x and y coord position
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    /*
        ctx is our 2-Dimensional canvas object with a few arguments.
        The first argument is a get method of the Resources object, this'll return a cached image of our sprite.
        The last two arguments call for the current property values of the x & y coord.
    */
    handleInput(input) {
        switch (input) {
            //We check the value of the player's input and match it to the correct direction
            case 'left':
                if (this.x > 0) {
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
                if (this.y < this.jump * 4) {
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
}

// Enemies our player must avoid
var Enemy = function() {
    this.x = 0; 
    this.y = 0;
    this.sprite = 'images/enemy-bug.png'; 
    this.step = 101;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // If enemy is not passed boundary
    if(this.x < this.step * 4) {
        // Move forward
        // Increment x by speed * dt.
        this.x += 20 * dt;
    }
    else{
        // Reset position to start
        this.x = 0;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const player = new Hero() // player is a constant variable, set to a new object called Hero.
const bug1 = new Enemy(); // bug1 is a constant variable, set to a new object called Enemy.
const allEnemies = []; // allEnemies is an array that stores all our enemies
allEnemies.push(bug1); // push bug1 into the array, allEnemies.

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
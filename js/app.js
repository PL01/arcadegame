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
        // property value is set to the path/link for the char-boy image
        
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
}

//player is a constant variable, set to a new object.
const player = new Hero();

// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // x position (I added this in)
    // y position (I added this in)

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // I added this in
    // If enemy is not passed boundary
    // Move forward
    // Increment x by speed * dt
    // Else
    // Reset position to start
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
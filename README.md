# Classic Arcade Game
===============================
## Table Of Contents

* [Functionality](#functionality)
* [Gameplay](#gameplay)
* [Author's Notes](#notes)
* [Conclusion](#conclusion)
* [Dependencies](#dependencies)

## Functionality
The project provides a starter code with a css folder, images folder, js folder, an index.html file, and a readme.md.

There are three js files: 
* app.js; which is where we define the objects. Application of the game engine's functions. We spend most of our time here.
* engine.js; provides the game loops functionality, draws the board, updates entities and renders enemy & player objects.
* resources.js; which handles all the image loading utilities. 

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Gameplay

Here's how you play the game. You are the hero sprite who starts on the bottom of the game board. You can move the hero with your up, down, right, and left arrow keys. You can only move within the game board. You must press the arrow keys in order to get to the river tiles/blocks at the top of the game board, but watch out! There are enemy bugs crawling from side to side on the board. They're your obstacle. Try to avoid them. If you touch the bugs, then your character is moved back to the starting position. If you avoid them and make it to the river, you win! Press the "Play Again?" button to replay the game! Good luck, hero!

## Notes

For this project, a lot of object-oriented programming was applied. First, I had to work on the hero, and that meant making a Hero constructor class, and define various properties using "this.", which is a special object that is determined by how a function is called and the "execution context".

Followed up by methods to handle the user's input, update the data where we check for collisions, which determines if the player wins or has to reset, a reset method, and a render method. 

This was followed up by manipulating the starter code for enemy that had to follow "similar" rules as the hero class, though it was mostly down to its functionality of moving across the screen in loops, the speed of the enemies, and colliding with the hero. 

The toughest element was the Update section, and that's because this is where I had to check for collisions and determine how the player win's in code, and this meant editing the engine, so as to make sure the modal pops up and tells us if we won.

##Conclusion
This project proved to be tougher than the last one. I never made a game like this before with moving objects and having functions where touching entities bring a result. It was tricky, and I had to use tutorials to grasp some major elements, but a fun experience, and I'm proud to say I made an arcade video game, and its based on one of my favorites. 

## Dependencies
* Use of Google Fonts "Press Start 2P" font for the modal's text.
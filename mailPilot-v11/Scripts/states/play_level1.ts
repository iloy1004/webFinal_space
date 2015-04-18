﻿/// <reference path="../objects/button.ts" />
/// <reference path="../objects/level1/plane.ts" />


/// <reference path="../objects/label.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/level1/island.ts" />


/// <reference path="../objects/level1/plane.ts" />

/// <reference path="../objects/level1/scoreboard.ts" />


/// <reference path="../objects/boss.ts" />
/// <reference path="../objects/superbullet.ts" />

/// <reference path="../managers/asset.ts" />
/// <reference path="../managers/collision.ts" />


module states {
    export function playState() {
        //bullet.update();
        ocean.update();
        //island.update();

        plane.update();


        for (var count = constants.PLANET_NUM; count >= 0; count--) {
            planets[count].update();
        }

        for (var i = constants.ITEM_NUM; i >= 0; i--) {
            items[i].update();
        }




        collision.update();
        scoreboard.update();

        if (scoreboard.gas <= 0) {



            stage.removeChild(game);
            plane.destroy();

            game.removeAllChildren();
            game.removeAllEventListeners();

            var gameoverEff = createjs.Sound.play('game-over', createjs.Sound.INTERRUPT_NONE, 0, 0, 0, 1, 0);

            constants.CURRENT_SCORE = scoreboard.score;
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }

        if (scoreboard.score > constants.POINT_SCORE) {

            stage.removeChild(game);

            for (var count = constants.PLANET_NUM; count >= 0; count--) {
                planets[count].destroy();
            }

            constants.CURRENT_SCORE = scoreboard.score;
            constants.CURRENT_PLANE_GAS = constants.PLANE_GAS;
            constants.CURRENT_BULLETS = constants.BULLET_COUNT;
            constants.CURRENT_PLANE_LIVES = constants.PLANE_LIVES;

            plane.engineSound.stop();

            currentState = constants.MENU_LEVEL2_STATE;
            changeState(currentState);
        }

   
    }


    // play state Function
    export function play(): void {

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game);
        //island = new objects.Island(stage, game, currentState);
        plane = new objects.Plane(stage, game);

        // Show Cursor
        stage.cursor = "default";

        // Create multiple clouds
        for (var count = constants.PLANET_NUM; count >= 0; count--) {
            planets[count] = new objects.Planets(stage, game);
        }

        // Create multiple clouds
        for (var i = constants.ITEM_NUM; i >= 0; i--) {
            items[i] = new objects.Island(stage, game);
        }

        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);


        // Instantiate Collision Manager
        collision = new managers.Collision(plane, planets, scoreboard,items, currentState);

        stage.addChild(game);
    }


}
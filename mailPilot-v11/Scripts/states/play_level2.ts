/// <reference path="../objects/button.ts" />
/// <reference path="../objects/level2/planets.ts" />

/// <reference path="../objects/label.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/level2/island.ts" />

/// <reference path="../objects/level2/plane.ts" />


/// <reference path="../objects/level2/bullet_l2.ts" />
/// <reference path="../objects/level2/scoreboard.ts" />


/// <reference path="../objects/boss.ts" />
/// <reference path="../objects/superbullet.ts" />

/// <reference path="../managers/asset.ts" />
/// <reference path="../managers/collision.ts" />
/// <reference path="../managers/bulletcollision_l2.ts" />

module states {
    export function play2State() {
        //bullet.update();
        ocean.update();

        plane_L2.update();


        for (var count = constants.PLANET_NUM; count >= 0; count--) {
            planets[count].update();
        }

        for (var i = constants.ITEM_NUM; i >= 0; i--) {
            items[i].update();
        }

        collision_L2.update();
        scoreBoard_L2.update();


        if (scoreBoard_L2.lives <= 0) {
            stage.removeChild(game);
            plane_L2.destroy();

            game.removeAllChildren();
            game.removeAllEventListeners();

            var gameoverEff = createjs.Sound.play('game-over', createjs.Sound.INTERRUPT_NONE, 0, 0, 0, 1, 0);

            constants.CURRENT_SCORE = scoreBoard_L2.score;
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }

        if (scoreBoard_L2.score > constants.POINT_SCORE+1000) {

            stage.removeChild(game);

            for (var count = constants.PLANET_NUM; count >= 0; count--) {
                planets[count].destroy();
            }

            constants.CURRENT_SCORE = scoreboard.score;
            constants.CURRENT_PLANE_GAS = scoreboard.gas;

            scoreBoard_L2.bullets = constants.CURRENT_BULLETS;

            plane_L2.engineSound.stop();

            currentState = constants.MENU_LEVEL3_STATE;
            changeState(currentState);
        }

        if (constants.IS_BULLET) {
            bullet.update();
            bulletCollision_L2.update();
        }

    }


   export function shoot(): void {
        if (!constants.IS_BULLET) {

            // Create multiple bullets
            bullet = new objects.Bullet(stage, game, plane_L2, "bullet_L2");

            // Instantiate Collision Manager
            bulletCollision_L2 = new managers.bulletCollision_L2(planets, scoreBoard_L2, bullet);
            constants.IS_BULLET = true;
            constants.CURRENT_BULLETS -= 1;
        }
    }

    // play state Function
    export function play2(): void {

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game);
        //island = new objects.Island(stage, game, currentState);
        plane_L2 = new objects.Plane_L2(stage, game);
        plane_L2.image.addEventListener("click", shoot);

        // Show Cursor
        stage.cursor = "default";

        // Create multiple clouds
        for (var count = constants.PLANET_NUM; count >= 0; count--) {
            planets[count] = new objects.Planets_L2(stage, game);
        }

        // Create multiple clouds
        for (var i = constants.ITEM_NUM; i >= 0; i--) {
            items[i] = new objects.Island_L2(stage, game);
        }

        // Display Scoreboard
        scoreBoard_L2 = new objects.Scoreboard_L2(stage, game);


        // Instantiate Collision Manager
        collision_L2 = new managers.Collision_L2(plane_L2, planets, scoreBoard_L2, items);

        stage.addChild(game);
    }


}
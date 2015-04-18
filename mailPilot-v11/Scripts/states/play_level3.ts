/// <reference path="../objects/button.ts" />
/// <reference path="../objects/level3/planets.ts" />

/// <reference path="../objects/label.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/level3/island.ts" />

/// <reference path="../objects/level3/plane.ts" />

/// <reference path="../objects/level3/bullet_l3.ts" />

/// <reference path="../objects/level3/scoreboard.ts" />



/// <reference path="../objects/boss.ts" />
/// <reference path="../objects/superbullet.ts" />

/// <reference path="../managers/asset.ts" />
/// <reference path="../managers/collision.ts" />

/// <reference path="../managers/bulletcollision_l3.ts" />
/// <reference path="../managers/bosscollision.ts" />
/// <reference path="../managers/bulletbosscollision.ts" />

module states {
    export function play3State() {
        //bullet.update();
        ocean.update();
        plane_L3.update();


        for (var count = constants.PLANET_NUM; count >= 0; count--) {
            planets[count].update();
        }

        for (var i = constants.ITEM_NUM; i >= 0; i--) {
            items[i].update();
        }

        collision_L3.update();
        scoreBoard_L3.update();


        if (scoreBoard_L3.lives <= 0) {
                stage.removeChild(game);
                plane_L3.destroy();

                game.removeAllChildren();
                game.removeAllEventListeners();

                var gameoverEff = createjs.Sound.play('game-over', createjs.Sound.INTERRUPT_NONE, 0, 0, 0, 1, 0);

                constants.CURRENT_SCORE = scoreboard.score;
                currentState = constants.GAME_OVER_STATE;
                changeState(currentState);
            }

        if (scoreBoard_L3.score > constants.POINT_SCORE + 1500) {

            stage.removeChild(game);

            for (var count = constants.PLANET_NUM; count >= 0; count--) {
                planets[count].destroy();
            }

            constants.CURRENT_SCORE = scoreBoard_L2.score;
            constants.CURRENT_PLANE_GAS = constants.PLANE_GAS;
            constants.CURRENT_BULLETS = constants.BULLET_COUNT;
            constants.CURRENT_PLANE_LIVES = constants.PLANE_LIVES;
            constants.CURRENT_BOSS_HP = constants.BOSS_HP;

            //plane_L2.engineSound.stop();

            currentState = constants.PLAY_BOSS;
            changeState(currentState);
        }


        if (constants.IS_BULLET) {
            bullet.update();
            bulletColletion_L3.update();
        }
    }

    function shoot() {
        if (!constants.IS_BULLET) {

            // Create multiple bullets
            bullet = new objects.Bullet(stage, game, plane_L3, "bullet_L3");

            // Instantiate Collision Manager
            bulletColletion_L3 = new managers.bulletCollision_L3(planets, scoreBoard_L3, bullet);
            constants.IS_BULLET = true;
        }
    }

    // play state Function
    export function play3(): void {

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game);
        //island = new objects.Island(stage, game, currentState);
        plane_L3 = new objects.Plane_L3(stage, game);
        plane_L3.image.addEventListener("click", shoot);

        // Show Cursor
        stage.cursor = "default";

        // Create multiple clouds
        for (var count = constants.PLANET_NUM; count >= 0; count--) {
            planets[count] = new objects.Planets_L3(stage, game);
        }

        // Create multiple clouds
        for (var i = constants.ITEM_NUM; i >= 0; i--) {
            items[i] = new objects.Island_L3(stage, game);
        }

        // Display Scoreboard
        scoreBoard_L3 = new objects.Scoreboard_L3(stage, game);


        // Instantiate Collision Manager
        collision_L3 = new managers.Collision_L3(plane_L3, planets, scoreBoard_L3, items);

        stage.addChild(game);
    }


}
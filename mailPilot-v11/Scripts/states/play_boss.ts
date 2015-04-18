/// <reference path="../objects/button.ts" />
/// <reference path="../objects/level3/planets.ts" />

/// <reference path="../objects/label.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/level3/island.ts" />

/// <reference path="../objects/level3/plane.ts" />

/// <reference path="../objects/level3/bullet_l3.ts" />

/// <reference path="../objects/boss/scoreboard.ts" />



/// <reference path="../objects/boss.ts" />
/// <reference path="../objects/superbullet.ts" />

/// <reference path="../managers/asset.ts" />
/// <reference path="../managers/collision.ts" />

/// <reference path="../managers/bulletcollision_l3.ts" />
/// <reference path="../managers/bosscollision.ts" />
/// <reference path="../managers/bulletbosscollision.ts" />

module states {
    export function playBossState() {
        //bullet.update();
        ocean.update();
        plane_L3.update();
        boss.update();

        for (var count = constants.PLANET_NUM; count >= 0; count--) {
            planets[count].update();
        }

        for (var i = constants.ITEM_NUM; i >= 0; i--) {
            items[i].update();
        }

        collision_L3.update();
        scoreBoard_Boss.update();


        if (scoreBoard_Boss.lives <= 0) {
                stage.removeChild(game);
                plane_L3.destroy();

                game.removeAllChildren();
                game.removeAllEventListeners();

            var gameoverEff = createjs.Sound.play('game-over', createjs.Sound.INTERRUPT_NONE, 0, 0, 0, 1, 0);

                constants.CURRENT_SCORE = scoreboard.score;
                currentState = constants.GAME_OVER_STATE;
                changeState(currentState);
            }



        if (scoreBoard_Boss.currentBossHP <= 0) {

            stage.removeChild(game);

            for (var count = constants.PLANET_NUM; count >= 0; count--) {
                planets[count].destroy();
            }

            constants.CURRENT_SCORE = scoreBoard_L3.score;

            plane_L3.engineSound.stop();

            var winOff = createjs.Sound.play('win', createjs.Sound.INTERRUPT_NONE, 0, 0, 0, 1, 0);

            currentState = constants.WIN_STATE;
            changeState(currentState);
        }

        if (constants.IS_BULLET) {
            bullet.update();
            bulletColletion_L3.update();
            bulletBossCollision.update();
        }
    }

    function shoot() {
        if (!constants.IS_BULLET) {

            // Create multiple bullets
            bullet = new objects.Bullet(stage, game, plane_L3, "bullet_L3");

            // Instantiate Collision Manager
            bulletColletion_L3 = new managers.bulletCollision_L3(planets, scoreBoard_Boss, bullet);
            
            bulletBossCollision = new managers.bulletBossCollision(boss, scoreBoard_Boss, bullet);

            constants.IS_BULLET = true;
        }
    }

    // play state Function
    export function playBoss(): void {

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game);
        //island = new objects.Island(stage, game, currentState);
        plane_L3 = new objects.Plane_L3(stage, game);
        plane_L3.image.addEventListener("click", shoot);

        boss = new objects.Boss(stage, game);

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
        scoreBoard_Boss = new objects.Scoreboard_Boss(stage, game);


        // Instantiate Collision Manager
        collision_L3 = new managers.Collision_L3(plane_L3, planets, scoreBoard_L3, items);

        bossCollision = new managers.bossCollision(plane_L3, boss, scoreBoard_Boss);

        stage.addChild(game);
    }


}
/// <reference path="../objects/button.ts" />

/// <reference path="../objects/label.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/boss.ts" />
/// <reference path="../objects/poo.ts" />

/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/bossscoreboard.ts" />
/// <reference path="../objects/superbullet.ts" />

/// <reference path="../managers/asset.ts" />
/// <reference path="../managers/bosscollision.ts" />
/// <reference path="../managers/bulletbosscollision.ts" />


module states {
    export function bossState() {
        //bullet.update();
        ocean.update();

        plane.update();

        for (var count = constants.POO_NUM; count >= 0; count--) {
            poos[count].update();
        }

        bossCollision.update();
        bossScore.update();
        bossBird.update();

        if (bossScore.plane_hp <= 0) {
            stage.removeChild(game);
            plane.destroy();

            game.removeAllChildren();
            game.removeAllEventListeners();
            constants.CURRENT_SCORE = bossScore.score;

            bossBird.engineSound.stop();

            var gameoverEff = createjs.Sound.play('game-over', createjs.Sound.INTERRUPT_NONE, 0, 0, 0, 1, 0);

            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }

        if (bossScore.boss_hp <= 0) {
            stage.removeChild(game);
            plane.destroy();

            game.removeAllChildren();
            game.removeAllEventListeners();
            constants.CURRENT_SCORE = bossScore.score;

            bossBird.engineSound.stop();

            currentState = constants.WIN_STATE;
            changeState(currentState);
        }

        if (constants.IS_BULLET) {
            bullet.update();
            bulletBossCollision.update();
        }
    }

    function shoot() {

        if (!constants.IS_BULLET) {
            // Create multiple bullets
            bullet = new objects.SuperBullet(stage, game);

            // Instantiate Collision Manager
            bulletBossCollision = new managers.bulletBossCollision(bossBird, bossScore, bullet, poos);

            constants.IS_BULLET = true;
        }
    }

    // play state Function
    export function boss(): void {

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game);
        plane = new objects.Plane(stage, game);
        plane.image.addEventListener("click", shoot);
        plane.engineSound.stop();


        bossBird = new objects.Boss(stage, game);

        // Show Cursor
        stage.cursor = "default";

        // Display Scoreboard
        bossScore = new objects.BossScoreboard(stage, game);

        // Create multiple clouds
        for (var count = constants.POO_NUM; count >= 0; count--) {
            poos[count] = new objects.Poo(stage, game);
        }

        // Instantiate Collision Manager
        bossCollision = new managers.bossCollision(plane, bossBird, poos, bossScore);

        
        //game.addEventListener("click", shoot);
        stage.addChild(game);
        //stage.addEventListener("click", shoot);
    }


}
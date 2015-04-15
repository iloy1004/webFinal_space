/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/boss.ts" />
/// <reference path="../objects/poo.ts" />
/// <reference path="../objects/level3/plane.ts" />
/// <reference path="../objects/superbullet.ts" />
/// <reference path="../objects/level3/scoreboard.ts" />
/// <reference path="../managers/asset.ts" />
/// <reference path="../managers/bosscollision.ts" />
/// <reference path="../managers/bulletbosscollision.ts" />
var states;
(function (states) {
    function bossState() {
        //bullet.update();
        ocean.update();
        plane.update();
        for (var count = constants.POO_NUM; count >= 0; count--) {
            poos[count].update();
        }
        bossCollision.update();
        scoreBoard_L3.update();
        bossBird.update();
        if (scoreBoard_L3.gas <= 0) {
            stage.removeChild(game);
            plane.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            constants.CURRENT_SCORE = scoreBoard_L3.score;
            bossBird.engineSound.stop();
            var gameoverEff = createjs.Sound.play('game-over', createjs.Sound.INTERRUPT_NONE, 0, 0, 0, 1, 0);
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
        if (scoreBoard_L3.boss_hp <= 0) {
            stage.removeChild(game);
            plane.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            constants.CURRENT_SCORE = scoreBoard_L3.score;
            bossBird.engineSound.stop();
            currentState = constants.WIN_STATE;
            changeState(currentState);
        }
        if (constants.IS_BULLET) {
            bullet.update();
            bulletBossCollision.update();
        }
    }
    states.bossState = bossState;
    function shoot() {
        if (!constants.IS_BULLET) {
            // Create multiple bullets
            bullet = new objects.SuperBullet(stage, game);
            // Instantiate Collision Manager
            bulletBossCollision = new managers.bulletBossCollision(bossBird, scoreBoard_L3, bullet, poos);
            constants.IS_BULLET = true;
        }
    }
    // play state Function
    function boss() {
        // Declare new Game Container
        game = new createjs.Container();
        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game);
        plane_L3 = new objects.Plane(stage, game);
        plane_L3.image.addEventListener("click", shoot);
        plane_L3.engineSound.stop();
        bossBird = new objects.Boss(stage, game);
        // Show Cursor
        stage.cursor = "default";
        // Display Scoreboard
        scoreBoard_L3 = new objects.Scoreboard_L3(stage, game);
        for (var count = constants.POO_NUM; count >= 0; count--) {
            poos[count] = new objects.Poo(stage, game);
        }
        // Instantiate Collision Manager
        bossCollision = new managers.bossCollision(plane, bossBird, poos, scoreBoard_L3);
        //game.addEventListener("click", shoot);
        stage.addChild(game);
        //stage.addEventListener("click", shoot);
    }
    states.boss = boss;
})(states || (states = {}));
//# sourceMappingURL=bossstage.js.map
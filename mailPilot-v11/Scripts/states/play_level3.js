/// <reference path="../objects/button.ts" />
/// <reference path="../objects/level3/planets.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/level3/island.ts" />
/// <reference path="../objects/level3/plane.ts" />
/// <reference path="../objects/bullet.ts" />
/// <reference path="../objects/level3/scoreboard.ts" />
/// <reference path="../objects/bossscoreboard.ts" />
/// <reference path="../objects/boss.ts" />
/// <reference path="../objects/superbullet.ts" />
/// <reference path="../managers/asset.ts" />
/// <reference path="../managers/collision.ts" />
/// <reference path="../managers/bulletcollision.ts" />
/// <reference path="../managers/bosscollision.ts" />
var states;
(function (states) {
    function play3State() {
        //bullet.update();
        ocean.update();
        plane.update();
        for (var count = constants.PLANET_NUM; count >= 0; count--) {
            planets[count].update();
        }
        for (var i = constants.ITEM_NUM; i >= 0; i--) {
            items[i].update();
        }
        collision.update();
        scoreboard.update();
        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
            plane.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            var gameoverEff = createjs.Sound.play('game-over', createjs.Sound.INTERRUPT_NONE, 0, 0, 0, 1, 0);
            constants.CURRENT_SCORE = scoreboard.score;
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
        if (scoreboard.score > constants.POINT_SCORE + 1500) {
            stage.removeChild(game);
            for (var count = constants.PLANET_NUM; count >= 0; count--) {
                planets[count].destroy();
            }
            constants.CURRENT_SCORE = scoreboard.score;
            constants.CURRENT_PLANE_GAS = scoreboard.gas;
            plane.engineSound.stop();
            currentState = constants.WIN_STATE;
            changeState(currentState);
        }
        if (constants.IS_BULLET) {
            bullet.update();
            bulletCollision.update();
        }
    }
    states.play3State = play3State;
    function shoot() {
        if (!constants.IS_BULLET) {
            // Create multiple bullets
            bullet = new objects.Bullet(stage, game, plane, "bullet_L3");
            // Instantiate Collision Manager
            bulletCollision = new managers.bulletCollision(planets, scoreboard, bullet);
            constants.IS_BULLET = true;
        }
    }
    // play state Function
    function play3() {
        // Declare new Game Container
        game = new createjs.Container();
        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game);
        //island = new objects.Island(stage, game, currentState);
        plane = new objects.Plane_L3(stage, game);
        plane.image.addEventListener("click", shoot);
        // Show Cursor
        stage.cursor = "default";
        for (var count = constants.PLANET_NUM; count >= 0; count--) {
            planets[count] = new objects.Planets_L3(stage, game);
        }
        for (var i = constants.ITEM_NUM; i >= 0; i--) {
            items[i] = new objects.Island_L3(stage, game);
        }
        // Display Scoreboard
        scoreboard = new objects.Scoreboard_L3(stage, game);
        // Instantiate Collision Manager
        collision = new managers.Collision(plane, planets, scoreboard, items, currentState);
        stage.addChild(game);
    }
    states.play3 = play3;
})(states || (states = {}));
//# sourceMappingURL=play_level3.js.map
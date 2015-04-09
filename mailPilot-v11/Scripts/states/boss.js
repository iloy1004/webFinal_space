/// <reference path="../objects/button.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/bullet.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../managers/asset.ts" />
/// <reference path="../managers/collision.ts" />
/// <reference path="../managers/bulletcollision.ts" />
var states;
(function (states) {
    function bossState() {
        //bullet.update();
        ocean.update();
        island.update();
        plane.update();
        for (var count = constants.CLOUD_NUM; count >= 0; count--) {
            clouds[count].update();
        }
        collision.update();
        scoreboard.update();
        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
            plane.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
        if (constants.BULLET_NUM > 0) {
            for (var count = constants.BULLET_NUM; count >= 0; count--) {
                bullets[count].update();
            }
            bulletCollision.update();
        }
    }
    states.bossState = bossState;
    function shoot() {
        if (constants.BULLET_NUM < 1) {
            constants.BULLET_NUM += 1;
            for (var count = constants.BULLET_NUM; count >= 0; count--) {
                bullets[count] = new objects.Bullet(stage, game);
            }
            //bullets[constants.BULLET_NUM] = new objects.Bullet(stage, game);
            console.log(constants.BULLET_NUM);
            // Instantiate Collision Manager
            bulletCollision = new managers.bulletCollision(clouds, scoreboard, bullets);
        }
    }
    // play state Function
    function boss() {
        // Declare new Game Container
        game = new createjs.Container();
        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game);
        island = new objects.Island(stage, game);
        plane = new objects.Plane(stage, game);
        plane.image.addEventListener("click", shoot);
        // Show Cursor
        stage.cursor = "default";
        for (var count = constants.CLOUD_NUM; count >= 0; count--) {
            clouds[count] = new objects.Cloud(stage, game);
        }
        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);
        // Instantiate Collision Manager
        collision = new managers.Collision(plane, island, clouds, scoreboard);
        //game.addEventListener("click", shoot);
        stage.addChild(game);
    }
    states.boss = boss;
})(states || (states = {}));
//# sourceMappingURL=boss.js.map
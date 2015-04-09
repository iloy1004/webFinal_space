/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
var states;
(function (states) {
    function playButtonClicked(event) {
        stage.removeChild(game);
        //plane.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        constants.PLANE_LIVES = 5;
        constants.CURRENT_PLANE_HP = constants.PLANE_HP;
        constants.CURRENT_BOSS_HP = constants.BOSS_HP;
        constants.CURRENT_SCORE = 0;
        constants.engineSound.stop();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }
    states.playButtonClicked = playButtonClicked;
    function msgButtonClicked(event) {
        stage.removeChild(game);
        //plane.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        constants.engineSound.stop();
        currentState = constants.MSG_STATE;
        changeState(currentState);
    }
    states.msgButtonClicked = msgButtonClicked;
    function menuState() {
        ocean.update();
        //plane.update();
    }
    states.menuState = menuState;
    function menu() {
        var gameNameLabel;
        // Declare new Game Container
        game = new createjs.Container();
        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game);
        //plane = new objects.Plane(stage, game);
        // Show Cursor
        stage.cursor = "default";
        //sound create
        constants.engineSound = createjs.Sound.play('engine', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
        // Display Game Over
        gameNameLabel = new objects.Label(stage.canvas.width / 2, 60, "Adventure Time");
        game.addChild(gameNameLabel);
        // Display Play Again Button
        playButton = new objects.Button(stage.canvas.width / 2, 250, "playButton");
        game.addChild(playButton);
        playButton.addEventListener("click", playButtonClicked);
        // Display Play Again Button
        msgButton = new objects.Button(stage.canvas.width / 2, 330, "instructionsButton");
        game.addChild(msgButton);
        msgButton.addEventListener("click", msgButtonClicked);
        stage.addChild(game);
    }
    states.menu = menu;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map
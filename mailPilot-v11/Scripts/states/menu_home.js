/// <reference path="../constants.ts" />
/// <reference path="../managers/asset.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
var states;
(function (states) {
    function playButtonClicked(event) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        constants.PLANE_LIVES = 3;
        constants.CURRENT_PLANE_GAS = constants.PLANE_GAS;
        constants.CURRENT_SCORE = 0;
        currentState = constants.MENU_LEVEL1_STATE;
        changeState(currentState);
    }
    states.playButtonClicked = playButtonClicked;
    function msgButtonClicked(event) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        constants.engineSound.stop();
        currentState = constants.MSG_STATE;
        changeState(currentState);
    }
    states.msgButtonClicked = msgButtonClicked;
    function menu0State() {
        ocean.update();
        //plane.update();
    }
    states.menu0State = menu0State;
    function menu0() {
        var gameNameLabel;
        // Declare new Game Container
        game = new createjs.Container();
        board = new createjs.Container();
        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game);
        // Show Cursor
        stage.cursor = "default";
        //sound create
        constants.engineSound = createjs.Sound.play('engine', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
        // Display Game Over
        gameNameLabel = new objects.Label(stage.canvas.width / 2, 60, "Space War Z");
        game.addChild(gameNameLabel);
        var boardImg = new createjs.Sprite(managers.Assets.atlas_board, "mainBrd");
        boardImg.x = 366;
        boardImg.y = 150;
        board.addChild(boardImg);
        // Display Play Again Button
        playButton = new objects.Button(stage.canvas.width / 2 + 3, 291, "startBtn", currentState);
        board.addChild(playButton);
        playButton.addEventListener("click", playButtonClicked);
        // Display Play Again Button
        msgButton = new objects.Button(stage.canvas.width / 2 + 4, 360, "instBtn", currentState);
        board.addChild(msgButton);
        msgButton.addEventListener("click", msgButtonClicked);
        game.addChild(board);
        stage.addChild(game);
    }
    states.menu0 = menu0;
})(states || (states = {}));
//# sourceMappingURL=menu_home.js.map
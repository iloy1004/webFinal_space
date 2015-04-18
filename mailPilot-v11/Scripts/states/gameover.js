/// <reference path="../constants.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/ocean.ts" />
var states;
(function (states) {
    // Restart Game when Try Again Button is clicked
    function tryAgainClicked(event) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        constants.CURRENT_PLANE_LIVES = constants.PLANE_LIVES;
        constants.CURRENT_PLANE_GAS = constants.PLANE_GAS;
        constants.CURRENT_SCORE = 0;
        constants.engineSound.stop();
        currentState = constants.MENU_LEVEL1_STATE;
        changeState(currentState);
    }
    states.tryAgainClicked = tryAgainClicked;
    function gameOverState() {
        ocean.update();
    }
    states.gameOverState = gameOverState;
    // Game Over Scene
    function gameOver() {
        var gameOverLabel;
        // Declare new Game Container
        game = new createjs.Container();
        board = new createjs.Container();
        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game);
        //sound create
        constants.engineSound = createjs.Sound.play('lose', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
        // Show Cursor
        //stage.cursor = "default";
        var boardImg = new createjs.Sprite(managers.Assets.atlas_board, "OverBrd");
        boardImg.x = 366;
        boardImg.y = 150;
        board.addChild(boardImg);
        // Display Try Again Button
        tryAgain = new objects.Button(496, 406, "againBtn", currentState);
        board.addChild(tryAgain);
        tryAgain.addEventListener("click", tryAgainClicked);
        // Display Try Again Button
        backButton = new objects.Button(720, 407, "exitBtn", currentState);
        board.addChild(backButton);
        backButton.addEventListener("click", states.exitButtonClicked);
        game.addChild(board);
        stage.addChild(game);
    }
    states.gameOver = gameOver;
})(states || (states = {}));
//# sourceMappingURL=gameover.js.map
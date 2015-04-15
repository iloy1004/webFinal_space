/// <reference path="../constants.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/ocean.ts" />
var states;
(function (states) {
    function gameOverState() {
        ocean.update();
    }
    states.gameOverState = gameOverState;
    // Restart Game when Try Again Button is clicked
    function tryAgainClicked(event) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        constants.PLANE_LIVES = 5;
        constants.CURRENT_PLANE_GAS = constants.PLANE_GAS;
        constants.CURRENT_BOSS_HP = constants.BOSS_HP;
        constants.CURRENT_SCORE = 0;
        constants.engineSound.stop();
        currentState = constants.MENU_LEVEL1_STATE;
        changeState(currentState);
        constants.engineSound.stop();
    }
    states.tryAgainClicked = tryAgainClicked;
    // Game Over Scene
    function gameOver() {
        var gameOverLabel;
        var finalScoreLabel;
        var finalScore;
        // Declare new Game Container
        game = new createjs.Container();
        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game);
        //sound create
        constants.engineSound = createjs.Sound.play('lose', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
        // Show Cursor
        stage.cursor = "default";
        // Display Game Over
        gameOverLabel = new objects.Label(stage.canvas.width / 2, 40, "GAME OVER");
        game.addChild(gameOverLabel);
        // Display Final Score Label
        finalScoreLabel = new objects.Label(stage.canvas.width / 2, 120, "FINAL SCORE");
        game.addChild(finalScoreLabel);
        // Display Final Score
        finalScore = new objects.Label(stage.canvas.width / 2, 160, constants.CURRENT_SCORE + "");
        game.addChild(finalScore);
        // Display Try Again Button
        tryAgain = new objects.Button(stage.canvas.width / 2, 280, "tryAgainButton", currentState);
        game.addChild(tryAgain);
        tryAgain.addEventListener("click", tryAgainClicked);
        // Display Try Again Button
        backButton = new objects.Button(stage.canvas.width / 2, 360, "backButton", currentState);
        game.addChild(backButton);
        backButton.addEventListener("click", states.backClicked);
        // Display Play Again Button
        msgButton = new objects.Button(stage.canvas.width / 2, 430, "instructionsButton", currentState);
        game.addChild(msgButton);
        msgButton.addEventListener("click", states.msgButtonClicked);
        stage.addChild(game);
    }
    states.gameOver = gameOver;
})(states || (states = {}));
//# sourceMappingURL=gameover.js.map
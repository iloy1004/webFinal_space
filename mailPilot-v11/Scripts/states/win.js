/// <reference path="../constants.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/ocean.ts" />
var states;
(function (states) {
    function winState() {
        ocean.update();
    }
    states.winState = winState;
    // Game Over Scene
    function win() {
        var gameOverLabel;
        var finalScoreLabel;
        var finalScore;
        // Declare new Game Container
        game = new createjs.Container();
        board = new createjs.Container();
        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game);
        //sound create
        constants.engineSound = createjs.Sound.play('win', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
        // Show Cursor
        stage.cursor = "default";
        // Display Game Over
        gameOverLabel = new objects.Label(stage.canvas.width / 2, 40, "WIN!!");
        game.addChild(gameOverLabel);
        // Display Final Score Label
        finalScoreLabel = new objects.Label(stage.canvas.width / 2, 90, "FINAL SCORE");
        game.addChild(finalScoreLabel);
        // Display Final Score
        finalScore = new objects.Label(stage.canvas.width / 2, 130, scoreBoard_L3.score.toString());
        game.addChild(finalScore);
        var boardImg = new createjs.Sprite(managers.Assets.atlas_board, "winBrd");
        boardImg.x = 366;
        boardImg.y = 170;
        board.addChild(boardImg);
        // Display Try Again Button
        tryAgain = new objects.Button(486, 426, "homeBtn", currentState);
        board.addChild(tryAgain);
        tryAgain.addEventListener("click", states.exitButtonClicked);
        // Display Try Again Button
        backButton = new objects.Button(711, 427, "exitBtn", currentState);
        board.addChild(backButton);
        backButton.addEventListener("click", states.exitButtonClicked);
        game.addChild(board);
        stage.addChild(game);
    }
    states.win = win;
})(states || (states = {}));
//# sourceMappingURL=win.js.map
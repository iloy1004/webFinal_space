/// <reference path="../constants.ts" />
/// <reference path="../objects/button.ts" />

/// <reference path="../objects/label.ts" />
/// <reference path="../objects/ocean.ts" />


module states {
    export function winState() {
        ocean.update();
    }

      // Game Over Scene
    export function win() {
        var gameOverLabel: objects.Label;
        var finalScoreLabel: objects.Label;
        var finalScore: objects.Label;

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
        tryAgain.addEventListener("click", exitButtonClicked);

        // Display Try Again Button
        backButton = new objects.Button(711, 427, "exitBtn", currentState);
        board.addChild(backButton);
        backButton.addEventListener("click", exitButtonClicked);

        game.addChild(board);
        stage.addChild(game);

    }
}
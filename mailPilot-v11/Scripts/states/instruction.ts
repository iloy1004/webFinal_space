/// <reference path="../constants.ts" />

/// <reference path="../objects/ocean.ts" />

/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />

module states {
    
    export function instructionState() {
        ocean.update();
    }

    // Game Over Scene
    export function instruction() {

        var gameNameLabel: objects.Label;

        // Declare new Game Container
        game = new createjs.Container();
        board = new createjs.Container();

        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game);

        // Show Cursor
        //stage.cursor = "default";

        //sound create
        constants.engineSound = createjs.Sound.play('engine', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);

        gameNameLabel = new objects.Label(stage.canvas.width / 2, 60, "Space War Z");
        game.addChild(gameNameLabel);

        var boardImg = new createjs.Sprite(managers.Assets.atlas_board, "instBrd");
        boardImg.x = 366;
        boardImg.y = 150;
        board.addChild(boardImg);

        // Display Try Again Button
        backButton = new objects.Button(721, 396, "home1Btn", currentState);
        board.addChild(backButton);
        backButton.addEventListener("click", exitButtonClicked);

        game.addChild(board);
        stage.addChild(game);

    }
}
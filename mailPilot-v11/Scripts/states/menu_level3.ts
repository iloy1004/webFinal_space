/// <reference path="../constants.ts" />

/// <reference path="../objects/level3/scoreboard.ts" />

/// <reference path="../objects/ocean.ts" />

/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
module states {
    export function play3ButtonClicked(event: MouseEvent) {
        stage.removeChild(game);
        //plane.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        constants.CURRENT_PLANE_LIVES = constants.PLANE_LIVES;
        constants.CURRENT_PLANE_GAS = constants.PLANE_GAS;
        constants.CURRENT_BOSS_HP = constants.BOSS_HP;
        constants.engineSound.stop();
        currentState = constants.PLAY_LEVEL3_STATE;
        changeState(currentState);
    }

    export function menu3State() {
        ocean.update();
        //plane.update();
    }

    

    export function menu3() {
        var gameNameLabel: objects.Label;

        // Declare new Game Container
        game = new createjs.Container();
        board = new createjs.Container();

        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game);
        //plane = new objects.Plane(stage, game);

        // Show Cursor
        stage.cursor = "default";

        //sound create
        constants.engineSound = createjs.Sound.play('engine', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);

        // Display Game Over
        gameNameLabel = new objects.Label(stage.canvas.width / 2, 60, "Space War Z");
        game.addChild(gameNameLabel);

        var boardImg = new createjs.Sprite(managers.Assets.atlas_level3, "board");
        boardImg.x = 260;
        boardImg.y = 140;
        board.addChild(boardImg);

        // Display Play Again Button
        playButton = new objects.Button(345, 342, "playBtn", currentState);
        board.addChild(playButton);
        playButton.addEventListener("click", play3ButtonClicked);

        // Display Play Again Button
        exitButton = new objects.Button(stage.canvas.width / 2, 330, "exitBtn", currentState);
        board.addChild(msgButton);
        exitButton.addEventListener("click", exitButtonClicked);

        game.addChild(board);
        stage.addChild(game);
    }
} 
/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/planets.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
module states {
    export function play2ButtonClicked(event: MouseEvent) {
        stage.removeChild(game);
        //plane.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        constants.CURRENT_PLANE_LIVES = constants.PLANE_LIVES;
        constants.CURRENT_PLANE_GAS = constants.PLANE_GAS;
        constants.engineSound.stop();
        currentState = constants.PLAY_LEVEL2_STATE;
        changeState(currentState);
    }
        

    export function menu2State() {
        ocean.update();
        //plane.update();
    }

    

    export function menu2() {
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
        gameNameLabel = new objects.Label(stage.canvas.width / 2, 60, "Adventure Time");
        game.addChild(gameNameLabel);

        var boardImg = new createjs.Sprite(managers.Assets.atlas_level2, "board");
        boardImg.x = 260;
        boardImg.y = 140;
        board.addChild(boardImg);



        // Display Play Again Button
        playButton = new objects.Button(345, 342, "playBtn", currentState);
        //game.addChild(playButton);
        board.addChild(playButton);
        playButton.addEventListener("click", play2ButtonClicked);

        // Display Play Again Button
        exitButton = new objects.Button(stage.canvas.width / 2, 330, "exitBtn", currentState);
        //game.addChild(playButton);
        board.addChild(exitButton);
        exitButton.addEventListener("click", exitButtonClicked);

        game.addChild(board);
        stage.addChild(game);
    }
} 
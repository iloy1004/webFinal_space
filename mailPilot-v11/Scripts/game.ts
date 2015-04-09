/// <reference path="constants.ts" />
/// <reference path="managers/asset.ts" />
/// <reference path="managers/collision.ts" />
/// <reference path="managers/bulletcollision.ts" />
/// <reference path="managers/bosscollision.ts" />
/// <reference path="managers/bulletbosscollision.ts" />

/// <reference path="objects/bullet.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="objects/cloud.ts" />
/// <reference path="objects/island.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="objects/ocean.ts" />
/// <reference path="objects/plane.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="objects/boss.ts" />
/// <reference path="objects/superbullet.ts" />
/// <reference path="objects/bossscoreboard.ts" />
/// <reference path="objects/poo.ts" />


/// <reference path="states/gameover.ts" />
/// <reference path="states/menu.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/instruction.ts" />
/// <reference path="states/bossstage.ts" />
/// <reference path="states/win.ts" />

// Mail Pilot Version 11 - Added basic state machine structure - Added Button and Label classes
// Changed online repo

var canvas;
var stage: createjs.Stage;
var game: createjs.Container;

var ocean: objects.Ocean;
var plane: objects.Plane;
var island: objects.Island;
//var bullet: objects.Bullet;
var bullet: objects.Bullet;
var isBullet: boolean;
var clouds = []; // Clouds array;
var poos = []; // poo array;
var scoreboard: objects.Scoreboard;
var bossScore: objects.BossScoreboard;
var bossBird: objects.Boss;

var collision: managers.Collision;
var bossCollision: managers.bossCollision;
var bulletCollision: managers.bulletCollision;
var bulletBossCollision: managers.bulletBossCollision;

var tryAgain: objects.Button;
var playButton: objects.Button;
var msgButton: objects.Button;
var backButton: objects.Button;

var currentState: number;
var currentStateFunction;

// Preload function - Loads Assets and initializes game;
function preload(): void {
    managers.Assets.init();
    managers.Assets.loader.addEventListener("complete", init);
}

// init called after Assets have been loaded.
function init(): void {

    canvas = document.getElementById('canvas');
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(30);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    optimizeForMobile();

    currentState = constants.MENU_STATE;
    isBullet = constants.IS_BULLET;
    changeState(currentState);

   
}

// Add touch support for mobile devices
function optimizeForMobile() {
    if (createjs.Touch.isSupported()) {
        createjs.Touch.enable(stage);
    }
}

// Game Loop
function gameLoop(event): void {
    currentStateFunction();

    stage.update();
}

function changeState(state: number): void {
    // Launch Various "screens"
    switch (state) {
        case constants.MENU_STATE:
            // instantiate menu screen
            currentStateFunction = states.menuState;
            states.menu();
            break;

        case constants.PLAY_STATE:
            // instantiate play screen
            currentStateFunction = states.playState;
            states.play();
            break;

        case constants.GAME_OVER_STATE:
            currentStateFunction = states.gameOverState;
            // instantiate game over screen
            states.gameOver();
            break;

        case constants.MSG_STATE:
            currentStateFunction = states.instructionState;
            // instruction screen
            states.instruction();
            break;

        case constants.BOSS_STATE:
            currentStateFunction = states.bossState;
            // instruction screen
            states.boss();
            break;

        case constants.WIN_STATE:
            currentStateFunction = states.winState;
            // instruction screen
            states.win();
            break;
    }
}



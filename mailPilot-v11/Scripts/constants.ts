module constants {
    // State Machine Constants
    export var MENU_LEVEL1_STATE: number = 0;
    export var PLAY_LEVEL1_STATE: number = 1;
    export var MENU_LEVEL2_STATE: number = 2;
    export var PLAY_LEVEL2_STATE: number = 3;
    export var MENU_LEVEL3_STATE: number = 4;
    export var PLAY_LEVEL3_STATE: number = 5;

    export var HOME_STATE: number = 9

    export var GAME_OVER_STATE: number = 6;

    export var MSG_STATE: number = 7;

    export var WIN_STATE: number = 8;

    // Game Constants
    export var IS_BULLET: boolean = false;
    export var PLANET_NUM: number = 3;
    export var POO_NUM: number = 3;
    export var LABEL_FONT = "40px Maven Pro";
    export var LABEL_COLOUR = "#F9DCF3";

    // Current Game values
    export var PLANE_LIVES = 3;
    export var CURRENT_SCORE: number = 0;
    export var BOSS_HP: number = 1000;
    export var PLANE_HP: number = 2000;
    export var CURRENT_PLANE_HP: number = 2000;
    export var CURRENT_BOSS_HP: number = 1000;
    export var POINT_SCORE: number = 1500; //the standard score for moving to boss stage

    export var engineSound: createjs.SoundInstance;
}
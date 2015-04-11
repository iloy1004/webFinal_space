var constants;
(function (constants) {
    // State Machine Constants
    constants.MENU_LEVEL1_STATE = 0;
    constants.PLAY_LEVEL1_STATE = 1;
    constants.MENU_LEVEL2_STATE = 2;
    constants.PLAY_LEVEL2_STATE = 3;
    constants.MENU_LEVEL3_STATE = 4;
    constants.PLAY_LEVEL3_STATE = 5;
    constants.HOME_STATE = 9;
    constants.GAME_OVER_STATE = 6;
    constants.MSG_STATE = 7;
    constants.WIN_STATE = 8;
    // Game Constants
    constants.IS_BULLET = false;
    constants.PLANET_NUM = 2;
    constants.POO_NUM = 3;
    constants.LABEL_FONT = "40px Maven Pro";
    constants.LABEL_COLOUR = "#F9DCF3";
    // Current Game values
    constants.PLANE_LIVES = 3;
    constants.CURRENT_SCORE = 0;
    constants.BOSS_HP = 1000;
    constants.PLANE_GAS = 20;
    constants.CURRENT_PLANE_LIVES = 3;
    constants.CURRENT_PLANE_GAS = 20;
    constants.CURRENT_BOSS_HP = 1000;
    constants.POINT_SCORE = 1500; //the standard score for moving to boss stage
    constants.engineSound;
})(constants || (constants = {}));
//# sourceMappingURL=constants.js.map
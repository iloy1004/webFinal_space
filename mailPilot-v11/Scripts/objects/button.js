var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="../constants.ts" />
/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    var Button = (function (_super) {
        __extends(Button, _super);
        function Button(x, y, buttonIDString, currentStage) {
            switch (currentStage) {
                case constants.HOME_STATE:
                    _super.call(this, managers.Assets.atlas_board, buttonIDString);
                    break;
                case constants.MENU_LEVEL1_STATE:
                    _super.call(this, managers.Assets.atlas_level1, buttonIDString);
                    break;
                case constants.MENU_LEVEL2_STATE:
                    _super.call(this, managers.Assets.atlas_level2, buttonIDString);
                    break;
                case constants.MENU_LEVEL3_STATE:
                    _super.call(this, managers.Assets.atlas_level3, buttonIDString);
                    break;
                default:
                    _super.call(this, managers.Assets.atlas_board, buttonIDString);
                    break;
            }
            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
            this.x = x;
            this.y = y;
            this.setButtonListeners();
        }
        Button.prototype.setButtonListeners = function () {
            this.cursor = 'pointer';
            this.on('rollover', this.onButtonOver);
            this.on('rollout', this.onButtonOut);
        };
        Button.prototype.onButtonOver = function () {
            this.alpha = 0.8;
        };
        Button.prototype.onButtonOut = function () {
            this.alpha = 1;
        };
        return Button;
    })(createjs.Sprite);
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=button.js.map
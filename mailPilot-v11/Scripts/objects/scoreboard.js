/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Scoreboard Class
    var Scoreboard = (function () {
        function Scoreboard(stage, game) {
            this.labelText = "";
            this.stage = stage;
            this.game = game;
            this.gas = constants.CURRENT_PLANE_GAS;
            this.lives = constants.CURRENT_PLANE_LIVES;
            this.score = 0;
            this.label = new createjs.Text(this.labelText, constants.LABEL_FONT, constants.LABEL_COLOUR);
            // drawing hp
            this.sqaureGas = new createjs.Sprite(managers.Assets.atlas_all, "gas20");
            this.update();
            this.width = this.label.getBounds().width;
            this.height = this.label.getBounds().height;
            game.addChild(this.sqaureGas);
            game.addChild(this.label);
        }
        Scoreboard.prototype.update = function () {
            var currentHP = constants.CURRENT_PLANE_GAS;
            currentHP -= 1;
            this.labelText = "* HP:          * Score: " + this.score.toString();
            this.label.text = this.labelText;
            this.label.y = 20;
            this.drawHP(currentHP);
            constants.CURRENT_PLANE_GAS = currentHP;
        };
        Scoreboard.prototype.destroy = function () {
            game.removeChild(this.label);
        };
        Scoreboard.prototype.drawHP = function (hp) {
            game.removeChild(this.sqaureGas);
            var imgName = "gas" + hp;
            this.sqaureGas = new createjs.Sprite(managers.Assets.atlas_all, imgName);
            this.sqaureGas.x = 100;
            this.sqaureGas.y = 20;
            game.addChild(this.sqaureGas);
        };
        return Scoreboard;
    })();
    objects.Scoreboard = Scoreboard;
})(objects || (objects = {}));
//# sourceMappingURL=scoreboard.js.map
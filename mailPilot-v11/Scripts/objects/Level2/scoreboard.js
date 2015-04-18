/// <reference path="../../managers/asset.ts" />
var objects;
(function (objects) {
    // Scoreboard Class
    var Scoreboard_L2 = (function () {
        function Scoreboard_L2(stage, game) {
            this.labelText = "";
            this.stage = stage;
            this.game = game;
            this.gas = constants.CURRENT_PLANE_GAS;
            this.lives = constants.CURRENT_PLANE_LIVES;
            this.bullets = constants.CURRENT_BULLETS;
            this.score = constants.CURRENT_SCORE;
            this.label = new createjs.Text(this.labelText, constants.LABEL_FONT, constants.LABEL_COLOUR);
            this.ScoreLabel = new createjs.Text(this.labelText, constants.LABEL_FONT, constants.LABEL_COLOUR);
            this.update();
            // drawing hp
            this.sqaureGas = new createjs.Sprite(managers.Assets.atlas_all, "gas100");
            this.sqaureGas.x = 250;
            this.sqaureGas.y = 100;
            this.livesImg = new createjs.Sprite(managers.Assets.atlas_all, "lifes");
            this.livesImg.x = 330;
            this.livesImg.y = 30;
            //bullet image
            this.bulletImg = new createjs.Sprite(managers.Assets.atlas_all, "bullets_counter");
            this.bulletImg.x = 580;
            this.bulletImg.y = 5;
            this.width = this.label.getBounds().width;
            this.height = this.label.getBounds().height;
            game.addChild(this.livesImg);
            game.addChild(this.sqaureGas);
            game.addChild(this.bulletImg);
            game.addChild(this.label);
            game.addChild(this.ScoreLabel);
        }
        Scoreboard_L2.prototype.update = function () {
            this.gas = constants.CURRENT_PLANE_GAS;
            this.gas -= 0.05;
            this.bullets = constants.CURRENT_BULLETS;
            this.labelText = " Gas:          Lives  : " + this.lives.toString() + "   Bullets   : " + this.bullets.toString();
            this.label.text = this.labelText;
            this.label.y = 10;
            this.labelText = " Score: " + this.score.toString();
            this.ScoreLabel.text = this.labelText;
            this.ScoreLabel.y = 480;
            this.drawHP(Math.floor(this.gas));
            constants.CURRENT_PLANE_GAS = Math.floor(this.gas);
            if (constants.CURRENT_PLANE_GAS == 0 && constants.CURRENT_PLANE_LIVES >= 1) {
                constants.CURRENT_PLANE_LIVES -= 1;
                this.lives = constants.CURRENT_PLANE_LIVES;
                constants.CURRENT_PLANE_GAS = 100;
                this.gas = 100;
                console.log("current Lives : " + constants.CURRENT_PLANE_LIVES);
                console.log("current Gas : " + constants.CURRENT_PLANE_GAS);
            }
        };
        Scoreboard_L2.prototype.destroy = function () {
            game.removeChild(this.label);
        };
        Scoreboard_L2.prototype.drawHP = function (hp) {
            switch (hp) {
                case 100:
                    game.removeChild(this.sqaureGas);
                    this.sqaureGas = new createjs.Sprite(managers.Assets.atlas_all, "gas100");
                    this.sqaureGas.x = 100;
                    this.sqaureGas.y = 20;
                    game.addChild(this.sqaureGas);
                    break;
                case 99:
                case 98:
                case 97:
                case 96:
                case 95:
                case 94:
                    game.removeChild(this.sqaureGas);
                    this.sqaureGas = new createjs.Sprite(managers.Assets.atlas_all, "gas94");
                    this.sqaureGas.x = 100;
                    this.sqaureGas.y = 20;
                    game.addChild(this.sqaureGas);
                    break;
                case 93:
                case 92:
                case 91:
                case 90:
                case 89:
                    game.removeChild(this.sqaureGas);
                    this.sqaureGas = new createjs.Sprite(managers.Assets.atlas_all, "gas89");
                    this.sqaureGas.x = 100;
                    this.sqaureGas.y = 20;
                    game.addChild(this.sqaureGas);
                    break;
                case 88:
                case 87:
                case 86:
                case 85:
                case 84:
                    game.removeChild(this.sqaureGas);
                    this.sqaureGas = new createjs.Sprite(managers.Assets.atlas_all, "gas84");
                    this.sqaureGas.x = 100;
                    this.sqaureGas.y = 20;
                    game.addChild(this.sqaureGas);
                    break;
                case 83:
                case 82:
                case 81:
                case 80:
                case 79:
                case 78:
                    game.removeChild(this.sqaureGas);
                    this.sqaureGas = new createjs.Sprite(managers.Assets.atlas_all, "gas78");
                    this.sqaureGas.x = 100;
                    this.sqaureGas.y = 20;
                    game.addChild(this.sqaureGas);
                    break;
                case 77:
                case 76:
                case 75:
                case 74:
                case 73:
                    game.removeChild(this.sqaureGas);
                    this.sqaureGas = new createjs.Sprite(managers.Assets.atlas_all, "gas73");
                    this.sqaureGas.x = 100;
                    this.sqaureGas.y = 20;
                    game.addChild(this.sqaureGas);
                    break;
                case 72:
                case 71:
                case 70:
                case 69:
                case 68:
                    game.removeChild(this.sqaureGas);
                    this.sqaureGas = new createjs.Sprite(managers.Assets.atlas_all, "gas68");
                    this.sqaureGas.x = 100;
                    this.sqaureGas.y = 20;
                    game.addChild(this.sqaureGas);
                    break;
                case 67:
                case 66:
                case 65:
                case 64:
                case 63:
                    game.removeChild(this.sqaureGas);
                    this.sqaureGas = new createjs.Sprite(managers.Assets.atlas_all, "gas63");
                    this.sqaureGas.x = 100;
                    this.sqaureGas.y = 20;
                    game.addChild(this.sqaureGas);
                    break;
                case 62:
                case 61:
                case 60:
                case 59:
                case 58:
                case 57:
                    game.removeChild(this.sqaureGas);
                    this.sqaureGas = new createjs.Sprite(managers.Assets.atlas_all, "gas57");
                    this.sqaureGas.x = 100;
                    this.sqaureGas.y = 20;
                    game.addChild(this.sqaureGas);
                    break;
                case 56:
                case 55:
                case 54:
                case 53:
                case 52:
                    game.removeChild(this.sqaureGas);
                    this.sqaureGas = new createjs.Sprite(managers.Assets.atlas_all, "gas52");
                    this.sqaureGas.x = 100;
                    this.sqaureGas.y = 20;
                    game.addChild(this.sqaureGas);
                    break;
                case 51:
                case 50:
                case 49:
                case 48:
                case 47:
                    game.removeChild(this.sqaureGas);
                    this.sqaureGas = new createjs.Sprite(managers.Assets.atlas_all, "gas47");
                    this.sqaureGas.x = 100;
                    this.sqaureGas.y = 20;
                    game.addChild(this.sqaureGas);
                    break;
                case 46:
                case 45:
                case 44:
                case 43:
                case 42:
                    game.removeChild(this.sqaureGas);
                    this.sqaureGas = new createjs.Sprite(managers.Assets.atlas_all, "gas42");
                    this.sqaureGas.x = 100;
                    this.sqaureGas.y = 20;
                    game.addChild(this.sqaureGas);
                    break;
                case 41:
                case 40:
                case 39:
                case 38:
                case 37:
                case 36:
                    game.removeChild(this.sqaureGas);
                    this.sqaureGas = new createjs.Sprite(managers.Assets.atlas_all, "gas36");
                    this.sqaureGas.x = 100;
                    this.sqaureGas.y = 20;
                    game.addChild(this.sqaureGas);
                    break;
                case 35:
                case 34:
                case 33:
                case 32:
                case 31:
                    game.removeChild(this.sqaureGas);
                    this.sqaureGas = new createjs.Sprite(managers.Assets.atlas_all, "gas31");
                    this.sqaureGas.x = 100;
                    this.sqaureGas.y = 20;
                    game.addChild(this.sqaureGas);
                    break;
                case 30:
                case 29:
                case 28:
                case 27:
                case 26:
                    game.removeChild(this.sqaureGas);
                    this.sqaureGas = new createjs.Sprite(managers.Assets.atlas_all, "gas26");
                    this.sqaureGas.x = 100;
                    this.sqaureGas.y = 20;
                    game.addChild(this.sqaureGas);
                    break;
                case 25:
                case 24:
                case 23:
                case 22:
                case 21:
                    game.removeChild(this.sqaureGas);
                    this.sqaureGas = new createjs.Sprite(managers.Assets.atlas_all, "gas21");
                    this.sqaureGas.x = 100;
                    this.sqaureGas.y = 20;
                    game.addChild(this.sqaureGas);
                    break;
                case 20:
                case 19:
                case 18:
                case 17:
                case 16:
                case 15:
                    game.removeChild(this.sqaureGas);
                    this.sqaureGas = new createjs.Sprite(managers.Assets.atlas_all, "gas15");
                    this.sqaureGas.x = 100;
                    this.sqaureGas.y = 20;
                    game.addChild(this.sqaureGas);
                    break;
                case 14:
                case 13:
                case 12:
                case 11:
                case 10:
                    game.removeChild(this.sqaureGas);
                    this.sqaureGas = new createjs.Sprite(managers.Assets.atlas_all, "gas10");
                    this.sqaureGas.x = 100;
                    this.sqaureGas.y = 20;
                    game.addChild(this.sqaureGas);
                    break;
                case 9:
                case 8:
                case 7:
                case 6:
                case 5:
                    game.removeChild(this.sqaureGas);
                    this.sqaureGas = new createjs.Sprite(managers.Assets.atlas_all, "gas5");
                    this.sqaureGas.x = 100;
                    this.sqaureGas.y = 20;
                    game.addChild(this.sqaureGas);
                    break;
                case 4:
                case 3:
                case 2:
                case 1:
                case 0:
                    game.removeChild(this.sqaureGas);
                    this.sqaureGas = new createjs.Sprite(managers.Assets.atlas_all, "gas0");
                    this.sqaureGas.x = 100;
                    this.sqaureGas.y = 20;
                    game.addChild(this.sqaureGas);
                    break;
            }
        };
        return Scoreboard_L2;
    })();
    objects.Scoreboard_L2 = Scoreboard_L2;
})(objects || (objects = {}));
//# sourceMappingURL=scoreboard.js.map
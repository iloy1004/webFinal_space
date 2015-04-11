/*
 **************************************************************************
 * Source file name : Index.html                                          *
 * Author's name : Jihee Seo (300768856)                                  *
 * Last Modified by : Jihee Seo (300768856)                               *
 * Last Modified date : Feb 27, 2015                                      *
 * Program description : This web game, by using create js, is the slot   *
 *                       machine. User can enjoy the game to press spin   *
 *                       button, and turn off the game to press power     *
 *                       button. User can reset the game and change their *
 *                       betting price in 2 ways as basic, max betting.   *
 * Revision History : 1.4                                                 *
 * Github address : https://github.com/iloy1004/Slot-Machine.git          *
 *************************************************************************
*/
/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Cloud class
    var Boss = (function () {
        function Boss(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas_level3, "boss");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();
            game.addChild(this.image);
            this.engineSound = createjs.Sound.play('bossBGM', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
        }
        Boss.prototype.update = function () {
            this.image.y -= this.dy;
            this.image.x -= this.dx;
            if (this.image.x <= 0) {
                this.setPoint();
                this.dx = this.dx * -1;
                if (this.image.y >= this.stage.canvas.height) {
                    console.log("out of canvas bottom");
                    this.reset();
                }
                else {
                    this.dy = this.dy * -1;
                }
            }
            else if (this.image.x >= this.stage.canvas.width) {
                this.setPoint();
                this.dx = this.dx * 1;
                if (this.image.y <= 0) {
                    console.log("out of canvas top");
                    this.reset();
                }
                else {
                    this.dy = this.dy * 1;
                }
            }
            else if (this.image.y <= 0) {
                this.setPoint();
                this.dy = this.dy * -1;
                this.dx = this.dx * -1;
            }
            else if (this.image.y >= this.stage.canvas.height) {
                this.setPoint();
                this.dy = this.dy * 1;
                this.dx = this.dx * 1;
            }
        };
        Boss.prototype.reset = function () {
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.dy = Math.floor(Math.random() * -10) + Math.floor(Math.random() * 10);
            //this.dx = Math.floor(Math.random() * -3) + Math.floor(Math.random() * 3);
            this.dx = Math.floor(Math.random() * 10 + 10);
            this.image.x = this.stage.canvas.width;
        };
        Boss.prototype.setPoint = function () {
            this.dy = Math.floor(Math.random() * -10) + Math.floor(Math.random() * 10);
            //this.dx = Math.floor(Math.random() * -3) + Math.floor(Math.random() * 3);
            this.dx = Math.floor(Math.random() * 10 + 10);
        };
        Boss.prototype.destroy = function () {
            game.removeChild(this.image);
            this.engineSound.stop();
        };
        return Boss;
    })();
    objects.Boss = Boss;
})(objects || (objects = {}));
//# sourceMappingURL=boss.js.map
/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Island Class
    var SuperBullet = (function () {
        function SuperBullet(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas_all, "3shot");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.image.x = this.stage.mouseX;
            this.image.y = this.stage.mouseY;
            this.dy = 25;
            game.addChild(this.image);
            createjs.Sound.play("shot");
        }
        SuperBullet.prototype.update = function () {
            this.image.x += this.dy;
            if (this.image.x > this.stage.canvas.width) {
                this.isBullet(constants.IS_BULLET);
                game.removeChild(this.image);
            }
        };
        SuperBullet.prototype.reset = function () {
            this.isBullet(constants.IS_BULLET);
            game.removeChild(this.image);
        };
        SuperBullet.prototype.destroy = function () {
            this.isBullet(constants.IS_BULLET);
            game.removeChild(this.image);
        };
        // check whether bullet is existing in the canvas, and swtich the value true and false
        SuperBullet.prototype.isBullet = function (isB) {
            if (isB) {
                constants.IS_BULLET = false;
            }
            else {
                constants.IS_BULLET = true;
            }
        };
        return SuperBullet;
    })();
    objects.SuperBullet = SuperBullet;
})(objects || (objects = {}));
//# sourceMappingURL=superbullet.js.map
/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Island Class
    var Bullet = (function () {
        function Bullet(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "1shot");
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
        Bullet.prototype.update = function () {
            this.image.x += this.dy;
            if (this.image.x > this.stage.canvas.width) {
                this.isBullet(constants.IS_BULLET);
                game.removeChild(this.image);
            }
        };
        Bullet.prototype.reset = function () {
            this.isBullet(constants.IS_BULLET);
            game.removeChild(this.image);
        };
        Bullet.prototype.destroy = function () {
            this.isBullet(constants.IS_BULLET);
            game.removeChild(this.image);
        };
        // check whether bullet is existing in the canvas, and swtich the value true and false
        Bullet.prototype.isBullet = function (isB) {
            if (isB) {
                constants.IS_BULLET = false;
            }
            else {
                constants.IS_BULLET = true;
            }
        };
        return Bullet;
    })();
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map
/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Ocean Class
    var Ocean = (function () {
        function Ocean(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("sky"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.reset();
            this.dy = 3;
            game.addChild(this.image);
        }
        Ocean.prototype.update = function () {
            this.image.x += this.dy;
            if (this.image.x >= 0) {
                this.reset();
            }
            //this.image.y += this.dy;
            //if (this.image.y >= 0) {
            //this.reset();
            //}
        };
        Ocean.prototype.reset = function () {
            this.image.x = -1200;
            //this.image.y = -960;
        };
        Ocean.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Ocean;
    })();
    objects.Ocean = Ocean;
})(objects || (objects = {}));
//# sourceMappingURL=ocean.js.map
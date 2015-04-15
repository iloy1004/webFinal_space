/// <reference path="../../managers/asset.ts" />
var objects;
(function (objects) {
    // Cloud class
    var Planets_L2 = (function () {
        function Planets_L2(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas_level2, "planet");
            this.image2 = new createjs.Sprite(managers.Assets.atlas_level2, "planet2");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset(0);
            game.addChild(this.image);
            game.addChild(this.image2);
        }
        Planets_L2.prototype.update = function () {
            this.image.y -= this.dy;
            this.image.x -= this.dx;
            this.image2.y -= this.dy;
            this.image2.x -= this.dx;
            if (this.image.x < 0) {
                this.reset(1);
            }
            if (this.image2.x < 0) {
                this.reset(2);
            }
        };
        //divide reset 
        Planets_L2.prototype.reset = function (image) {
            switch (image) {
                case 0:
                    this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
                    this.dy = Math.floor(Math.random() * -3) + Math.floor(Math.random() * 3);
                    this.dx = Math.floor(Math.random() * 5 + 5);
                    this.image.x = this.stage.canvas.width;
                    this.image2.y = Math.floor(Math.random() * this.stage.canvas.height);
                    this.dy = Math.floor(Math.random() * -2) + Math.floor(Math.random() * 2);
                    this.dx = Math.floor(Math.random() * 4 + 4);
                    this.image2.x = this.stage.canvas.width;
                    break;
                case 1:
                    this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
                    this.dy = Math.floor(Math.random() * -3) + Math.floor(Math.random() * 3);
                    this.dx = Math.floor(Math.random() * 5 + 5);
                    this.image.x = this.stage.canvas.width;
                    break;
                case 2:
                    this.image2.y = Math.floor(Math.random() * this.stage.canvas.height);
                    this.dy = Math.floor(Math.random() * -2) + Math.floor(Math.random() * 2);
                    this.dx = Math.floor(Math.random() * 4 + 4);
                    this.image2.x = this.stage.canvas.width;
                    break;
            }
        };
        Planets_L2.prototype.destroy = function () {
            game.removeChild(this.image);
            game.removeChild(this.image2);
        };
        return Planets_L2;
    })();
    objects.Planets_L2 = Planets_L2;
})(objects || (objects = {}));
//# sourceMappingURL=planets.js.map
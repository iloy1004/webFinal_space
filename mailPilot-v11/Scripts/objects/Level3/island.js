/// <reference path="../../managers/asset.ts" />
var objects;
(function (objects) {
    // Island Class
    var Island_L3 = (function () {
        function Island_L3(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas_all, "bullet_item");
            this.image2 = new createjs.Sprite(managers.Assets.atlas_all, "gas_item");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset(0);
            this.dy = 5;
            game.addChild(this.image);
            game.addChild(this.image2);
        }
        Island_L3.prototype.update = function () {
            this.image.x -= this.dx;
            this.image.y -= this.dy;
            this.image2.x -= this.dx;
            this.image2.y -= this.dy;
            if (this.image.x < 0) {
                this.reset(1);
            }
            if (this.image2.x < 0) {
                this.reset(2);
            }
        };
        Island_L3.prototype.reset = function (image) {
            switch (image) {
                case 0:
                    this.image.x = this.stage.canvas.width;
                    this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
                    this.dy = Math.floor(Math.random() * -5) + Math.floor(Math.random() * 5);
                    this.dx = Math.floor(Math.random() * 7 + 7);
                    this.image2.x = this.stage.canvas.width;
                    this.image2.y = Math.floor(Math.random() * this.stage.canvas.height);
                    this.dy = Math.floor(Math.random() * -4) + Math.floor(Math.random() * 4);
                    this.dx = Math.floor(Math.random() * 6 + 6);
                case 1:
                    this.image.x = this.stage.canvas.width;
                    this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
                    this.dy = Math.floor(Math.random() * -5) + Math.floor(Math.random() * 5);
                    this.dx = Math.floor(Math.random() * 7 + 7);
                case 2:
                    this.image2.x = this.stage.canvas.width;
                    this.image2.y = Math.floor(Math.random() * this.stage.canvas.height);
                    this.dy = Math.floor(Math.random() * -4) + Math.floor(Math.random() * 4);
                    this.dx = Math.floor(Math.random() * 6 + 6);
            }
        };
        Island_L3.prototype.destroy = function () {
            game.removeChild(this.image);
            game.removeChild(this.image2);
        };
        return Island_L3;
    })();
    objects.Island_L3 = Island_L3;
})(objects || (objects = {}));
//# sourceMappingURL=island.js.map
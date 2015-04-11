/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Cloud class
    var Planets = (function () {
        function Planets(stage, game, currentStage) {
            this.stage = stage;
            this.game = game;
            switch (currentStage) {
                case constants.PLAY_LEVEL1_STATE:
                    this.image = new createjs.Sprite(managers.Assets.atlas_level1, "stone");
                    this.image2 = new createjs.Sprite(managers.Assets.atlas_level1, "star");
                    break;
                case constants.PLAY_LEVEL2_STATE:
                    this.image = new createjs.Sprite(managers.Assets.atlas_level2, "planet");
                    this.image2 = new createjs.Sprite(managers.Assets.atlas_level2, "planet2");
                    break;
            }
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset(0);
            game.addChild(this.image);
            game.addChild(this.image2);
        }
        Planets.prototype.update = function () {
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
        Planets.prototype.reset = function (image) {
            switch (image) {
                case 0:
                    this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
                    this.dy = Math.floor(Math.random() * -5) + Math.floor(Math.random() * 5);
                    this.dx = Math.floor(Math.random() * 7 + 7);
                    this.image.x = this.stage.canvas.width;
                    this.image2.y = Math.floor(Math.random() * this.stage.canvas.height);
                    this.dy = Math.floor(Math.random() * -4) + Math.floor(Math.random() * 4);
                    this.dx = Math.floor(Math.random() * 6 + 6);
                    this.image2.x = this.stage.canvas.width;
                    break;
                case 1:
                    this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
                    this.dy = Math.floor(Math.random() * -5) + Math.floor(Math.random() * 5);
                    this.dx = Math.floor(Math.random() * 7 + 7);
                    this.image.x = this.stage.canvas.width;
                    break;
                case 2:
                    this.image2.y = Math.floor(Math.random() * this.stage.canvas.height);
                    this.dy = Math.floor(Math.random() * -4) + Math.floor(Math.random() * 4);
                    this.dx = Math.floor(Math.random() * 6 + 6);
                    this.image2.x = this.stage.canvas.width;
                    break;
            }
        };
        Planets.prototype.destroy = function () {
            game.removeChild(this.image);
            game.removeChild(this.image2);
        };
        return Planets;
    })();
    objects.Planets = Planets;
})(objects || (objects = {}));
//# sourceMappingURL=planets.js.map
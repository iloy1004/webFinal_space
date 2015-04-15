/// <reference path="../../managers/asset.ts" />
/// <reference path="../../controls.ts" />
/// <reference path="../../keys.ts" />
var objects;
(function (objects) {
    // Plane Class
    var Plane_L3 = (function () {
        function Plane_L3(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas_level3, "ship");
            //this.image.x = 100;
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            game.addChild(this.image);
            this.engineSound = createjs.Sound.play('playBGM', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
            // Set up movement and controls
            this.assignControls();
        }
        Plane_L3.prototype.assignControls = function () {
            // Binds key actions
            window.onkeydown = this.onControlDown;
            window.onkeyup = this.onControlUp;
        };
        Plane_L3.prototype.onControlDown = function (e) {
            switch (e.which) {
                case keys.LEFT:
                case keys.A:
                    controls.left = true;
                    controls.lTally++;
                    controls.rTally = 0;
                    break;
                case keys.RIGHT:
                case keys.D:
                    controls.right = true;
                    controls.rTally++;
                    controls.lTally = 0;
                    break;
                case keys.SPACEBAR:
                case keys.SHIFT:
                    states.shoot();
                    break;
                case keys.W:
                case keys.UP:
                    controls.up = true;
                    break;
                case keys.S:
                case keys.DOWN:
                    controls.down = true;
                    break;
                case keys.Z:
                    constants.CURRENT_PLANE_GAS = 20000;
                    constants.CURRENT_PLANE_LIVES = 1000;
                    constants.CURRENT_BULLETS = 1000;
                    break;
            }
        };
        Plane_L3.prototype.onControlUp = function (e) {
            switch (e.which) {
                case keys.LEFT:
                case keys.A:
                    controls.left = false;
                    break;
                case keys.RIGHT:
                case keys.D:
                    controls.right = false;
                    break;
                case keys.SPACEBAR:
                case keys.W:
                case keys.UP:
                    controls.up = false;
                    break;
                case keys.S:
                case keys.DOWN:
                    controls.down = false;
                    break;
            }
        };
        Plane_L3.prototype.update = function () {
            if (controls.left && this.image.x > 0)
                this.image.x -= 8;
            else if (controls.right && this.image.x < 740)
                this.image.x += 8;
            else if (controls.up && this.image.y > 0)
                this.image.y -= 8;
            else if (controls.down && this.image.y < 540)
                this.image.y += 8;
            else {
                this.image.x = this.stage.mouseX;
                this.image.y = this.stage.mouseY;
            }
        };
        Plane_L3.prototype.destroy = function () {
            this.engineSound.stop();
            game.removeChild(this.image);
        };
        return Plane_L3;
    })();
    objects.Plane_L3 = Plane_L3;
})(objects || (objects = {}));
//# sourceMappingURL=plane.js.map
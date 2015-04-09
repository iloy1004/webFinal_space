/// <reference path="../managers/asset.ts" />

module objects {
    // Island Class
    export class Bullet {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        height: number;
        width: number;
        dy: number;

        constructor(stage: createjs.Stage, game: createjs.Container) {
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

        update() {
            this.image.x += this.dy;

            if (this.image.x > this.stage.canvas.width) {
                this.isBullet(constants.IS_BULLET);
                game.removeChild(this.image);
                //this.reset();
            }
        }

        reset() {
            this.isBullet(constants.IS_BULLET);
            game.removeChild(this.image);
        }

        destroy() {
            this.isBullet(constants.IS_BULLET);
            game.removeChild(this.image);
        }

        // check whether bullet is existing in the canvas, and swtich the value true and false
        isBullet(isB: boolean) {
            if (isB) {
                constants.IS_BULLET = false;
            }
            else {
                constants.IS_BULLET = true;
            }
        }
    }

}
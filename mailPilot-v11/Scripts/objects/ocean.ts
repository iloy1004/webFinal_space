/// <reference path="../managers/asset.ts" />
module objects {
    // Ocean Class
    export class Ocean {
        image: createjs.Bitmap;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        dy: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("sky"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.reset();

            this.dy = 3;

            game.addChild(this.image);
        }

        update() {

            this.image.x += this.dy;
            if (this.image.x >= 0) {
                this.reset();
            }

            //this.image.y += this.dy;
            //if (this.image.y >= 0) {
                //this.reset();
            //}
        }

        reset() {
            this.image.x = -740;
            //this.image.y = -960;
        }

        destroy() {
            game.removeChild(this.image);
        }
    }

}
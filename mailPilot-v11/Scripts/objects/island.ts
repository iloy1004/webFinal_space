/// <reference path="../managers/asset.ts" />
module objects {
    // Island Class
    export class Island {
        image: createjs.Sprite;
        image2: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        height: number;
        width: number;
        dy: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas_all, "bonus1");
            this.image2 = new createjs.Sprite(managers.Assets.atlas_all, "bonus2");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();

            this.dy = 5;

            game.addChild(this.image);
        }
         
        update() {
            this.image.x -= this.dy;
            if (this.image.x < 0) {
                this.reset();
            }
        }

        reset() {

            this.image.x = this.stage.canvas.width;
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            
        }

        destroy() {
            game.removeChild(this.image);
        }
    }

}
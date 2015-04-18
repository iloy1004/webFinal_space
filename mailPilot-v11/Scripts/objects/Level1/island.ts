/// <reference path="../../managers/asset.ts" />
module objects {
    // Island Class
    export class Island {
        image: createjs.Sprite;
        image2: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        height: number;
        width: number;
        dx: number;
        dy: number;
        2
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;

            this.image = new createjs.Sprite(managers.Assets.atlas_all, "gas_item");
            this.image2 = new createjs.Sprite(managers.Assets.atlas_level1, "item2");

            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset(0);

            this.dy = 5;

            game.addChild(this.image);
            game.addChild(this.image2);
        }
         
        update() {
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
        }

        reset(image:number) {

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
        }

        destroy() {
            game.removeChild(this.image);
            game.removeChild(this.image2);
        }
    }

}
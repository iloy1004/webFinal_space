﻿/// <reference path="../../managers/asset.ts" />

module objects {
    // Cloud class
    export class Planets {
        image: createjs.Sprite;
        image2: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        dy: number;
        dx: number;
        whcihStage: number;

        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;

            this.image = new createjs.Sprite(managers.Assets.atlas_level1, "stone1");
            this.image2 = new createjs.Sprite(managers.Assets.atlas_level1, "star1");

            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset(0);

            game.addChild(this.image);
            game.addChild(this.image2);
        }

        update() {          

            this.image.x -= Math.floor(Math.random() * 2 + 2);
            this.image2.x -= Math.floor(Math.random() * 3 + 3);

            if (this.image.x < 0) {
                this.reset(1);
            }

            if (this.image2.x < 0) {
                this.reset(2);
            }
        }

        //divide reset 
        reset(image:number) {

            switch (image) {
                //reset image and image2 both of them
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

                //reset image
                case 1:
                    this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
                    this.dy = Math.floor(Math.random() * -3) + Math.floor(Math.random() * 3);
                    this.dx = Math.floor(Math.random() * 5 + 5);
                    this.image.x = this.stage.canvas.width;

                    break;

                //reset image2
                case 2:
                    this.image2.y = Math.floor(Math.random() * this.stage.canvas.height);
                    this.dy = Math.floor(Math.random() * -2) + Math.floor(Math.random() * 2);
                    this.dx = Math.floor(Math.random() * 4 + 4);
                    this.image2.x = this.stage.canvas.width;

                    break;
            }

            
        }

        destroy() {
            game.removeChild(this.image);
            game.removeChild(this.image2);
        }
    }

}
/// <reference path="../managers/asset.ts" />

module objects {
    // Scoreboard Class
    export class Scoreboard {
        stage: createjs.Stage;
        game: createjs.Container;
        sqaureGas : createjs.Sprite;
        gas: number;
        lives: number;
        score: number;
        label: createjs.Text;
        labelText: string = "";
        width: number;
        height: number;
        

        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.gas = constants.CURRENT_PLANE_GAS;
            this.lives = constants.CURRENT_PLANE_LIVES;
            this.score = 0;
            this.label = new createjs.Text(this.labelText, constants.LABEL_FONT, constants.LABEL_COLOUR);

            // drawing hp
            this.sqaureGas = new createjs.Sprite(managers.Assets.atlas_all, "gas20");

            this.update();
            this.width = this.label.getBounds().width;
            this.height = this.label.getBounds().height;

            game.addChild(this.sqaureGas);
            game.addChild(this.label);
            
        }

        update() {

            var currentHP = constants.CURRENT_PLANE_GAS;
            currentHP -= 1;

            this.labelText = "* HP:          * Score: " + this.score.toString();
            this.label.text = this.labelText;
            this.label.y = 20;

            this.drawHP(currentHP);

            constants.CURRENT_PLANE_GAS = currentHP;
        }    

        destroy() {
            game.removeChild(this.label);
        }

        drawHP(hp:number) {
            game.removeChild(this.sqaureGas);

            var imgName = "gas" + hp;

            this.sqaureGas = new createjs.Sprite(managers.Assets.atlas_all, imgName);
            this.sqaureGas.x = 100;
            this.sqaureGas.y = 20;

            game.addChild(this.sqaureGas);
        }
    }
} 
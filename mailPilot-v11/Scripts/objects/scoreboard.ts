module objects {
    // Scoreboard Class
    export class Scoreboard {
        stage: createjs.Stage;
        game: createjs.Container;
        hp: number;
        score: number;
        label: createjs.Text;
        labelText: string = "";
        width: number;
        height: number;
        sqaureHp = new createjs.Shape();

        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.hp = constants.CURRENT_PLANE_HP;
            this.score = 0;
            this.label = new createjs.Text(this.labelText, constants.LABEL_FONT, constants.LABEL_COLOUR);

            // drawing hp
            this.sqaureHp = new createjs.Shape();
            this.sqaureHp.graphics.beginFill("orange").drawRect(110,35,100,25);
            //x, y, width, height

            this.update();
            this.width = this.label.getBounds().width;
            this.height = this.label.getBounds().height;

            game.addChild(this.sqaureHp);
            game.addChild(this.label);
            
        }

        update() {

            var currentHP = (parseInt(this.hp.toString()) / constants.PLANE_HP) * 100;

            this.labelText = "* HP:          * Score: " + this.score.toString();
            this.label.text = this.labelText;
            this.label.y = 20;

            this.drawHP(currentHP);

            constants.CURRENT_PLANE_HP = currentHP;
        }

        destroy() {
            game.removeChild(this.label);
        }

        drawHP(hp:number) {
            game.removeChild(this.sqaureHp);

            this.sqaureHp = new createjs.Shape();
            this.sqaureHp.graphics.beginFill("orange").drawRect(110, 35, hp, 25);
            
            game.addChild(this.sqaureHp);
        }
    }
} 
module objects {
    // Scoreboard Class
    export class BossScoreboard {
        stage: createjs.Stage;
        game: createjs.Container;
        plane_hp: number;
        score: number;
        boss_hp: number;
        label: createjs.Text;
        label2: createjs.Text;
        labelText: string = "";
        labelText2: string = "";
        width: number;
        height: number;
        sqaureHp = new createjs.Shape();
        sqaureBossHp = new createjs.Shape();

        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.plane_hp = constants.CURRENT_PLANE_HP;
            this.boss_hp = constants.CURRENT_BOSS_HP;
            this.score = constants.CURRENT_SCORE;
            this.label = new createjs.Text(this.labelText, constants.LABEL_FONT, constants.LABEL_COLOUR);
            this.label2 = new createjs.Text(this.labelText2, constants.LABEL_FONT, constants.LABEL_COLOUR);
            var currentHP = (this.plane_hp / constants.PLANE_HP) * 100;

            // drawing hp
            //x, y, width, height
            this.sqaureHp = new createjs.Shape();
            this.sqaureHp.graphics.beginFill("orange").drawRect(110, 35, currentHP, 25);
            
            // drawing Boss hp
            //x, y, width, height
            this.sqaureBossHp = new createjs.Shape();
            this.sqaureBossHp.graphics.beginFill("red").drawRect(470, 35, 100, 25);

            this.update();
            this.width = this.label.getBounds().width;
            this.height = this.label.getBounds().height;

            game.addChild(this.sqaureHp);
            game.addChild(this.sqaureBossHp);
            game.addChild(this.label);
            game.addChild(this.label2);
            
        }

        update() {
            var currentHP = (this.plane_hp / constants.PLANE_HP) * 100;
            var currentBossHP = (this.boss_hp / constants.BOSS_HP) * 100;

            this.labelText = "* HP: ";
            this.label.text = this.labelText;
            this.label.y = 20;

            this.labelText2 = "* Boss's HP:           * Score: " + this.score.toString();
            this.label2.text = this.labelText2;
            this.label2.x = 230;
            this.label2.y = 20;

            //current HP, x, y, object of square, what kind of hp - 0 : Plane's HP, 1: Boss's HP
            this.drawHP(currentHP, 110, 35);
            this.drawBossHP(currentBossHP, 470, 35);
        }

        destroy() {
            game.removeChild(this.label);
        }

        drawHP(hp: number, x: number, y: number) {

            game.removeChild(this.sqaureHp);

            this.sqaureHp = new createjs.Shape();
            this.sqaureHp.graphics.beginFill("orange").drawRect(x, y, hp, 25);

            constants.CURRENT_PLANE_HP = hp;

            game.addChild(this.sqaureHp);
        }

        drawBossHP(hp: number, x: number, y: number) {

            game.removeChild(this.sqaureBossHp);

            this.sqaureBossHp = new createjs.Shape();
            this.sqaureBossHp.graphics.beginFill("red").drawRect(x, y, hp, 25);

            constants.CURRENT_BOSS_HP = hp;

            game.addChild(this.sqaureBossHp);
        }
    }
} 
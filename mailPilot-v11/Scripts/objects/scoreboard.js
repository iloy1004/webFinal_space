var objects;
(function (objects) {
    // Scoreboard Class
    var Scoreboard = (function () {
        function Scoreboard(stage, game) {
            this.labelText = "";
            this.sqaureHp = new createjs.Shape();
            this.stage = stage;
            this.game = game;
            this.hp = constants.CURRENT_PLANE_HP;
            this.score = 0;
            this.label = new createjs.Text(this.labelText, constants.LABEL_FONT, constants.LABEL_COLOUR);
            // drawing hp
            this.sqaureHp = new createjs.Shape();
            this.sqaureHp.graphics.beginFill("orange").drawRect(110, 35, 100, 25);
            //x, y, width, height
            this.update();
            this.width = this.label.getBounds().width;
            this.height = this.label.getBounds().height;
            game.addChild(this.sqaureHp);
            game.addChild(this.label);
        }
        Scoreboard.prototype.update = function () {
            var currentHP = (parseInt(this.hp.toString()) / constants.PLANE_HP) * 100;
            this.labelText = "* HP:          * Score: " + this.score.toString();
            this.label.text = this.labelText;
            this.label.y = 20;
            this.drawHP(currentHP);
            constants.CURRENT_PLANE_HP = currentHP;
        };
        Scoreboard.prototype.destroy = function () {
            game.removeChild(this.label);
        };
        Scoreboard.prototype.drawHP = function (hp) {
            game.removeChild(this.sqaureHp);
            this.sqaureHp = new createjs.Shape();
            this.sqaureHp.graphics.beginFill("orange").drawRect(110, 35, hp, 25);
            game.addChild(this.sqaureHp);
        };
        return Scoreboard;
    })();
    objects.Scoreboard = Scoreboard;
})(objects || (objects = {}));
//# sourceMappingURL=scoreboard.js.map
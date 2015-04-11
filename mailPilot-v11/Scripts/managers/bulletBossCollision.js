/// <reference path="../objects/planets.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/bullet.ts" />
/// <reference path="../objects/bossscoreboard.ts" />
var managers;
(function (managers) {
    // Collision Manager Class
    var bulletBossCollision = (function () {
        function bulletBossCollision(boss, scoreboard, bullet, poos) {
            this.poos = [];
            this.scoreboard = scoreboard;
            this.bullet = bullet;
            this.boss = boss;
            this.poos = poos;
        }
        // Utility method - Distance calculation between two points
        bulletBossCollision.prototype.distance = function (p1, p2) {
            var result = 0;
            var xPoints = 0;
            var yPoints = 0;
            xPoints = p2.x - p1.x;
            xPoints = xPoints * xPoints;
            yPoints = p2.y - p1.y;
            yPoints = yPoints * yPoints;
            result = Math.sqrt(xPoints + yPoints);
            return result;
        };
        // check collision between bullet and cloud
        bulletBossCollision.prototype.bulletAndBoss = function (boss, bullet) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = bullet.image.x;
            p1.y = bullet.image.y;
            p2.x = boss.image.x;
            p2.y = boss.image.y;
            if (this.distance(p1, p2) < ((bullet.height / 2) + (boss.height / 2))) {
                createjs.Sound.play("shot");
                this.scoreboard.score += 50;
                this.scoreboard.boss_hp -= 100;
                //bullet.reset();
                game.removeChild(bullet.image);
                constants.IS_BULLET = false;
            }
        };
        // check collision between bullet and cloud
        bulletBossCollision.prototype.bulletAndPoo = function (poo, bullet) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = bullet.image.x;
            p1.y = bullet.image.y;
            p2.x = poo.image.x;
            p2.y = poo.image.y;
            if (this.distance(p1, p2) < ((bullet.height / 2) + (poo.height / 2))) {
                createjs.Sound.play("shot");
                this.scoreboard.score += 50;
                //bullet.reset();
                game.removeChild(bullet.image);
                constants.IS_BULLET = false;
                poo.reset();
            }
        };
        // Utility Function to Check Collisions
        bulletBossCollision.prototype.update = function () {
            this.bulletAndBoss(this.boss, this.bullet);
            for (var i = constants.POO_NUM; i >= 0; i--) {
                this.bulletAndPoo(this.poos[i], this.bullet);
            }
        };
        return bulletBossCollision;
    })();
    managers.bulletBossCollision = bulletBossCollision;
})(managers || (managers = {}));
//# sourceMappingURL=bulletbosscollision.js.map
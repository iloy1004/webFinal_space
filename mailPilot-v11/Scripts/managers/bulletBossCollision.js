/// <reference path="../objects/level3/plane.ts" />
/// <reference path="../objects/level3/planets.ts" />
/// <reference path="../objects/level3/bullet_l3.ts" />
/// <reference path="../objects/boss/scoreboard.ts" />
var managers;
(function (managers) {
    // Collision Manager Class
    var bulletBossCollision = (function () {
        function bulletBossCollision(boss, scoreboard, bullet) {
            this.scoreboard = scoreboard;
            this.bullet = bullet;
            this.boss = boss;
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
                this.scoreboard.currentBossHP -= 100;
                constants.CURRENT_BOSS_HP -= 100;
                //bullet.reset();
                game.removeChild(bullet.image);
                constants.IS_BULLET = false;
            }
        };
        // Utility Function to Check Collisions
        bulletBossCollision.prototype.update = function () {
            this.bulletAndBoss(this.boss, this.bullet);
        };
        return bulletBossCollision;
    })();
    managers.bulletBossCollision = bulletBossCollision;
})(managers || (managers = {}));
//# sourceMappingURL=bulletbosscollision.js.map
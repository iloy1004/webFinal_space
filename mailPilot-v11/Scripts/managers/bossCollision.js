/// <reference path="../objects/level3/plane.ts" />
/// <reference path="../objects/level3/bullet_l3.ts" />
/// <reference path="../objects/boss.ts" />
/// <reference path="../objects/level3/scoreboard.ts" />
var managers;
(function (managers) {
    // Collision Manager Class
    var bossCollision = (function () {
        function bossCollision(plane, boss, scoreboard) {
            this.boss = boss;
            this.scoreboard = scoreboard;
            this.plane = plane;
        }
        // Utility method - Distance calculation between two points
        bossCollision.prototype.distance = function (p1, p2) {
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
        bossCollision.prototype.planeAndBoss = function (boss, plane) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = plane.image.x;
            p1.y = plane.image.y;
            p2.x = boss.image.x;
            p2.y = boss.image.y;
            if (this.distance(p1, p2) < ((plane.height / 2) + (boss.height / 2))) {
                createjs.Sound.play("thunder");
                this.scoreboard.gas -= 10;
            }
        };
        // Utility Function to Check Collisions
        bossCollision.prototype.update = function () {
            this.planeAndBoss(this.boss, this.plane);
        };
        return bossCollision;
    })();
    managers.bossCollision = bossCollision;
})(managers || (managers = {}));
//# sourceMappingURL=bosscollision.js.map
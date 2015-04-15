/// <reference path="../objects/level3/plane.ts" />
/// <reference path="../objects/level3/bullet_l3.ts" />
/// <reference path="../objects/boss.ts" />
/// <reference path="../objects/level3/scoreboard.ts" />
var managers;
(function (managers) {
    // Collision Manager Class
    var bossCollision = (function () {
        function bossCollision(plane, boss, poos, scoreboard) {
            this.poos = [];
            this.boss = boss;
            this.scoreboard = scoreboard;
            this.plane = plane;
            this.poos = poos;
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
        // check collision between plane and any cloud object
        bossCollision.prototype.planeAndPoo = function (poo) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.plane.image.x;
            p1.y = this.plane.image.y;
            p2.x = poo.image.x;
            p2.y = poo.image.y;
            if (this.distance(p1, p2) < ((this.plane.height / 2) + (poo.height / 2))) {
                createjs.Sound.play("thunder");
                this.scoreboard.gas -= 5;
                poo.reset();
            }
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
            for (var count = constants.POO_NUM; count >= 0; count--) {
                this.planeAndPoo(this.poos[count]);
            }
            this.planeAndBoss(this.boss, this.plane);
        };
        return bossCollision;
    })();
    managers.bossCollision = bossCollision;
})(managers || (managers = {}));
//# sourceMappingURL=bosscollision.js.map
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/bullet.ts" />
/// <reference path="../objects/planets.ts" />
/// <reference path="../objects/scoreboard.ts" />
var managers;
(function (managers) {
    // Collision Manager Class
    var bulletCollision = (function () {
        function bulletCollision(clouds, scoreboard, bullet) {
            this.clouds = [];
            this.clouds = clouds;
            this.scoreboard = scoreboard;
            this.bullet = bullet;
        }
        // Utility method - Distance calculation between two points
        bulletCollision.prototype.distance = function (p1, p2) {
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
        bulletCollision.prototype.bulletAndCloud = function (cloud, bullet) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            var p3 = new createjs.Point();
            p1.x = bullet.image.x;
            p1.y = bullet.image.y;
            p2.x = cloud.image.x;
            p2.y = cloud.image.y;
            p3.x = cloud.image2.x;
            p3.y = cloud.image2.y;
            //check the 2 kinds of enemies
            if (this.distance(p1, p2) < ((bullet.height / 2) + (cloud.height / 2))) {
                createjs.Sound.play("shot");
                this.scoreboard.score += 50;
                //bullet.reset();
                game.removeChild(bullet.image);
                constants.IS_BULLET = false;
                cloud.reset(1);
            }
            if (this.distance(p1, p3) < ((bullet.height / 2) + (cloud.height / 2))) {
                createjs.Sound.play("shot");
                this.scoreboard.score += 50;
                //bullet.reset();
                game.removeChild(bullet.image);
                constants.IS_BULLET = false;
                cloud.reset(2);
            }
        };
        // Utility Function to Check Collisions
        bulletCollision.prototype.update = function () {
            for (var i = constants.PLANET_NUM; i >= 0; i--) {
                this.bulletAndCloud(this.clouds[i], this.bullet);
            }
        };
        return bulletCollision;
    })();
    managers.bulletCollision = bulletCollision;
})(managers || (managers = {}));
//# sourceMappingURL=bulletcollision.js.map
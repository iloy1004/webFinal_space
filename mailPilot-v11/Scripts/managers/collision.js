/// <reference path="../objects/island.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/planets.ts" />
/// <reference path="../objects/scoreboard.ts" />
var managers;
(function (managers) {
    // Collision Manager Class
    var Collision = (function () {
        function Collision(plane, clouds, scoreboard, iteams, currentStage) {
            //private island: objects.Island;
            this.clouds = [];
            this.items = [];
            this.plane = plane;
            //this.island = island;
            this.clouds = clouds;
            this.items = iteams;
            this.scoreboard = scoreboard;
        }
        // Utility method - Distance calculation between two points
        Collision.prototype.distance = function (p1, p2) {
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
        Collision.prototype.planeAndCloud = function (cloud) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            var p3 = new createjs.Point();
            p1.x = this.plane.image.x;
            p1.y = this.plane.image.y;
            p2.x = cloud.image.x;
            p2.y = cloud.image.y;
            p3.x = cloud.image2.x;
            p3.y = cloud.image2.y;
            if (this.distance(p1, p2) < ((this.plane.height / 2) + (cloud.height / 2))) {
                createjs.Sound.play("thunder");
                this.scoreboard.gas -= 2;
                cloud.reset(1);
            }
            if (this.distance(p1, p3) < ((this.plane.height / 2) + (cloud.height / 2))) {
                createjs.Sound.play("thunder");
                this.scoreboard.gas -= 2;
                cloud.reset(2);
            }
        };
        // check collision between plane and island
        Collision.prototype.planeAndIsland = function (item) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            var p3 = new createjs.Point();
            p1.x = this.plane.image.x;
            p1.y = this.plane.image.y;
            p2.x = item.image.x;
            p2.y = item.image.y;
            p3.x = item.image2.x;
            p3.y = item.image2.y;
            if (this.distance(p1, p2) < ((this.plane.height / 2) + (item.height / 2))) {
                createjs.Sound.play("yay");
                if (currentState == constants.PLAY_LEVEL1_STATE) {
                    scoreboard.score += 100;
                    constants.CURRENT_SCORE += 100;
                }
                else {
                    constants.CURRENT_BULLETS += 3;
                    this.scoreboard.bullets += 3;
                }
                item.reset(1);
            }
            if (this.distance(p1, p3) < ((this.plane.height / 2) + (item.height / 2))) {
                createjs.Sound.play("yay");
                if (currentState == constants.PLAY_LEVEL1_STATE) {
                    scoreboard.score += 70;
                    constants.CURRENT_SCORE += 70;
                }
                else {
                    if (constants.CURRENT_PLANE_GAS >= 50) {
                        constants.CURRENT_PLANE_GAS += 50;
                        this.scoreboard.gas += 50;
                        constants.CURRENT_PLANE_GAS += 100 - constants.CURRENT_PLANE_GAS;
                        this.scoreboard.gas += 100 - this.scoreboard.gas;
                    }
                    else {
                        constants.CURRENT_PLANE_GAS += 50;
                        this.scoreboard.gas += 50;
                    }
                }
                item.reset(2);
            }
        };
        // Utility Function to Check Collisions
        Collision.prototype.update = function () {
            for (var count = constants.PLANET_NUM; count >= 0; count--) {
                this.planeAndCloud(this.clouds[count]);
            }
            for (var i = constants.ITEM_NUM; i >= 0; i--) {
                this.planeAndIsland(this.items[i]);
            }
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map
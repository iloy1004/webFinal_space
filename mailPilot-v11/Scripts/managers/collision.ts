
/// <reference path="../objects/level1/island.ts" />
/// <reference path="../objects/level1/plane.ts" />
/// <reference path="../objects/level1/planets.ts" />
/// <reference path="../objects/level1/scoreboard.ts" />

module managers {
    // Collision Manager Class
    export class Collision {
        // class variables
        private plane: objects.Plane;
        //private island: objects.Island;
        private clouds = [];
        private items = [];
        private scoreboard: objects.Scoreboard;

        constructor(plane: objects.Plane, clouds, scoreboard: objects.Scoreboard, iteams, currentStage) {
            this.plane = plane;
            //this.island = island;
            this.clouds = clouds;
            this.items = iteams;
            this.scoreboard = scoreboard;
        }

        // Utility method - Distance calculation between two points
        private distance(p1: createjs.Point, p2: createjs.Point): number {
            var result: number = 0;
            var xPoints: number = 0;
            var yPoints: number = 0;

            xPoints = p2.x - p1.x;
            xPoints = xPoints * xPoints;

            yPoints = p2.y - p1.y;
            yPoints = yPoints * yPoints;

            result = Math.sqrt(xPoints + yPoints);

            return result;
        }

        // check collision between plane and any cloud object
        private planeAndCloud(cloud: objects.Planets) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            var p3: createjs.Point = new createjs.Point();
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
        }

        // check collision between plane and island
        private planeAndIsland(item: objects.Island) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            var p3: createjs.Point = new createjs.Point();

            p1.x = this.plane.image.x;
            p1.y = this.plane.image.y;
            p2.x = item.image.x;
            p2.y = item.image.y;
            p3.x = item.image2.x;
            p3.y = item.image2.y;

            if (this.distance(p1, p2) < ((this.plane.height / 2) + (item.height / 2))) {

                createjs.Sound.play("yay");

                scoreboard.score += 100;
                constants.CURRENT_SCORE += 100;
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
        }



        // Utility Function to Check Collisions
        update() {


            for (var count = constants.PLANET_NUM; count >= 0; count--) {
                this.planeAndCloud(this.clouds[count]);
            }

            for (var i = constants.ITEM_NUM; i >= 0; i--) {
                this.planeAndIsland(this.items[i]);
            }
        }
    }
} 
/// <reference path="../objects/level3/plane.ts" />

/// <reference path="../objects/level3/bullet_l3.ts" />

/// <reference path="../objects/boss.ts" />
/// <reference path="../objects/level3/scoreboard.ts" />


module managers {
    // Collision Manager Class
    export class bossCollision {

        // class variables
        private boss: objects.Boss;
        private plane: objects.Plane_L3;
        private scoreboard: objects.Scoreboard_Boss;

        constructor(plane: objects.Plane_L3, boss: objects.Boss, scoreboard: objects.Scoreboard_Boss) {
            this.boss = boss;
            this.scoreboard = scoreboard;
            this.plane = plane;
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


        // check collision between bullet and cloud
        private planeAndBoss(boss: objects.Boss, plane: objects.Plane) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();

            p1.x = plane.image.x;
            p1.y = plane.image.y;

            p2.x = boss.image.x;
            p2.y = boss.image.y;

            if (this.distance(p1, p2) < ((plane.height / 2) + (boss.height / 2))) {
                createjs.Sound.play("thunder");
                this.scoreboard.gas -= 10;
            }
        }


        // Utility Function to Check Collisions
        update() {
            this.planeAndBoss(this.boss, this.plane);
        }
    }
} 
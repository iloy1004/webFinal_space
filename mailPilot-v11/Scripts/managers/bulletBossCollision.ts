
/// <reference path="../objects/level3/plane.ts" />
/// <reference path="../objects/level3/planets.ts" />

/// <reference path="../objects/level3/bullet_l3.ts" />

/// <reference path="../objects/level3/scoreboard.ts" />



module managers {
    // Collision Manager Class
    export class bulletBossCollision {

        // class variables
        private bullet: objects.Bullet;
        private boss: objects.Boss;
        private scoreboard: objects.Scoreboard_L3;
        private poos = [];

        constructor(boss: objects.Boss, scoreboard: objects.Scoreboard_L3, bullet: objects.Bullet, poos) {
            this.scoreboard = scoreboard;
            this.bullet = bullet;
            this.boss = boss;
            this.poos = poos;
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
        private bulletAndBoss(boss: objects.Boss, bullet: objects.Bullet) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();

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
                //boss.reset();
            }
        }

        // check collision between bullet and cloud
        private bulletAndPoo(poo: objects.Poo, bullet: objects.Bullet) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();

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
        }

        // Utility Function to Check Collisions
        update() {
            this.bulletAndBoss(this.boss, this.bullet);
            for (var i = constants.POO_NUM; i >= 0; i--) {
                this.bulletAndPoo(this.poos[i], this.bullet);
            }
        }
    }
} 
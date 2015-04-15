/// <reference path="../objects/level2/plane.ts" />
/// <reference path="../objects/level2/scoreboard.ts" />
/// <reference path="../objects/level2/planets.ts" />
/// <reference path="../objects/level2/bullet_l2.ts" />



module managers {
    // Collision Manager Class
    export class bulletCollision_L2 {

        // class variables
        private bullet: objects.Bullet;
        private clouds = [];
        private scoreboard: objects.Scoreboard_L2;
        private collisionImg1: createjs.Sprite;
        private collisionImg2: createjs.Sprite;

        constructor(clouds, scoreboard: objects.Scoreboard_L2, bullet: objects.Bullet) {
            this.clouds = clouds;
            this.scoreboard = scoreboard;
            this.bullet = bullet;
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
        private bulletAndCloud(cloud: objects.Planets, bullet: objects.Bullet) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            var p3: createjs.Point = new createjs.Point();

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

                this.collisionImg1 = new createjs.Sprite(managers.Assets.atlas_all, "collision");
                this.collisionImg1.x = p2.x;
                this.collisionImg1.y = p2.y;
                game.addChild(this.collisionImg1);

                for (var i = 3; i >= 0; i--) {
                    if (i == 0)
                        game.removeChild(this.collisionImg1);
                }
            }

            if (this.distance(p1, p3) < ((bullet.height / 2) + (cloud.height / 2))) {
                createjs.Sound.play("shot");
                this.scoreboard.score += 50;
                //bullet.reset();
                game.removeChild(bullet.image);
                constants.IS_BULLET = false;
                cloud.reset(2);

                this.collisionImg2 = new createjs.Sprite(managers.Assets.atlas_all, "collision");
                this.collisionImg2.x = p3.x;
                this.collisionImg2.y = p3.y;
                game.addChild(this.collisionImg2);

                for (var i = 3; i >= 0; i--) {
                    if (i == 0)
                        game.removeChild(this.collisionImg2);
                }
            }
        }


        // Utility Function to Check Collisions
        update() {

            for (var i = constants.PLANET_NUM; i >= 0; i--) {
                this.bulletAndCloud(this.clouds[i], this.bullet);
            }
        }
    }
} 
﻿/// <reference path="../../managers/asset.ts" />
/// <reference path="../../controls.ts" />
/// <reference path="../../keys.ts" />

module objects {
    // Plane Class
    export class Plane_L3 {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        engineSound: createjs.SoundInstance;
        width: number;
        height: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;

                    this.image = new createjs.Sprite(managers.Assets.atlas_level3, "ship");

            //this.image.x = 100;
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            game.addChild(this.image);
            this.engineSound = createjs.Sound.play('playBGM', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);

            // Set up movement and controls
            this.assignControls()
        }

        assignControls() {
            // Binds key actions
            window.onkeydown = this.onControlDown;
            window.onkeyup = this.onControlUp;
        }

        onControlDown(e) {
            // Basic switch statement to set
            // our controls to true onKeyDown
            switch (e.which) {
                case keys.LEFT:
                case keys.A:
                    controls.left = true;
                    controls.lTally++;
                    controls.rTally = 0;
                    break;
                case keys.RIGHT:
                case keys.D:
                    controls.right = true;
                    controls.rTally++;
                    controls.lTally = 0;
                    break;
                case keys.SPACEBAR:
                case keys.SHIFT:
                    states.shoot();
                    break;
                case keys.W:
                case keys.UP:
                    controls.up = true;
                    break;
                case keys.S:
                case keys.DOWN:
                    controls.down = true;
                    break;
                case keys.Z:
                    constants.PLANE_GAS = 20000;
                    constants.PLANE_LIVES = 1000;
                    constants.BULLET_COUNT = 1000;
                    constants.CURRENT_BULLETS = constants.BULLET_COUNT;
                    constants.CURRENT_PLANE_LIVES = constants.PLANE_LIVES;
                    constants.CURRENT_PLANE_GAS = constants.PLANE_GAS;
                    break;
            }
        }

        onControlUp(e) {
            // Basic switch statement to set
            // our controls to true onKeyUp
            switch (e.which) {
                case keys.LEFT:
                case keys.A:
                    controls.left = false;
                    break;
                case keys.RIGHT:
                case keys.D:
                    controls.right = false;
                    break;
                case keys.SPACEBAR:
                case keys.W:
                case keys.UP:
                    controls.up = false;
                    break;
                case keys.S:
                case keys.DOWN:
                    controls.down = false;
                    break;
            }
        }

        update() {
            if (controls.left && this.image.x > 0)
                this.image.x -= 8;
            else if (controls.right && this.image.x < 740)
                this.image.x += 8;
            else if (controls.up && this.image.y > 0)
                this.image.y -= 8;
            else if (controls.down && this.image.y < 540)
                this.image.y += 8;
            else {
                this.image.x = this.stage.mouseX;
                this.image.y = this.stage.mouseY;
            }
        }
        destroy() {
            this.engineSound.stop();
            game.removeChild(this.image);
        }
    }
} 
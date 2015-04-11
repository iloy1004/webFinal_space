/// <reference path="../constants.ts" />
/// <reference path="../managers/asset.ts" />
module objects {
    export class Button extends createjs.Sprite {
        constructor(x: number, y: number, buttonIDString: string, currentStage:number) {

            switch (currentStage) {
                case constants.HOME_STATE:
                case constants.MENU_LEVEL1_STATE:
                    super(managers.Assets.atlas_level1, buttonIDString);
                    break;
                case constants.MENU_LEVEL2_STATE:
                    super(managers.Assets.atlas_level2, buttonIDString);
                    break;
                case constants.MENU_LEVEL3_STATE:
                    super(managers.Assets.atlas_level3, buttonIDString);
                    break;
            }
            

            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
            this.x = x;
            this.y = y;
            this.setButtonListeners();
        }

        setButtonListeners() {
            this.cursor = 'pointer';
            this.on('rollover', this.onButtonOver);
            this.on('rollout', this.onButtonOut);
        }

        onButtonOver() {
            this.alpha = 0.8;
        }

        onButtonOut() {
            this.alpha = 1;
        }
    }
} 
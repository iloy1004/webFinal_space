var managers;
(function (managers) {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "loading", src: "assets/images/loading.gif" },
        { id: "sky", src: "assets/images/background.png" },
        { id: "engine", src: "assets/sounds/background_1.mp3" },
        { id: "thunder", src: "assets/sounds/hit_enemy.mp3" },
        { id: "yay", src: "assets/sounds/get_item.mp3" },
        { id: "shot2", src: "assets/sounds/laserL2.mp3" },
        { id: "shot3", src: "assets/sounds/weaponL3.mp3" },
        { id: "bossBGM", src: "assets/sounds/bossBGM.mp3" },
        { id: "win", src: "assets/sounds/win.mp3" },
        { id: "game-over", src: "assets/sounds/gameOver.mp3" }
    ];
    var atlas_allData = {
        "images": ["assets/images/atlas_all.png"],
        "frames": [
            [21, 63, 91, 20],
            [21, 87, 91, 20],
            [21, 111, 91, 20],
            [21, 135, 91, 20],
            [21, 159, 91, 20],
            [21, 183, 91, 20],
            [21, 207, 91, 20],
            [21, 231, 91, 20],
            [21, 255, 91, 20],
            [21, 279, 91, 20],
            [21, 302, 91, 20],
            [21, 325, 91, 20],
            [21, 350, 91, 20],
            [21, 372, 91, 20],
            [21, 395, 91, 20],
            [21, 419, 91, 20],
            [21, 442, 91, 20],
            [21, 465, 91, 20],
            [21, 488, 91, 20],
            [21, 511, 91, 20],
            [118, 8, 35, 47],
            [25, 13, 21, 45],
            [57, 35, 21, 19],
            [83, 23, 26, 33],
            [151, 538, 62, 11],
            [151, 603, 62, 11],
            [151, 667, 62, 11],
            [150, 1679, 64, 35],
            [150, 1742, 61, 35],
            [154, 2431, 55, 64],
            [152, 2498, 63, 63],
        ],
        "animations": {
            "gas_animation": {
                frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
                speed: 0.5,
            },
            "gas100": [0],
            "gas94": [1],
            "gas89": [2],
            "gas84": [3],
            "gas78": [4],
            "gas73": [5],
            "gas68": [6],
            "gas63": [7],
            "gas57": [8],
            "gas52": [9],
            "gas47": [10],
            "gas42": [11],
            "gas36": [12],
            "gas31": [13],
            "gas26": [14],
            "gas21": [15],
            "gas15": [16],
            "gas10": [17],
            "gas5": [18],
            "gas0": [19],
            "bullets_counter": [20],
            "bullet_item": [21],
            "lifes": [22],
            "gas_item": [23],
            "bullet_L2": {
                frames: [24, 25, 26],
                speed: 0.2,
            },
            "bullet_L3": {
                frames: [27, 28],
                speed: 0.2,
            },
            "collision": {
                frames: [29, 30],
                speed: 0.2,
            }
        }
    };
    var atlas_Level1Data = {
        "images": ["assets/images/atlas_level1.png"],
        "frames": [
            [0, 0, 240, 118],
            [0, 127, 240, 118],
            [0, 257, 240, 118],
            [21, 400, 98, 104],
            [134, 399, 111, 105],
            [267, 418, 88, 81],
            [371, 343, 61, 73],
            [377, 430, 60, 58],
            [461, 423, 47, 60],
            [276, 20, 473, 313],
            [300, 198, 123, 43],
            [300, 249, 123, 43],
            [36, 532, 51, 47],
            [106, 539, 36, 37]
        ],
        "animations": {
            "ship": {
                frames: [0, 1, 2],
                speed: 0.2,
            },
            "stone1": [3],
            "stone2": [4],
            "stone3": [5],
            "star1": [6],
            "star2": [7],
            "star3": [8],
            "board": [9],
            "playBtn": [10],
            "exitBtn": [11],
            "item1": [12],
            "item2": [13]
        }
    };
    var atlas_Level2Data = {
        "images": ["assets/images/atlas_level2.png"],
        "frames": [
            [17, 11, 234, 112],
            [17, 139, 234, 112],
            [17, 268, 234, 112],
            [50, 407, 121, 100],
            [50, 506, 121, 100],
            [50, 606, 121, 100],
            [288, 12, 120, 119],
            [287, 148, 127, 120],
            [453, 12, 200, 118],
            [465, 205, 175, 115],
            [459, 395, 187, 119],
            [202, 526, 473, 315],
            [226, 706, 122, 43],
            [226, 756, 122, 43],
        ],
        "animations": {
            "ship": {
                frames: [0, 1, 2],
                speed: 0.2,
            },
            "helper": {
                frames: [3, 4, 5],
                speed: 0.4,
            },
            "enemy": {
                frames: [8, 9, 10],
                speed: 0.4,
            },
            "planet": [6],
            "planet2": [7],
            "board": [11],
            "playBtn": [12],
            "exitBtn": [13]
        }
    };
    // SpriteSheet Data Object
    var atlas_Level3Data = {
        "images": ["assets/images/atlas_level3.png"],
        "frames": [
            [20, 14, 319, 114],
            [17, 143, 319, 114],
            [17, 271, 319, 114],
            [57, 438, 212, 201],
            [56, 696, 212, 201],
            [56, 950, 212, 201],
            [330, 384, 144, 56],
            [331, 446, 144, 56],
            [330, 509, 144, 56],
            [331, 572, 144, 56],
            [330, 636, 144, 56],
            [329, 702, 144, 52],
            [329, 764, 144, 52],
            [329, 831, 145, 45],
            [329, 896, 145, 45],
            [330, 957, 145, 45],
            [329, 1018, 145, 45],
            [330, 1081, 145, 45],
            [330, 1143, 145, 45],
            [330, 1206, 145, 45],
            [330, 1268, 145, 45],
            [330, 1332, 145, 45],
            [330, 1394, 145, 45],
            [330, 1456, 145, 45],
            [330, 1517, 145, 45],
            [330, 1578, 145, 45],
            [330, 1641, 145, 45],
            [330, 1698, 145, 51],
            [330, 1760, 145, 51],
            [330, 1821, 145, 51],
            [442, 32, 470, 315],
            [462, 212, 125, 43],
            [462, 263, 125, 43],
        ],
        "animations": {
            "ship": {
                frames: [0, 1, 2],
                speed: 0.2,
            },
            "boss": {
                frames: [3, 4, 5],
                speed: 0.4,
            },
            "enemy": {
                frames: [6, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
                speed: 0.3,
            },
            "board": [30],
            "playBtn": [31],
            "exitBtn": [32]
        }
    };
    var atlas_BoardData = {
        "images": ["assets/images/boards.png"],
        "frames": [
            [20, 10, 469, 310],
            [78, 246, 143, 41],
            [301, 247, 143, 41],
            [22, 336, 468, 309],
            [199, 454, 121, 47],
            [164, 521, 191, 48],
            [21, 665, 468, 311],
            [71, 900, 143, 42],
            [295, 900, 142, 40],
            [514, 13, 463, 311],
            [798, 239, 144, 41],
        ],
        "animations": {
            "OverBrd": [0],
            "againBtn": [1],
            "exitBtn": [2],
            "mainBrd": [3],
            "startBtn": [4],
            "instBtn": [5],
            "winBrd": [6],
            "homeBtn": [7],
            "exit1Btn": [8],
            "instBrd": [9],
            "home1Btn": [10]
        }
    };
    // Asset Manager Class
    var Assets = (function () {
        function Assets() {
        }
        Assets.init = function () {
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            this.atlas_all = new createjs.SpriteSheet(atlas_allData);
            this.atlas_level1 = new createjs.SpriteSheet(atlas_Level1Data);
            this.atlas_level2 = new createjs.SpriteSheet(atlas_Level2Data);
            this.atlas_level3 = new createjs.SpriteSheet(atlas_Level3Data);
            this.atlas_board = new createjs.SpriteSheet(atlas_BoardData);
        };
        return Assets;
    })();
    managers.Assets = Assets;
})(managers || (managers = {}));
//# sourceMappingURL=asset.js.map
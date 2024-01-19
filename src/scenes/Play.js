class Play extends Phaser.Scene {
    constructor() {
        super("playScene")
    }

    create() {
        // tile sprites
        this.starflied = this.add.tileSprite(0, 0, 640, 480, 'starflied').setOrigin(0, 0)
        // borders and UI
        // x coord, y coord, width, height, color
        this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0x00FF00).setOrigin(0, 0) // green UI background
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0) // white border top
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0) // white border bottom
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0) // white border left
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0) // white border right
    }

    update() {
        this.starflied.tilePositionX -= 1
    }
}
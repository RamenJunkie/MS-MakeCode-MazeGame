scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 7 7 7 7 7 7 7 . . . . . 
    . . . e 7 7 7 7 7 7 7 e . . . . 
    . . 7 7 e e e e e e e 7 7 . . . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
    e e 7 . 4 4 4 4 4 4 4 4 . . . . 
    e e . . 4 4 4 4 4 4 4 4 . . b b 
    . . . . 4 4 4 4 4 4 4 4 . . b b 
    . . . . 4 4 4 4 4 4 4 4 . . b b 
    b b b 7 7 7 7 7 7 7 7 7 7 . b b 
    b b b 7 7 7 7 7 7 7 7 7 7 e b b 
    b b b 7 7 7 7 7 7 7 7 7 7 7 e . 
    . b . e e e e e e e e e e . . . 
    . . . 7 7 7 7 7 7 7 7 7 7 . . . 
    . . . . 7 7 . . . 7 7 . . . . . 
    . . . . 7 7 . . . 7 7 . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
scene.cameraFollowSprite(mySprite)
info.startCountdown(20)

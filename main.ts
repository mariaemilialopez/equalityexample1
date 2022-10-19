sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
    if (info.life() == 1) {
        mySprite.say("Last chance")
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            . . . c c d 4 4 4 4 c c . . . . 
            c c . c 1 4 4 4 2 2 d 4 c . . . 
            c 4 c 1 d 4 4 4 4 1 4 2 2 c . . 
            c 4 c 1 4 4 4 4 4 1 2 2 4 4 c . 
            f 4 4 1 4 4 4 4 2 1 4 4 2 4 2 f 
            f 4 f 1 4 4 4 c 2 1 2 f 4 4 4 f 
            f 4 f d 4 4 f 4 4 1 4 4 4 4 4 f 
            f f f f d 2 f 4 c 2 4 4 4 2 f . 
            . . c f c 4 2 f 2 4 d 2 f f 2 . 
            . . c b 2 c 4 4 2 2 f f . 2 2 . 
            . . c d d 2 f f f f 2 . . . . . 
            . . . c c 2 2 . . 2 . . . . . 2 
            `)
    }
})
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . c c c c . . . . . . . . 
    . . . c d d d d c c . . . . . . 
    . . . c d c c c c c c . . . . . 
    c c . c c d 4 4 4 4 c c . . . . 
    c 4 c c 1 4 4 4 4 4 d 4 c . . . 
    f 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
    f 4 4 1 4 4 4 4 4 1 4 4 4 4 c . 
    f 4 f 1 4 4 f c 1 1 4 4 4 4 4 f 
    f 4 f 1 4 4 f 4 c 1 4 f 4 4 4 f 
    f f f d 4 4 f 4 4 1 4 4 4 4 4 f 
    . . f f d 4 4 c c 1 4 4 4 4 f . 
    . . . f c 4 4 4 4 4 d 4 f f . . 
    . . c b d c 4 4 4 4 f f . . . . 
    . . c d d d f f f f . . . . . . 
    . . . c c c . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.setStayInScreen(true)
info.setLife(3)
forever(function () {
    projectile = sprites.createProjectile(img`
        ...........fffffff...ccfff..........
        ..........fbbbbbbbffcbbbbf..........
        ..........fbb111bbbbbffbf...........
        ..........fb11111ffbbbbff...........
        ..........f1cccc1ffbbbbbcff.........
        ..........ffc1c1c1bbcbcbcccf........
        ...........fcc3331bbbcbcbcccf..ccccc
        ............c333c1bbbcbcbccccfcddbbc
        ............c333c1bbbbbbbcccccddbcc.
        ............c333c11bbbbbccccccbbcc..
        ...........cc331c11bbbbccccccfbccf..
        ...........cc13c11cbbbcccccbbcfccf..
        ...........c111111cbbbfdddddc.fbbcf.
        ............cc1111fbdbbfdddc...fbbf.
        ..............cccfffbdbbfcc.....fbbf
        ....................fffff........fff
        `, -100, randint(-50, 50), SpriteKind.Enemy)
    pause(500)
})

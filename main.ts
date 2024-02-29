function NuevoAsteroide () {
    Asteroide = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(300)
        Asteroide.change(LedSpriteProperty.Y, 1)
    }
}
input.onButtonPressed(Button.A, function () {
    jugador.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    jugador.change(LedSpriteProperty.X, 1)
})
let Asteroide: game.LedSprite = null
let jugador: game.LedSprite = null
music.play(music.stringPlayable("C D E C D E F - ", 120), music.PlaybackMode.InBackground)
jugador = game.createSprite(2, 4)
game.setScore(0)
NuevoAsteroide()
basic.forever(function () {
    if (jugador.isTouching(Asteroide)) {
        game.gameOver()
    }
    game.addScore(1)
    Asteroide.delete()
    NuevoAsteroide()
})

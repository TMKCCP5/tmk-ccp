music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
music.play(music.stringPlayable("G B A G C5 B A B ", 120), music.PlaybackMode.UntilDone)
basic.showString("Hello!")
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(100)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . # . #
        # . . . #
        # # # # #
        `)
    basic.pause(100)
    music.play(music.stringPlayable("G B A G C5 B A B ", 120), music.PlaybackMode.UntilDone)
})

input.onGesture(Gesture.FreeFall, function () {
    music.stopAllSounds()
})
input.onGesture(Gesture.Shake, function () {
    music.playMelody("E F D C E G A G ", 120)
})

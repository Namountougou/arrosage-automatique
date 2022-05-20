basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.pause(200)
basic.showIcon(IconNames.SmallSquare)
basic.pause(200)
basic.showIcon(IconNames.Square)
basic.forever(function () {
    if (tinkercademy.MoistureSensor(AnalogPin.P0) < 30) {
        pins.analogWritePin(AnalogPin.P0, 1023)
        basic.showIcon(IconNames.Sad)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.showIcon(IconNames.Happy)
    }
    basic.pause(1000)
})

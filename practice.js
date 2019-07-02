var canvas = document.getElementById("canvas-practice")
var ctx = canvas.getContext("2d")

//X, Y, width, height
ctx.fillStyle ="yellow"
ctx.fillRect(100, 100, 400, 400)

ctx.fillStyle ="blueviolet"
ctx.fillRect(120, 120, 360, 360)

ctx.fillStyle ="pink"
ctx.fillRect(140, 140, 320, 320)

function toRadians(degrees) {
     return degrees * (Math.PI / 180)
}

ctx.beginPath()
    //x, y, radius, 0, radian/pi
    ctx.fillStyle ="red"
    ctx.arc(280, 270, 20, 0, toRadians(360))
    ctx.fill()
    ctx.closePath

    ctx.beginPath()
    //x, y, radius, 0, radian/pi
    ctx.fillStyle ="red"
    ctx.arc("320", 270, 12, 0, toRadians(360))
    ctx.fill()
    ctx.closePath

    ctx.beginPath()
    //x, y, radius, 0, radian/pi
    ctx.fillStyle ="orange"
    ctx.arc("300", 310, 30, 0, toRadians(180))
    ctx.fill()
    ctx.closePath
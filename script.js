let canvas = document.getElementById("quadro");
let ctx = canvas.getContext("2d");

// ctx.fillStyle = "#0000ff"
// ctx.fillRect(0, 0, 100, 100);

// ctx.fillStyle = "rgb(255, 0, 255)"
// ctx.fillRect(200, 200, 100, 100)

// ctx.clearRect(50, 50, 50, 50)

// ctx.fillStyle = "#000"

// ctx.fillRect(0, 0, 50, 50)

// for (let spacey = 0; spacey <= 500; spacey += 100) {
//     for (let spacex = 0; spacex <= 800; spacex+=100) {
//         if (spacex%200 == 0) {
//             ctx.fillStyle = "#000"
//             ctx.fillRect(spacex, spacey, 100, 100)
//         } else {
//             ctx.fillStyle = "#fff"
//             ctx.fillRect(spacex, spacey, 100, 100)
//         }
//     }
// }


let x = 0
let y = 0

let direcaox = ""
let direcaoy = ""

let animacao;
let largura = 800
let altura = 600

ctx.fillStyle = "#000"

cores = ["rgb(255, 0, 0)", "rgb(0, 255, 0)", "rgb(0, 0, 255)"]
i = 0
function desenhar() {
    ctx.clearRect(0, 0, largura, altura)

    ctx.fillRect(x, y, 50, 50)

    if (direcaox == "sim") {
        x--
    } else {
        x++
    }

    if (direcaoy == "sim") {
        y--
    } else {
        y++
    }

    if (x == 750) {
        direcaox = "sim"
        if (i == 2) {
            i = 0
        } else {
            i++
        }
        ctx.fillStyle = cores[i]

    } else if (x == 0) {
        direcaox = ""
        if (i == 2) {
            i = 0
        } else {
            i++
        }
        ctx.fillStyle = cores[i]
    }

    if (y == 550) {
        direcaoy = "sim"
        if (i == 2) {
            i = 0
        } else {
            i++
        }
        ctx.fillStyle = cores[i]
        
    } else if (y == 0) {
        direcaoy = ""
        if (i == 2) {
            i = 0
        } else {
            i++
        }
        ctx.fillStyle = cores[i]
    }

    animacao = requestAnimationFrame(desenhar)
}

desenhar()
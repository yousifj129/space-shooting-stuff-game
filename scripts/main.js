// https://stackoverflow.com/questions/17130395/real-mouse-position-in-canvas
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width,
        y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
    };
}
function init() {
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = true; 
    ctx.imageSmoothingQuality = "high"
    const img1 = new Image(100,100)
    img1.src = "../circle.png"
    let objects = [
        {
            name: "player",
            position: [10,10],
            size: [25, 25],
            img: new Image(100,100),
            src: "../circle.png"
        },
        {
            name: "circle",
            position: [100,10],
            size: [25, 25],
            img: new Image(100,100),
            src: "../circle.png"
        }
    ]
    let player = objects[0]
    function start() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        window.addEventListener("keypress", function (e) {
            if (e.key == "d") {
                player.position = [player.position[0] + 15, player.position[1]]
            }
            if (e.key == "a") {
                player.position = [player.position[0] - 15, player.position[1]]
            }
            if (e.key == "w") {
                player.position = [player.position[0], player.position[1] - 15]
            }
            if (e.key == "s") {
                player.position = [player.position[0], player.position[1] + 15]
            }
        })
    }
    function update() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        for (let i = 0; i < objects.length; i++) {
            const object = objects[i]
            object.img.src = object.src
            ctx.drawImage(object.img, object.position[0], object.position[1], object.size[0], object.size[1]);
        }
    }
    start()
    setInterval(update, 1);
}

document.addEventListener("DOMContentLoaded", init)


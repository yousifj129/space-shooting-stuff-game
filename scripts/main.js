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
    const img1 = document.getElementById("source")
    let pos = [10, 10]
    
    function start() {
        ctx.drawImage(img1, 10, 10, 10, 10);
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        window.addEventListener("keypress", function (e) {
            if (e.key == "d") {
                pos = [pos[0] + 15, pos[1]]
            }
            if (e.key == "a") {
                pos = [pos[0] - 15, pos[1]]
            }
            if (e.key == "w") {
                pos = [pos[0], pos[1] - 15]
            }
            if (e.key == "s") {
                pos = [pos[0], pos[1] + 15]
            }
        })
    }
    function update() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(img1, pos[0], pos[1], 10, 10);

    }
    start()
    setInterval(update, 1);
}

document.addEventListener("DOMContentLoaded", init)


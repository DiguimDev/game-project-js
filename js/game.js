const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const canvasWidth = 1024;
const canvasHeight = 576;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

const desiredFps = 5;
const frameTime = 1000 / desiredFps;

let prevTime = performance.now();
let lag = 0;

animate()

function animate() {
    window.requestAnimationFrame(animate)

    const currentTime = performance.now()
    const elapsed = currentTime - prevTime
    prevTime = currentTime;
    lag += elapsed;

    handleControls()

    while (lag >= frameTime) {
        ctx.fillStyle = "black"
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);

        background.update()
        player.update()

        lag -= frameTime
    }

    background.update()
    player.update()

}
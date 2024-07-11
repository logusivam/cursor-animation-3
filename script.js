let clientX = -100;
let clientY = -100;
const innercursor = document.querySelector(".cursor--small");

const initCursor = () => {
    document.addEventListener("mousemove", e => {
        clientX = e.clientX;
        clientY = e.clientY;
    });

    const render = () => {
        innercursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
        requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
};

initCursor();
let lastX = 0;
let lastY = 0;
let isStuck = false;
let showCursor = false;
let group, stuckX, stuckY, fillOuterCursor;

const initCanvas = () => {
    const canvas = document.querySelector(".cursor--canvas");
    const shapeBounds = {
        width: 75,
        height: 75
    };
    paper.setup(canvas);
    const StrokeColor = "rgba(255, 0, 0, 0.5)";
    const strokeWidth = 1;
    const segments = 8;
    const radius = 25;

    const noiseScale = 150; //speed
    const noiseRange = 4;  //range of distortion
    let isNoisy = false; // state

    const polygon = new paper.Path.RegularPolygon(
        
    )
}
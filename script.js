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
let group, stuckX, stuckY, fillOuterCircle;


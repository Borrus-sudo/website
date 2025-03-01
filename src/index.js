/**
 * This code belongs to antfu!!!! (Huge thanks!)
 */

document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-1';

    const ctx = canvas.getContext('2d');
    const random = Math.random;
    const r180 = Math.PI;
    const r90 = Math.PI / 2;
    const r15 = Math.PI / 12;
    const color = '#88888825';
    const MIN_BRANCH = 30;
    const len = 6;
    let steps = [];
    let prevSteps = [];
    let lastTime = performance.now();
    const interval = 1000 / 40; // 50fps

    function resizeCanvas() {
        canvas.width = window.innerWidth * window.devicePixelRatio;
        canvas.height = window.innerHeight * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    function polar2cart(x = 0, y = 0, r = 0, theta = 0) {
        return [x + r * Math.cos(theta), y + r * Math.sin(theta)];
    }

    function step(x, y, rad, counter = { value: 0 }) {
        const length = random() * len;
        counter.value += 1;
        const [nx, ny] = polar2cart(x, y, length, rad);

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(nx, ny);
        ctx.stroke();

        const rad1 = rad + random() * r15;
        const rad2 = rad - random() * r15;

        if (
            nx < -100 ||
            nx > canvas.width + 100 ||
            ny < -100 ||
            ny > canvas.height + 100
        )
            return;

        const rate = counter.value <= MIN_BRANCH ? 0.8 : 0.5;

        if (random() < rate) steps.push(() => step(nx, ny, rad1, counter));
        if (random() < rate) steps.push(() => step(nx, ny, rad2, counter));
    }

    function frame() {
        if (performance.now() - lastTime < interval) return;
        prevSteps = steps;
        steps = [];
        lastTime = performance.now();

        if (!prevSteps.length) return;
        prevSteps.forEach((fn) => (random() < 0.5 ? steps.push(fn) : fn()));
    }

    let animationFrame;
    function animate() {
        frame();
        animationFrame = requestAnimationFrame(animate);
    }

    function start() {
        cancelAnimationFrame(animationFrame);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.lineWidth = 1;
        ctx.strokeStyle = color;
        prevSteps = [];
        const middle = () => random() * 0.6 + 0.2;
        steps = [
            () => step(middle() * canvas.width, -5, r90),
            () => step(middle() * canvas.width, canvas.height + 5, -r90),
            () => step(-5, middle() * canvas.height, 0),
            () => step(canvas.width + 5, middle() * canvas.height, r180),
        ];
        if (canvas.width < 500) steps = steps.slice(0, 2);
        animate();
    }

    start();
});

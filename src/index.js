/**
 * Thanks antfu!
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
    canvas.style.maskImage = 'radial-gradient(circle, transparent, black)';
    canvas.style.webkitMaskImage =
        'radial-gradient(circle, transparent, black)';

    const ctx = canvas.getContext('2d');
    const random = Math.random;
    const r180 = Math.PI;
    const r90 = Math.PI / 2;
    const r15 = Math.PI / 12;
    const color = '#88888825';
    const MIN_BRANCH = 30;
    let len = 6;
    let stopped = false;
    let steps = [];
    let prevSteps = [];
    let lastTime = performance.now();
    const interval = 1000 / 40; // 50fps
    let animationFrame;

    function resizeCanvas() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const dpr = window.devicePixelRatio || 1;

        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);
        ctx.clearRect(0, 0, width, height);
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

        if (
            nx < -100 ||
            nx > canvas.width + 100 ||
            ny < -100 ||
            ny > canvas.height + 100
        )
            return;

        let rate = counter.value <= MIN_BRANCH ? 0.8 : 0.5;

        if (random() < rate)
            steps.push(() => step(nx, ny, rad + random() * r15, counter));
        if (random() < rate)
            steps.push(() => step(nx, ny, rad - random() * r15, counter));
    }

    function frame() {
        if (performance.now() - lastTime < interval) {
            animationFrame = requestAnimationFrame(frame);
            return;
        }

        prevSteps = steps;
        steps = [];
        lastTime = performance.now();

        if (!prevSteps.length) {
            stopped = true;
            return;
        }

        prevSteps.forEach((fn) => {
            if (random() < 0.5) steps.push(fn);
            else fn();
        });

        animationFrame = requestAnimationFrame(frame);
    }

    function start() {
        cancelAnimationFrame(animationFrame);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.lineWidth = 1;
        ctx.strokeStyle = color;
        prevSteps = [];
        stopped = false;

        function randomMiddle() {
            return random() * 0.6 + 0.2;
        }

        steps = [
            () => step(randomMiddle() * canvas.width, -5, r90),
            () => step(randomMiddle() * canvas.width, canvas.height + 5, -r90),
            () => step(-5, randomMiddle() * canvas.height, 0),
            () => step(canvas.width + 5, randomMiddle() * canvas.height, r180),
        ];

        if (canvas.width < 500) steps = steps.slice(0, 2);
        animationFrame = requestAnimationFrame(frame);
    }

    start();
});

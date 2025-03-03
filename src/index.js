// HTML structure
// <div id="tree-container">
//   <canvas id="canvas"></canvas>
// </div>

document.addEventListener('DOMContentLoaded', () => {
    // Constants
    const r180 = Math.PI;
    const r90 = Math.PI / 2;
    const r15 = Math.PI / 12;
    const color = '#88888825';
    const MIN_BRANCH = 30;
    const branchLength = 6;

    // Variables
    let size = {
        width: window.innerWidth,
        height: window.innerHeight,
    };
    let stopped = false;
    let steps = [];
    let prevSteps = [];
    let rafId = null;
    let lastTime = 0;
    const interval = 1000 / 40; // 40fps

    // Create container with standard CSS
    const container = document.createElement('div');
    container.id = 'tree-container';
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.bottom = '0';
    container.style.left = '0';
    container.style.right = '0';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '-1';

    const canvas = document.createElement('canvas');
    canvas.width = 400;
    canvas.height = 400;
    container.appendChild(canvas);
    document.body.appendChild(container);

    // Helper functions
    function initCanvas(canvas, width = 400, height = 400, _dpi) {
        const ctx = canvas.getContext('2d');
        const dpr = window.devicePixelRatio || 1;
        const bsr =
            ctx.webkitBackingStorePixelRatio ||
            ctx.mozBackingStorePixelRatio ||
            ctx.msBackingStorePixelRatio ||
            ctx.oBackingStorePixelRatio ||
            ctx.backingStorePixelRatio ||
            1;
        const dpi = _dpi || dpr / bsr;

        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        canvas.width = dpi * width;
        canvas.height = dpi * height;
        ctx.scale(dpi, dpi);

        return { ctx, dpi };
    }

    function polar2cart(x = 0, y = 0, r = 0, theta = 0) {
        const dx = r * Math.cos(theta);
        const dy = r * Math.sin(theta);
        return [x + dx, y + dy];
    }

    function randomMiddle() {
        return Math.random() * 0.6 + 0.2;
    }

    // Initialize canvas
    const { ctx } = initCanvas(canvas, size.width, size.height);

    // Update mask
    function updateMask() {
        const mask = 'radial-gradient(circle, transparent, black)';
        container.style.maskImage = mask;
        container.style.webkitMaskImage = mask;
    }
    updateMask();

    // Add print media query for hiding the effect when printing
    const style = document.createElement('style');
    style.textContent = `
    @media print {
      #tree-container {
        display: none;
      }
    }
  `;
    document.head.appendChild(style);

    // Window resize handler
    window.addEventListener('resize', () => {
        size.width = window.innerWidth;
        size.height = window.innerHeight;
        initCanvas(canvas, size.width, size.height);
        updateMask();
    });

    // Create step function
    function step(x, y, rad, counter = { value: 0 }) {
        const length = Math.random() * branchLength;
        counter.value += 1;

        const [nx, ny] = polar2cart(x, y, length, rad);

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(nx, ny);
        ctx.stroke();

        const rad1 = rad + Math.random() * r15;
        const rad2 = rad - Math.random() * r15;

        // Check if out of bounds
        if (
            nx < -100 ||
            nx > size.width + 100 ||
            ny < -100 ||
            ny > size.height + 100
        ) {
            return;
        }

        // Determine branching rate
        const rate = counter.value <= MIN_BRANCH ? 0.8 : 0.5;

        // Left branch
        if (Math.random() < rate) {
            steps.push(() => step(nx, ny, rad1, counter));
        }

        // Right branch
        if (Math.random() < rate) {
            steps.push(() => step(nx, ny, rad2, counter));
        }
    }

    // Animation frame function
    function frame(timestamp) {
        if (!lastTime) lastTime = timestamp;

        if (timestamp - lastTime >= interval) {
            prevSteps = steps;
            steps = [];
            lastTime = timestamp;

            if (!prevSteps.length) {
                cancelAnimationFrame(rafId);
                rafId = null;
                stopped = true;
                return;
            }

            // Execute steps from previous frame
            prevSteps.forEach((stepFn) => {
                // 50% chance to keep the step for the next frame for organic look
                if (Math.random() < 0.5) {
                    steps.push(stepFn);
                } else {
                    stepFn();
                }
            });
        }

        rafId = requestAnimationFrame(frame);
    }

    // Start function
    function start() {
        if (rafId) {
            cancelAnimationFrame(rafId);
            rafId = null;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.lineWidth = 1;
        ctx.strokeStyle = color;

        prevSteps = [];
        steps = [
            () => step(randomMiddle() * size.width, -5, r90),
            () => step(randomMiddle() * size.width, size.height + 5, -r90),
            () => step(-5, randomMiddle() * size.height, 0),
            () => step(size.width + 5, randomMiddle() * size.height, r180),
        ];

        if (size.width < 500) {
            steps = steps.slice(0, 2);
        }

        lastTime = 0;
        rafId = requestAnimationFrame(frame);
        stopped = false;
    }

    // Initialize
    start();

    // Add start to window for external access
    window.startTreeEffect = start;
});

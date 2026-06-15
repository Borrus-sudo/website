import { V86 } from 'v86';
import wasm_path from 'v86/build/v86.wasm?url';
import crt_url from '../assets/logos/crt.png';
import { fx } from './glfx.js';
// import win_img_url from '../assets/images/win31.img?url';

// window.addEventListener('load', fakeCRT, false);

function crt_effect(canvas) {
    console.log(crt_url);
    // const lines = new Image();
    // lines.src = crt_url;
    let glcanvas, source, srcctx, texture, w, h, hw, hh, w50;

    // Try to create a WebGL canvas (will fail if WebGL isn't supported)
    try {
        glcanvas = fx.canvas();
    } catch (e) {
        console.log(e);
        return;
    }

    source = canvas;
    srcctx = source.getContext('2d');

    // This tells glfx what to use as a source image
    texture = glcanvas.texture(source);

    // Just setting up some details to tweak the bulgePinch effect
    w = source.width;
    h = source.height;
    hw = w / 2;
    hh = h / 2;
    w50 = w * 0.5;

    // Hide the source 2D canvas and put the WebGL Canvas in its place
    source.parentNode.insertBefore(glcanvas, source);
    source.style.display = 'none';
    glcanvas.className = source.className;
    glcanvas.id = source.id;
    source.id = 'old_' + source.id;
    glcanvas.width = w;
    glcanvas.height = h;
    glcanvas.style.width = canvas.style.width;
    glcanvas.style.height = canvas.style.height;

    // pretty important in the sense that I have no control over the rendering canvas
    setInterval(
        function () {
            canvas.style.display = 'none';
            // Give the source scanlines
            glcanvas.style.width = canvas.style.width;
            glcanvas.style.height = canvas.style.height;
            w = source.width;
            h = source.height;
            hw = w / 2;
            hh = h / 2;
            w50 = w * 0.5;
            // srcctx.drawImage(lines, 0, 0, w, h);

            // Load the latest source frame
            texture.loadContentsOf(source);

            // Apply WebGL magic
            glcanvas
                .draw(texture)
                .bulgePinch(hw, hh, w50, 0.01)
                .vignette(0.1, 0.7)
                .update();
        },
        Math.floor(1000 / 50),
    );
    return glcanvas;
}

async function download_buffer(url) {
    const blob = await fetch(url).then((res) => res.blob());
    const buffer = await blob.arrayBuffer();
    return buffer;
}

async function download_img(url) {
    const blob = await fetch(url).then((res) => res.blob());
    let ds = new DecompressionStream('gzip');
    let decompressedStream = blob.stream().pipeThrough(ds);
    return await new Response(decompressedStream).arrayBuffer();
}

async function app() {
    const win_img_url = `https://geographical-coffee-leech.myfilebase.com/ipfs/QmfTcNDCmDbVR5join7RB85xLU98H4hkWXf4Jxe5dmfBSf`;
    const bios_url = `https://raw.githubusercontent.com/copy/v86/refs/heads/master/bios/bochs-bios.bin`;
    const vga_bios_url = `https://raw.githubusercontent.com/copy/v86/refs/heads/master/bios/bochs-vgabios.bin`;

    const screen_container = document.getElementById('screen_container');

    const startButton = document.createElement('button');
    startButton.textContent = 'Loading files baby...';
    startButton.disabled = true;
    screen_container.before(startButton);

    const downloadButton = document.createElement('button');
    downloadButton.textContent = 'Download State';
    downloadButton.style.marginLeft = '8px';
    downloadButton.disabled = true;
    startButton.after(downloadButton);

    const [win_img, bios, vga_bios] = await Promise.all([
        download_img(win_img_url),
        download_buffer(bios_url),
        download_buffer(vga_bios_url),
    ]);

    const emulator = new V86({
        wasm_path,
        screen: {
            container: screen_container,
            use_graphical_text: true,
        },
        log_level: 0x2000000,
        uart1: true,
        memory_size: 32 * 1024 * 1024,
        vga_memory_size: 2 * 1024 * 1024,
        bios: {
            buffer: bios,
        },
        vga_bios: {
            buffer: vga_bios,
        },
        hda: {
            buffer: win_img,
        },
        modem: {
            uart: 1,
            phonebook: {
                '10.0.0.44.23456': 'ws://localhost:23456/',
                // '911': 'ws://localhost:23456/',
            },
        },
        autostart: false,
    });
    startButton.textContent = 'Start';
    startButton.disabled = false;
    downloadButton.disabled = false;

    const canvas = document.querySelector('canvas');
    let glfx_canvas;

    document.addEventListener('pointerlockchange', () =>
        emulator.mouse_set_enabled(document.pointerLockElement === glfx_canvas),
    );

    startButton.addEventListener('click', async () => {
        try {
            startButton.disabled = true;
            await emulator.run();
            emulator.mouse_set_enabled(false);
            glfx_canvas = crt_effect(canvas);
            glfx_canvas.addEventListener('mousedown', () => {
                if (document.pointerLockElement !== glfx_canvas) {
                    glfx_canvas.requestPointerLock();
                }
            });
            await glfx_canvas.requestFullscreen();
        } catch (_) {
            location.reload();
        }
    });

    downloadButton.addEventListener('click', () => {
        downloadButton.disabled = true;
        downloadButton.textContent = 'Preparing download...';

        if (!emulator.is_running) {
            alert('Start the emulator first');
            return;
        }

        const hda = emulator.v86.cpu.devices.ide.primary.master.buffer;
        const blob = new Blob([hda.buffer], {
            type: 'application/octet-stream',
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'win31-updated.img';
        document.body.append(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);

        downloadButton.disabled = false;
        downloadButton.textContent = 'Download State';
    });
    return emulator;
}

document.addEventListener('DOMContentLoaded', async () => {
    try {
        await app();
    } catch (e) {
        location.reload();
    }
});

const canvas = document.getElementById('oscilloscope');
const context = canvas.getContext('2d');

// Set the canvas dimensions to match the size of the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const audioContext = new AudioContext();
const oscillator = audioContext.createOscillator();
oscillator.connect(audioContext.destination);
oscillator.start();

const analyser = audioContext.createAnalyser();
oscillator.connect(analyser);

const data = new Uint8Array(analyser.frequencyBinCount);
analyser.getByteTimeDomainData(data);

function draw() {
    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Get the waveform data
    analyser.getByteTimeDomainData(data);

    // Draw the oscilloscope trace on the canvas
    context.beginPath();
    for (let i = 0; i < data.length; i++) {
        const x = (canvas.width * i) / data.length;
        const y = (data[i] / 128) * canvas.height;
        if (i === 0) {
            context.moveTo(x, y);
        } else {
            context.lineTo(x, y);
        }
    }
    context.stroke();
}

// Call the draw function repeatedly using requestAnimationFrame
function animate() {
    draw();
    requestAnimationFrame(animate);
}

animate();

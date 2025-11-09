var resolution = 0.01;
var size = 10;

function drawSpirograph(event) {

    const R = parseFloat(document.getElementById('RInput').value);
    const r = parseFloat(document.getElementById('rInput').value);
    const canvas = document.getElementById('SpirographCanvas');
    const ctx = canvas.getContext('2d');


    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 1;

    // center
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    // We'll use the common spirograph param where O (offset) defaults to r/2 for visible patterns
    const O = 1;

    // start
    let t = 0;
    let x = (R - r) * Math.cos(t) + O * Math.cos(((R - r) / r) * t);
    let y = (R - r) * Math.sin(t) - O * Math.sin(((R - r) / r) * t);
    ctx.moveTo(cx + size*x, cy + size* y);

    for (t = 0; t <= 1000; t += resolution) {
        x = (R - r) * Math.cos(t) + O * Math.cos(((R - r) / r) * t);
        y = (R - r) * Math.sin(t) - O * Math.sin(((R - r) / r) * t);
        ctx.lineTo(cx + size* x, cy + size*y);
    }

    ctx.stroke();
}

var resolution = 1.1;
var size = 10;
var padding = 20;

function init(){
    document.getElementById('oInput').max = document.getElementById('rInput').value;
    drawSpirograph();

}

function drawSpirograph(event) {

    const R = parseFloat(document.getElementById('RInput').value);
    const r = parseFloat(document.getElementById('rInput').value);
    const canvas = document.getElementById('SpirographCanvas');
    const ctx = canvas.getContext('2d');


    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 1;
    resolution = parseFloat(document.getElementById('resolutionInput').value) / 1000;

    // center
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    const O = parseFloat(document.getElementById('oInput').value);
    size = (Math.min(cx,cy) - padding)/((R-r) + O);

    // TODO 
    /*
    read about ctx move line functionaliy

    differenciate equations to find max lengths for x and y to set size
    add more variable input, as well as some buttons for presets
    add color options
    clean up index.html with style.css create dilineation between input and canvas (draw box around canvas and put a line between input)


    */


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
